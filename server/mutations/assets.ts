"use server";

import z from "zod";
import { assetSchema } from "./schemas";
import prisma from "../db/prisma";
import { getUserId } from "../auth/auth";
import { Prisma } from "@prisma/client";


export async function createAsset(values: z.infer<typeof assetSchema>) {

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
                location: location,
                plantNumber: plant.toUpperCase(),
                serial: serialNumber.toUpperCase(),
                userId,
                renewals: {
                    create: {
                        renewalDate: new Date(renewalDate),
                        renewalType


                    }
                },
           






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


    await prisma.asset.delete({
        where: {
            id
        },
  
    });



}


export async function updateAsset(values: z.infer<typeof assetSchema>) {

    const userId = await getUserId();
    if (!userId) {

        return {
            status: "error", message: "There was an error"
        }
    }

    console.log(values);

    


    const { id, asset, assetType, plant, serialNumber, location, renewalType, renewalDate } = values;



    try {

        await prisma.asset.update({
            data: {
                name: asset,
                type: assetType,
                location: location,
                plantNumber: plant.toUpperCase(),
                serial: serialNumber.toUpperCase(),
                userId,
                renewals: {
                    create: {
                        renewalDate: new Date(renewalDate),
                        renewalType


                    }
                },
            







            },
            where: {
                id
            }

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