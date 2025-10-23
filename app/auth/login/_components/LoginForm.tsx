"use client";

import ErrorMessage from "@/components/ui/ErrorMessage";
import { loginUser } from "@/server/auth/auth";
import { loginUserSchema } from "@/server/validation/schema";
// import { loginUserSchema } from "@/server/validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";


type FormFields = z.infer<typeof loginUserSchema>

export default function LoginForm() {
  const [serverError, setServerError] = useState("");
  const [isError, setIsError] = useState(false)
    const router = useRouter();


    const { register, handleSubmit, formState: { errors, isSubmitting } } =
        useForm<FormFields>({ resolver: zodResolver(loginUserSchema) });

    const onSubmit = async (values: FormFields) => {
        const result = await loginUser(values)
        



        if (result.status === "error") {
            setIsError(true);
            setServerError(result.message)
            console.log(result.message);
        } else {
            router.push("/");
            router.refresh()
        }

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}  className="max-w-sm mx-auto mt-20">
            <div className="mb-5">
    
                <label className="block mb-2 text-sm font-medium">Your email {isError && <span className={`text-red-500`}>*</span>}</label>
                <input {...register("email")}  type="text" id="email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="name@email.com" />
                      {errors.email &&
                    <ErrorMessage message={errors.email?.message} />}
                
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium">Your password {isError && <span className={`text-red-500`}>*</span>}</label>
                <input {...register("password")} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="8 or more characters required" />
                             {errors.password &&
                    <ErrorMessage message={errors.password?.message} />}
               
            </div>
            <label className="block mb-4 text-sm font-medium">Dont have an account? Click on sign up to create an account
            </label>
            <label className="block mb-4 text-sm font-mediu">Forgot password? Click HERE to reset
            </label>
            <ErrorMessage message={serverError}/>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <button type="submit" className="text-white bg-blue-accent-500 hover:bg-blue-900 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center">
                    {isSubmitting ? "Logging in" : "Login"}</button>

                <Link href={'/auth/register'} className="text-white bg-blue-accent-500 hover:bg-blue-900 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center">Sign up</Link>


            </div>
   

   
    
   




        </form>
    )
}