"use server";

import z from "zod";
import { assetSchema } from "./schemas";
import prisma from "../db/prisma";
import { getUserId } from "../auth/auth";



export async function createAsset(values: z.infer<typeof assetSchema>, imageUrl: string | null, upLoadId: string | null ) {

    const userId = await getUserId();
    if (!userId){

         return {
            status: "error", message: "There was an error"
        }
    }


    const { asset, assetType, plant, serialNumber, location, renewalType, renewalDate } = values;

    try {
        await prisma.asset.create({
            data: {
                name: asset,
                type: assetType,
                location,
                plantNumber: plant.toUpperCase(),
                serial: serialNumber.toUpperCase(),
                userId,
                imageUrl,
                upLoadId,
                renewals:{
                    create:{
                        renewalDate: new Date(renewalDate),
                        renewalType
                    

                    }
                },
                
                upload:{
                    connect:{id:upLoadId!}
                }
                
                



            },
            
        });

        

        return {
            status: "success", message: "Post created successfully"
        }
    } catch (error) {
        console.log(error);

        return {
            status: "error", message: "There was an error"
        }
    }
}


export async function deleteAsset(id: string){
    const baseUrl = process.env.BASE_URL || "http://localhost:3000";
   await fetch(`${baseUrl}/api/uploads/${id}`, { method: "DELETE" });


   
    
   await prisma.asset.delete({
        where:{
            id
        },
        select:{
            upLoadId: true
        }
    });


    
}