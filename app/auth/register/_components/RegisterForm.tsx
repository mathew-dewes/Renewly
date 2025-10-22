"use client";

import Link from "next/link";



export default function RegisterForm() {



    return (
        <form  className="max-w-sm mx-auto mt-20">
            <div className="mb-5">
    
                <label className="block mb-2 text-sm font-medium">Your name</label>
                <input  type="text" id="email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="John-smith" />
                
            </div>
            <div className="mb-5">
    
                <label className="block mb-2 text-sm font-medium">Your email</label>
                <input  type="text" id="email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="name@email.com" />
                
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium">Your password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="8 or more characters required" />
               
            </div>
            <label className="block mb-4 text-sm font-medium">Dont have an account? Click on sign up to create an account
            </label>
            <label className="block mb-4 text-sm font-mediu">Forgot password? Click HERE to reset
            </label>
            <p className="my-5 text-red-500 text-sm font-semibold">Error message goes here</p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <button type="submit" className="text-white bg-blue-accent-500 hover:bg-blue-900 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center">Register</button>

                <Link href={'/auth/login'} className="text-white bg-blue-accent-500 hover:bg-blue-900 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center">Login</Link>


            </div>
            {/* <div className="mt-10">
                <h2 className="font-semibold text-center">Social providers:</h2>
                <SocialProviders tableNumber={tableNumber}/>
            </div> */}


   
    
   




        </form>
    )
}