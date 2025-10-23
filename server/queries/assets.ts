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
            location: true


        }
    });
}
