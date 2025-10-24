"use server";

import z from "zod";
import { assetSchema } from "./schemas";
import prisma from "../db/prisma";
import { getUserId } from "../auth/auth";

export async function createAsset(values: z.infer<typeof assetSchema>, imageUrl: string | null) {

    const userId = await getUserId();
    if (!userId){

         return {
            status: "error", message: "There was an error"
        }
    }


    const { asset, assetType, plant, serialNumber, location } = values;

    try {
        await prisma.asset.create({
            data: {
                name: asset,
                type: assetType,
                location,
                plantNumber: plant.toUpperCase(),
                serial: serialNumber.toUpperCase(),
                userId,
                imageUrl



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