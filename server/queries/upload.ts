"use server";

import prisma from "../db/prisma";

export async function getImageFileKey(id: string){
    const upload = await prisma.upload.findFirst({
        where:{
            asset:{
                id
            }
        },
        select:{
            fileKey: true
        }
    });

    return upload?.fileKey;
}