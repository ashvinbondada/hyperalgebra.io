import Link from "next/link";

type Props = {
    chapterToSections: [Meta, Meta[]];
};

export default function SidebarItem({ chapterToSections }: Props) {
    const [chapterMeta, subsections] = chapterToSections
    return (
        <div className="flex flex-col items-center overflow-y-auto ">
            {/* Iterate over the chapters */}
            {/* {Array.from(bookTree.entries()).map(([chapterMeta, subsections]) => (
                <div key={chapterMeta.id} className="mb-4">
                    Render the chapter ID and title */}
            <h1 className="text-lg font-bold">
                <Link href={`/${chapterMeta.id}a`}>
                    {chapterMeta.title}
                </Link>
            </h1>
                    {/* Render the subsections indented */}
            <ul className="pl-4">
                {subsections.map((subsection) => (
                    <li key={`item-${subsection.id}`}>
                        <Link href={`/${subsection.id}`}>
                            {subsection.title}
                        </Link>
                    </li>
                ))}
            </ul>
                {/* </div> */}
            {/* ))} */}
        </div>
    );
}
