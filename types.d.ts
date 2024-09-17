type Meta = {
    id: string // 1a or xy where x - number y - letter (lowercase used in href
    title: string, // displayed with the link and on the Content page
    // section_files: string[] | undefined, // ["1a", "1b", ...]
    tags: string[]
    // not including tags since 
}

type pageDocument = {
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>
}

type Section = {
    meta: Meta,
    problem: pageDocument,
    content: pageDocument
}