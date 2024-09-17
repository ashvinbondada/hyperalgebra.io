// import React from 'react'
// import { createConnection } from "net";
// import SidebarButton from "./sidebar"
import SidebarItem from "./sidebarItem";
// import { createContext } from "vm";

type Props = {
  active: boolean,
  book: Map<Meta, Meta[]>
}

// const active = createContext({
//   active: false
// })
export default function SidebarNav({active, book}: Props) {
  // console.log("Book Map:", book);
  return (
    <aside 
      >
        {/* <div className="flex justify-end">
        <SidebarButton active_prop={active} /> 
        </div> */}
        <div className={`overflow-hidden flex-col grid justify-items-center ${active ? 'block' : 'hidden'}`}>
          {/* <Link className="text-xl" href="/">Home</Link> */}
          <nav className="flex flex-col h-full "> 
            {Array.from(book.entries()).map(([chapterMeta, subsections]) => 
              <SidebarItem key={`nav-${chapterMeta.id}`}chapterToSections={[chapterMeta, subsections]} /> 
            )}
              {/* <h1 className="text-xl">Hello</h1>
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
              <div>hello</div> <div>hello</div>
              <div>hello</div>
              <div>hello</div> <div>hello</div>
              <div>hello</div>
              <div>hello</div> <div>hello</div>
              <div>hello</div>
              <div>hello</div> <div>hello</div>
              <div>hello</div>
              <div>hello</div> <div>hello</div>
              <div>hello</div>
              <div>hello</div> <div>hello</div>
              <div>hello</div>
              <div>hello</div> <div>hello</div>
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
              <div>hello</div> <div>hello</div>
              <div>hello</div>
              <div>hello</div> <div>hello</div>
              <div>hello</div>
              <div>hello</div> */}
          </nav>
        </div>
    </aside>
  )
}
