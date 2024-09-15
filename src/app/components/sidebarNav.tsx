// import React from 'react'
// import { createConnection } from "net";
// import SidebarButton from "./sidebar"
import Link from "next/link";
// import { createContext } from "vm";

type Props = {
  active: boolean
}

// const active = createContext({
//   active: false
// })

export default function SidebarNav({active}: Props) {
  // const [active, setActive] = useState(false)

  // const toggleSidebar = () => {
  //   setActive(!active)
  // }

  return (
    <aside 
      className={`fixed bg-anti-flash-white text-jet dark:text-anti-flash-white dark:bg-smoky-black ${active ? "w-[200px] border-r-2 border-r-smoky-black dark:border-r-anti-flash-white" : "w-[0px] border-none"} h-[calc(100vh-64px)] overflow-y-auto z-50  
        `}
      >
        {/* <div className="flex justify-end">
        <SidebarButton active_prop={active} /> 
        </div> */}
        <div className="flex-col max-h-screen grid justify-items-center px-2 ${active ? 'block' : 'hidden'}`">
          <Link className="text-xl" href="/">Home</Link>
          <nav> 
              <div className="prose">
                <h1 className="prose-xl">Hello</h1>
              </div>
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
          </nav>
        </div>
    </aside>
  )
}
