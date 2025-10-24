"use server";

import prisma from "../db/prisma";

export async function getUpload(id: string){
    const asset = await prisma.asset.findUnique(
        {where:{
            id
        },
        select:{
            upload:{
                select:{
                    fileKey: true
                }
            }
        }
    },
    
    );

    return asset?.upload

   
}