import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex justify-between sticky top-0 z-50 bg-anti-flash-white dark:bg-smoky-black p-4 border-b-2 border-b-smoky-black dark:border-b-anti-flash-white
    backdrop-blur-xl shadow-md">
      {/* <div className="md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row items-center"> */}
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link href="/" className="dark:text-dun text-gray hover:opacity-90 no-underline">hyperalgebra.io</Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-5xl lg:text-4xl">
          <Link className="" href="https://github.com/ashvinbondada">
            <FaGithub className="dark:text-dun text-gray hover:opacity-90"/>
          </Link>
        </div>
      {/* </div> */}
    </nav>
  );
}
