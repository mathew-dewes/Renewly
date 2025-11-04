"use server"

import z from "zod";
import { renewalSchema } from "./schemas";
import prisma from "../db/prisma";

export async function updateRenewal(values: z.infer<typeof renewalSchema>){
    
    const {id, renewalDate} = values;

 try {
    await prisma.renewal.update({
        data:{
            renewalDate: new Date(renewalDate).toISOString()
        },
        where:{
            id
        }
    });
        return {
            status: "success", message: "Post created successfully"
        }
 } catch (error) {
    console.log(error);
    
         return {
                    status: "error", message: 'There was an error updating the renewal',

                }
    
 }
  

}