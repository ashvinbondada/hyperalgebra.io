import { getBookMeta, getSectionByChSec } from '@/lib/getProblemsMeta'
// import Link from 'next/link';
import React from 'react'
import { notFound } from 'next/navigation';


export const revalidate = 0;

type Props = {
    params: {
        chapter_section: string
    }
}
export async function generateStaticParams() {
  const book = await getBookMeta()

  if (!book) return []
  const allSubsections: Meta[][] = Array.from(book.values());

  return allSubsections.flat().map(meta => ({
    chapter_section: meta.id, // Map to the desired output structure
  }));
}

export default async function ChapterSectionpage({params: {chapter_section}}: Props) {
  const section_content = await getSectionByChSec(`${chapter_section}-content.mdx`)
  if (!section_content)
    notFound()

  const problem_content = await getSectionByChSec(`${chapter_section}-problems.mdx`)
  if (!problem_content)
    notFound()

  const { content: sectContent} = section_content
  const { content: probContent} = problem_content

  return (
    <div className='flex flex-row h-full'>
       <div className="overflow-y-auto grid justify-items-center w-1/2 border-r-2 border-r-gray p-4">
        {/* <h2 className="text-3xl mt-4 mb-0 text-smoky-black dark:text-white">{sectMeta.title}</h2> */}
        <article className=' prose text-smoky-black dark:text-white'>
          {sectContent}
        </article>
      </div>
      <div className="overflow-y-auto grid justify-items-center w-1/2 border-l-2 border-l-gray p-4">
        {/* <h2 className="grid justify-items-center
         text-3xl mt-4 mb-0 text-smoky-black dark:text-white">{probMeta.title}</h2> */}
        <article className='prose grid place-items-center text-smoky-black dark:text-white'>
          {probContent}
        </article>
      </div>
        {/* <section>
            <h3>Related:</h3>
            <div className="flex flex-row gap-4">
                {tags}
            </div>
        </section> */}
        {/* <p className="mb-10">
            <Link href="/">← Back to home</Link>
        </p> */}
    </div>
  )
}
