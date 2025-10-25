"use client"



import { Logout } from "@/server/auth/auth";
import { useRouter } from "next/navigation";

export default function LogoutButton(){
    const router = useRouter();

    async function handleSignOut(){
        await Logout();
        router.push("/")
    }
    return <button className="cursor-pointer hidden md:block" onClick={handleSignOut}>Logout</button>
}