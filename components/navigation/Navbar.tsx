"use client"

import Link from "next/link"
import LogoutButton from "../ui/LogoutButton"

import { auth } from "@/server/config/auth";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import MenuCloseButton from "./MenuCloseButton";
import { HamburgerButton } from "./HamburgerButton";
import { Logout } from "@/server/auth/auth";

type Session = typeof auth.$Infer.Session;


const navLinks = [
    {name:"Dasboard", href: "/"},
    {name:"Assets", href:"/assets"},
    {name:"Renewals", href: "/renewals"}
]

export default  function Navbar({ session }:
    { session: Session | null }
) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const path = usePathname();
    const closeMenu = () => setIsMenuOpen(false);
       const router = useRouter();
    
        async function handleSignOut(){
            await Logout();
            router.push("/auth")
            closeMenu()
        }
    
    
    return (
        <nav className="flex h-20 justify-between px-10 items-center bg-blue-accent-500 text-light-500">
            <Link href={'/'}><h2>Renewly</h2></Link>
            {session && <ul className="md:flex gap-30 hidden">
       <div className="flex gap-8 font-light">
        <Link className={`${path === '/' ? "font-bold scale-105" : ""}`} 
            href={'/'}>Dashboard</Link>
        <Link className={`${path.startsWith('/assets') ? "font-bold scale-105" : ""}`} 
            href={'/assets'}>Assets</Link>
        <Link className={`${path.startsWith('/renewals') ? "font-bold scale-105" : ""}`} 
            href={'/renewals'}>Renewals</Link>
    




              <div className={`fixed inset-0 bg-background/95 background-blur-md z-40 flex flex-col items-center pt-30 transition-all duration-300 md:hidden
            ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className='flex flex-col space-y-8 text-xl'>
            {navLinks.map((item, key)=>{
                return (
                    <a className='text-foreground/80 hover:text-primary transition-colors duration-300' 
                    key={key} 
                    href={item.href}
                    onClick={()=> setIsMenuOpen(false)}
                    >{item.name}</a>
                )
            })}
        </div>
            </div>
        
                </div>
               <LogoutButton/>

            </ul>}

            {session && 
                  <div className="md:hidden block">

     {isMenuOpen ? <MenuCloseButton onClick={closeMenu} /> : <HamburgerButton onClick={() => setIsMenuOpen(prev => !prev)} />}

          <div className={`p-5 z-10 absolute xl:hidden top-20 left-0 w-full bg-light-500 text-black flex flex-col item-center gap-6  text-lg shadow-lg
                transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
               style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>
       
                <Link  onClick={closeMenu} 
              className={`list-none w-full text-center p-4
                    transition-all cursor-pointer ${path === '/' ? "font-bold" : ""}`} href={'/'}>Dashboard</Link>
                <Link  onClick={closeMenu} 
              className={`list-none w-full text-center p-4
                    transition-all cursor-pointer ${path.startsWith('/assets') ? "font-bold" : ""}`} href={'/assets'}>Assets</Link>
                <Link  onClick={closeMenu} 
              className={`list-none w-full text-center p-4
                    transition-all cursor-pointer ${path.startsWith('/renewals') ? "font-bold" : ""}`} href={'/renewals'}>Renewals</Link>
            
                               <button onClick={handleSignOut}
              className={`list-none  w-full text-center bg-accent-500 rounded-xl p-4 hover:bg-accent-500 
            
                    transition-all cursor-pointer`}>Logout</button>

          </div>
            </div>
            }
      

            
        </nav>
    )
}