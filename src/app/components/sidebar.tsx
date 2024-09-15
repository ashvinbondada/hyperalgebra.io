'use client'; // Marks this as a client component in Next.js

import { useState } from 'react';
import { BsWindowSidebar } from "react-icons/bs";
import SidebarNav from './sidebarNav';

type Props = {
  active_prop: boolean;
}

export default function Sidebar({ active_prop }: Props) {
  const [active, setActive] = useState(active_prop); // Local state for client-side rendering

  const toggleSidebar = () => {
    setActive(!active); // Toggle the sidebar open/close state
  };

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out bg-anti-flash-white dark:bg-smoky-black h-[calc(100vh-64px)] ${
          active ? 'w-[200px]' : 'w-0'
        } flex-shrink-0 fixed left-0 z-40`}
      >
        {active && <SidebarNav active={active} />}
      </div>

      {/* Sidebar Toggle Button - When collapsed, it moves to the content area */}
      <div
        className={`absolute top-16 z-50 transition-all duration-300 ease-in-out ${
          active ? 'left-[200px]' : 'left-4'
        }`}
      >
        <button
          className="bg-anti-flash-white dark:bg-smoky-black p-2 rounded-r-lg shadow-lg text-gray-500 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 text-3xl"
          onClick={toggleSidebar}
        >
          <BsWindowSidebar />
        </button>
      </div>
    </div>
  );
}
