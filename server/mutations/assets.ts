"use server";

import z from "zod";
import { assetSchema } from "./schemas";
import prisma from "../db/prisma";
import { getUserId } from "../auth/auth";
import { hasImage } from "../queries/upload";
import { Prisma } from "@prisma/client";


export async function createAsset(values: z.infer<typeof assetSchema>, imageUrl: string | null, upLoadId: string | null) {

    const userId = await getUserId();
    if (!userId) {

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
                location: location.toUpperCase(),
                plantNumber: plant.toUpperCase(),
                serial: serialNumber.toUpperCase(),
                userId,
                imageUrl,
                upLoadId,
                renewals: {
                    create: {
                        renewalDate: new Date(renewalDate),
                        renewalType


                    }
                },
                ...(upLoadId && {
                    upload: {
                        connect: { id: upLoadId! }
                    }

                })






            },

        });



        return {
            status: "success", message: "Post created successfully"
        }
    } catch (error) {
        console.log(error);
          if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
              const target = (error.meta?.target as string[])?.[0] ?? "unknown field";
                const friendlyField = target === "plantNumber" ? "Plant number" : target;
      console.log(error.meta);
      
    
         return {
            status: "error", message: `${friendlyField} must be unique. Another record already exists with that value.`,

        }
    }
  }

  throw error;

     
    }
}


export async function deleteAsset(id: string) {

    const image = await hasImage(id);

    if (image) {
        const baseUrl = process.env.BASE_URL || "http://localhost:3000";
        await fetch(`${baseUrl}/api/uploads/${id}`, { method: "DELETE" });
    }

    await prisma.asset.delete({
        where: {
            id
        },
        select: {
            upLoadId: true
        }
    });



}