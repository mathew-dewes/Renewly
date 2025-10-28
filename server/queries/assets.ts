"use server";

import { AssetType } from "@prisma/client";
import prisma from "../db/prisma";

export async function getAssets(filter: AssetType | null, page: number, pageSize:number) {

    return await prisma.asset.findMany({
        select: {
            id: true,
            plantNumber: true,
            name: true,
            serial: true,
            type: true,
            location: true,


        },
        take:pageSize,
        orderBy:{
            createdAt:"desc"
        },
        skip: (page - 1) * pageSize,
        ...(filter && {
            where: {
                type: {
                    equals: filter
                }
            },
           
        })
        

    },
    
    );
}

export async function getAsset(id: string) {
    return await prisma.asset.findUnique({
        select: {
            id: true,
            plantNumber: true,
            name: true,
            serial: true,
            type: true,
            location: true,
     


        },
        where: {
            id
        }
    });
}
