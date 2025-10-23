"use server";

import z from "zod";
import { assetSchema } from "./schemas";
import prisma from "../db/prisma";

export async function createAsset(values: z.infer<typeof assetSchema>){

    const userId = "cmh2rf08k0001uh9g47v7yjjo"
    const businessId = "cmh2rehdw0000uh9ge58elzoc"

    const {asset, assetType, plant, serialNumber, location} = values;

    try {
        await prisma.asset.create({
            data:{
                name: asset, 
                type: assetType, 
                location, 
                plantNumber: plant, 
                serial:serialNumber,
                        userId, // ✅ required foreign key
        businessId, // ✅ required foreign key


            }
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