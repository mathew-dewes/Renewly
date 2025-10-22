import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex h-20 justify-between px-10 items-center bg-blue-accent-500 text-light-500">
            <Link href={'/'}><h1>Renewly</h1></Link>

            <ul className="md:flex gap-15 hidden">
                <div className="flex gap-5">
                    <Link href={'/assets'}><li>Assets</li></Link>
                    <Link href={'/renewals'}><li>Renewals</li></Link>
        
                </div>

                <li>Logout</li>
            </ul>
        </nav>
    )
}