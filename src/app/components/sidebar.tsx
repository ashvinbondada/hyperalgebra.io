'use client'; // Marks this as a client component in Next.js

import { useState } from 'react';
import { BsWindowSidebar, BsHouseDoor, BsPersonVcard } from "react-icons/bs";
import SidebarNav from './sidebarNav';
import Link from 'next/link';

type Props = {
  book: Map<Meta, Meta[]>
}

export default function Sidebar({book}: Props) {
  const [active, setActive] = useState(false); // Local state for client-side rendering

  const toggleSidebar = () => {
    setActive(!active); // Toggle the sidebar open/close state
  };

  return (
    <div className={` 
      ${active ? "w-[200px] bg-gray" : "w-[70px] bg-anti-flash-white dark:bg-smoky-black"} h-full flex flex-col  transition-all duration-300 ease-in-out border-r-2 border-r-gray
    `}>
      {/* Sidebar Toggle Button */}
      <div id="sidebar-buttons" className={`w-full h-16 flex justify-between items-center px-4 rounded-bl-lg rounded-br-lg text-2xl ${active ? "bg-jet/40 z-40 shadow-md" : "bg-anti-flash-white dark:bg-smoky-black"} transition-all duration-300 ease-in-out`}>
          <button onClick={() => toggleSidebar()} className={`p-2 rounded-md hover:bg-transparent/10 dark:text-dun dark:hover:bg-transparent/10`}>
            <BsWindowSidebar />
          </button>
          <div className={`p-2 rounded-md hover:bg-transparent/10 grid place-items-center transition-opacity duration-300 ease-in-out ${active ? "opacity-100" : "opacity-0"}`}>
            <Link href="/">
              {/* Home */}
              <BsHouseDoor />
            </Link>
          </div>
      </div>

      {/* Sidebar Navigation */}
      <div id="sidebar-nav" className='w-full flex-1 overflow-y-auto transition-all duration-300 ease-in-out'>
        <SidebarNav active={active} book={book}/>
      </div>

      {/* Another button at the bottom */}
      <div id="sidebar-buttons" className={`w-full h-16 justify-start items-center px-4 rounded-lg flex flex-row text-2xl ${active ? "bg-jet/40 z-40 shadow-md" : "bg-anti-flash-white dark:bg-smoky-black"} transition-all duration-300 ease-in-out`}>
          <button onClick={() => toggleSidebar()} className={`p-2 rounded-md hover:bg-transparent/10 dark:text-dun dark:hover:bg-transparent/10`}>
            <BsPersonVcard />
          </button>
          <div className={`w-full h-full grid place-items-center transition-opacity duration-300 ease-in-out ${active ? "opacity-100" : "opacity-0"}`}>
            <p>User</p>
          </div>
      </div>

    </div>
  );
}
