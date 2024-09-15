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
      >
        {/* <div className="flex justify-end">
        <SidebarButton active_prop={active} /> 
        </div> */}
        <div className={`overflow-hidden flex-col grid justify-items-center ${active ? 'block' : 'hidden'}`}>
          <Link className="text-xl" href="/">Home</Link>
          <nav> 
              <h1 className="text-xl">Hello</h1>
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
              <div>hello</div>
          </nav>
        </div>
    </aside>
  )
}
