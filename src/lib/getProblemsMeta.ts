import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeAutoLinkHeadings from 'rehype-autolink-headings' // creates anchor tags
import rehypeSlug from 'rehype-slug' // creates id for these anchor tags
import remarkMath from 'remark-math'
import rehypeMathjax from 'rehype-mathjax'

type Filetree = {
    "tree": [
        {
            "path": string,
            // "mode": string, // 100644 -> (blob/file) 040000 -> (tree/subdirectory) not needed tbh
        }
    ]
}


export async function getSectionByChSec(filename: string): Promise<pageDocument | undefined> {
    // console.log(`https://raw.githubusercontent.com/ashvinbondada/axler-mdx-solutions/main/${ch_sec}-content.mdx`)
    const content_res = await fetch(`https://raw.githubusercontent.com/ashvinbondada/axler-mdx-solutions/main/${filename}`, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        }
    })

    if (!content_res)  {
        console.log("failing here")
        return undefined
    }

    const rawMdx = await content_res.text()
    // console.log(rawMdx)
    
    if (rawMdx === '404: Not Found') {
        console.log("failing here 404")
        return undefined
    }

    const {frontmatter, content } = await compileMDX<{title: string, tags: string[]}>({
        source: rawMdx,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [remarkMath],
                rehypePlugins: [
                    rehypeSlug,
                    rehypeMathjax,
                    [rehypeAutoLinkHeadings, {
                            behavior: 'wrap'
                        }
                    ]
                ],
            }
        },
    })
    
    const id = filename.replace(/-.*\.mdx$/, '');
    // const section_files = filename.includes("config") ? 
    const contentObj: pageDocument = {
        meta: {id, title: frontmatter.title, tags: frontmatter.tags}, content
    }
    
    return contentObj
}


export async function getBookMeta(): Promise<Map<Meta, Meta[]> | undefined > {
    const res = await fetch('https://api.github.com/repos/ashvinbondada/axler-mdx-solutions/git/trees/main?recursive=1', {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        },
    })

    if (!res.ok) {
        console.log("not working")
        return undefined
    }

    const repo_file_tree: Filetree = await res.json()
    // console.log(repo_file_tree)
    // THIS IS USEFUL FOR GETTING THE CHAPTER SECTION CONTENT/PROBLEMS

    // const res_files = res_json.tree.map(obj => obj.path).filter(path => path.startsWith(`${chapter_section}`) && path.endsWith('.mdx'))
    const repo_config_files = repo_file_tree.tree.map(obj => obj.path).filter(path => path.match(/.*config\.mdx$/));

    // console.log(repo_config_files)

    const chapterMap: Map<Meta, Meta[]> = new Map();
    for (const file of repo_config_files) {
        const chapter = await getSectionByChSec(file)
        const subsection_list: Meta[] = []
        if (chapter) {
           for (const subsection of chapter.meta.tags) {
                const subsection_content = await getSectionByChSec(`${subsection}-content.mdx`)
                if (subsection_content) {
                    subsection_list.push(subsection_content.meta)
                    chapterMap.set(chapter.meta, subsection_list)
                }
           }
        }
    }

    // return posts.sort((a, b) => a.date < b.date ? 1 : -1)

    return chapterMap
}