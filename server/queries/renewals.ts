"use server";

import prisma from "../db/prisma";


export async function getRenewals(){
    return await prisma.renewal.findMany({
        select:{
            id: true,
            asset:{
                select:{
                    plantNumber:true,
                    name:true,
                    location:true,
                    imageUrl:true
                }
            },
            renewalType: true,
            renewalDate:true

        }
    });
}