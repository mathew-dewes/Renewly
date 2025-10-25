"use server";

import { AssetType } from "@prisma/client";
import prisma from "../db/prisma";

export async function getAssets(filter: AssetType | null) {

    return await prisma.asset.findMany({
        select: {
            id: true,
            plantNumber: true,
            name: true,
            serial: true,
            type:true,
            location: true,
            imageUrl: true


        },
                ...(filter && {where:{
                    type: {
                        equals: filter
                    }
                }})

    });
}

export async function getAsset(id:string){
    return await prisma.asset.findUnique({
        select: {
            id: true,
            plantNumber: true,
            name: true,
            serial: true,
            type:true,
            location: true,
            imageUrl: true


        },
        where:{
            id
        }
    });
}
