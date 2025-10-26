"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavLinks(){

    const path = usePathname();

    
    return (
        <div className="flex gap-8 font-light">
                   <Link href={'/'}><li className={`${path === "/" ? "font-bold scale-105" : ""}`}>Dashboard</li></Link>
                    <Link href={'/assets'}><li className={`${path.startsWith("/assets") ? "font-bold scale-105" : ""}`}>Assets</li></Link>
                    <Link href={'/renewals'}><li className={`${path === "/renewals" ? "font-bold scale-105" : ""}`}>Renewals</li></Link>
        
                </div>
    )
}