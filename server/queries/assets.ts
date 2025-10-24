"use server";

import prisma from "../db/prisma";

export async function getAssets() {

    return await prisma.asset.findMany({
        select: {
            id: true,
            plantNumber: true,
            name: true,
            serial: true,
            type:true,
            location: true,
            imageUrl: true


        }
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
