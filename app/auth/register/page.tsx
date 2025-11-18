import { getSession } from "@/server/auth/auth";
import RegisterForm from "./_components/RegisterForm";
import { redirect } from "next/navigation";


export default async function RegisterPage(){

            const session = await getSession();
            if (session) redirect('/');
    return(
        <div>
            <div className="text-center mt-20">
                <h2>Register</h2>
            </div>

            <RegisterForm/>
        </div>
    )
}