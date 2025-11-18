import { getSession } from "@/server/auth/auth";
import LoginForm from "./_components/LoginForm";
import { redirect } from "next/navigation";

export default async function loginPage(){

        const session = await getSession();
        if (session) redirect('/');
    return(
        <div>
            <div className="text-center mt-20">
                <h2>Login</h2>
            </div>
         <LoginForm/>
        </div>
    )
}