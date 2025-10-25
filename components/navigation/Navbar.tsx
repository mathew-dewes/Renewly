import Link from "next/link"
import LogoutButton from "../ui/LogoutButton"
import { getSession } from "@/server/auth/auth"
import NavLinks from "./NavLinks";


export default async function Navbar() {

    const session = await getSession();
    
    
    return (
        <nav className="flex h-20 justify-between px-10 items-center bg-blue-accent-500 text-light-500">
            <Link href={'/'}><h2>Renewly</h2></Link>
            {session && <ul className="md:flex gap-15 hidden">
                <NavLinks/>
               <LogoutButton/>

            </ul>}

            
        </nav>
    )
}