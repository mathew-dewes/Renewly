"use server";

import z from "zod";
import { loginUserSchema, registerUserSchema } from "../validation/schema";
import { auth } from "../config/auth";
import { APIError } from "better-auth/api";
import { headers } from "next/headers";



export async function loginUser(values: z.infer<typeof loginUserSchema>){

    const validate = loginUserSchema.safeParse(values);

    if (!validate.success) {
        return {
            status: "error", message: validate.error.message
        }
    }

    const { email, password } = values;

    try {
         await auth.api.signInEmail({
        body: {
            email, password, callbackURL: "/"
        }

        
    });
   
    

        return {
        status: "success", message: "User created successfully"
    }
    } catch (error) {
          if (error instanceof APIError) {
        console.log(error.message, error.status)
            return {
        status: "error", message: error.message
    }

    } else {
        console.log(error);
        
        return {
        status: "error", message: "There was an error"
    }
    }
           
        
        
    }


}

export async function registerUser(values: z.infer<typeof registerUserSchema>){
    
        const validate = registerUserSchema.safeParse(values);

    if (!validate.success) {
        return {
            status: "error", message: validate.error.message
        }
    }

    const { name, email, password } = values;


    try {
       await auth.api.signUpEmail({
        body: {
            email, password, name, callbackURL: "/",
        }
    });

    return {
        status: "success", message: "User created successfully"
    }
    } catch (error) {
         if (error instanceof APIError) {
        console.log(error.message, error.status)
            return {
        status: "error", message: error.message
    }

    } else {
        console.log(error);
        
        return {
        status: "error", message: "There was an error"
    }
    }
           
        
    }

}

export async function Logout() {

    const result = await auth.api.signOut({
        headers: await headers()
    });

    return result;

}

export async function getSession(){
        return await auth.api.getSession({headers: await headers()})
}

export async function getUserId(){
        const user = await auth.api.getSession({headers: await headers()});
    return user?.user.id
}