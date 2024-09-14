import Link from "next/link"
import { FaGithub } from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className=" bg-gradient-to-b from-green-300 to-white dark:bg-gradient-to-b dark:from-green-700 dark:to-black p-4 sticky top-0">
            <div className="md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-green-700 dark:text-green-300 hover:opacity-90 no-underline">hyperalgebra.io</Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-5xl lg:text-4xl">
                    <Link className="text-white/90 hover:text-white" href="https://github.com/ashvinbondada">
                        <FaGithub className="text-green-700 dark:text-green-300 hover:opacity-90"/>
                    </Link>
                </div>
            </div>
        </nav>
    )
}