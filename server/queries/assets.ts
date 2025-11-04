"use server";

import { AssetType } from "@prisma/client";
import prisma from "../db/prisma";

export async function getAssets(filter: AssetType | null, page: number, pageSize:number, query: string | null) {


  return await prisma.asset.findMany({
    select: {
      id: true,
      plantNumber: true,
      name: true,
      serial: true,
      type: true,
      location: true,
    },
    take: pageSize,
    skip: (page - 1) * pageSize,
    orderBy: {
      createdAt: "desc",
    },
    where: {
      ...(filter && { type: { equals: filter } }),
      ...(query && {
        OR: [
          { name: { contains: query } },
          { plantNumber: { contains: query } },
          { serial: { contains: query } },
     
        ],
      }),
    },
  });
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
            renewals:{
                select:{
                    renewalDate:true,
                    renewalType:true
                }
            }
     


        },
        where: {
            id
        }
    });
}

export async function getDefaultAssetValues(id: string){
    return await prisma.asset.findUnique({
            where:{
                id
            },
            select:{
                id: true,
                name:true,
                plantNumber:true,
                serial: true,
                location:true,
                type:true,
        
                renewals:{
                    select:{
                        renewalType: true,
                        renewalDate: true
                    }
                }

            }
        });

}
