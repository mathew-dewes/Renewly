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

export async function hasImage(id:string){
               return await prisma.asset.findUnique({
        where:{
            id,
            NOT:{
                upLoadId:null
            }
        }
    });
}