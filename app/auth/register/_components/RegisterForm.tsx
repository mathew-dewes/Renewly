"use client";

import ErrorMessage from "@/components/ui/ErrorMessage";
import { registerUser } from "@/server/auth/auth";
import { registerUserSchema } from "@/server/validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";


type FormFields = z.infer<typeof registerUserSchema>

export default function RegisterForm() {
      const [serverError, setServerError] = useState("");
        const router = useRouter();

            const { register, handleSubmit, formState: { errors, isSubmitting } } =
        useForm<FormFields>({ resolver: zodResolver(registerUserSchema) });

    const onSubmit = async (values: FormFields) => {
        
        const result = await registerUser(values);


        if (result.status === "error") {
            setServerError(result.message)
            console.log(result.message);

        } else {
            router.push("/");
            router.refresh()
        }


    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}  className="max-w-sm mx-auto mt-10">
            <div className="mb-5">
    
                <label className="block mb-2 text-sm font-medium">Your name</label>
                <input {...register("name")}  type="text" id="email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5"
                    placeholder="First and last name" />
                              {errors.name &&
                    <ErrorMessage message={errors.name?.message} />}
                
            </div>
            <div className="mb-5">
    
                <label className="block mb-2 text-sm font-medium">Your email</label>
                <input {...register("email")}  type="text" id="email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5"
                    placeholder="name@email.com" />
                            {errors.email &&
                    <ErrorMessage message={errors.email?.message} />}
                
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium">Your password</label>
                <input {...register("password")} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
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
                <button disabled={isSubmitting} type="submit" className="text-white bg-blue-accent-500 cursor-pointer hover:bg-blue-900 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center">
                    {isSubmitting ? "Processing" : "Register"}</button>

                <Link href={'/auth/login'} className="text-white bg-blue-accent-500 hover:bg-blue-900 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center">Login</Link>
 </div>



   
    
   




        </form>
    )
}