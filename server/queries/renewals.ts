"use server";

import { AssetType } from "@prisma/client";
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
              
                }
            },
            renewalType: true,
            renewalDate:true

        },
        take:10,
        orderBy:{
            renewalDate:"asc"
        }
    });
}


export async function getLatestRenewals(){
    return await prisma.renewal.findMany({
        select:{
            id:true,
            asset:{
                select:{
                    name:true,
                    location:true,
                    plantNumber:true,
                }
            },
            renewalDate:true
        },
        take:5,
        orderBy:{
            renewalDate:"asc"
        }
    })
}


export async function getNext14DaysData() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const fourteenDaysLater = new Date(today);
  fourteenDaysLater.setDate(today.getDate() + 13);

  const renewals = await prisma.renewal.findMany({
    where: {
      renewalDate: {
        gte: today,
        lte: fourteenDaysLater,
      },
    },
    include: {
      asset: true,
    },
  });

  const data = Array.from({ length: 14 }).map((_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const dayRenewals = renewals.filter((r) => {
      const d = new Date(r.renewalDate);
      return d >= startOfDay && d <= endOfDay;
    });

    const equipment = dayRenewals.filter((r) => r.asset.type === "EQUIPMENT").length;
    const machinery = dayRenewals.filter((r) => r.asset.type === "MACHINERY").length;
    const vehicles = dayRenewals.filter((r) => r.asset.type === "VEHICLE").length;

    return {
      date: date.getTime(),
      localDate: date.toLocaleDateString("en-NZ", { day: "2-digit", month: "short" }),
      equipment,
      machinery,
      vehicles,
    };
  });

  return data;
}


export async function getQuartlyForcast(type: AssetType){
    const today = new Date();

  const threeMonths = new Date();
  threeMonths.setMonth(today.getMonth() + 3);

  const renewalData: {
  weekStart: Date;
  renewals: number;

}[] = [];

for (let i = 0; i < 28; i++) {
  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() + i * 7);

  renewalData.push({
    weekStart,
    renewals: 0
  });
}


  const data = await prisma.renewal.findMany({
    where:{
      renewalDate:{
        lte: threeMonths
      },
      asset:{
        type
      }
    },
    select:{
      renewalType:true,
      renewalDate:true,
      asset:{
        select:{
          name:true
        }
      }
    }
  });

data.forEach((r) => {
  const weekIndex = Math.floor(
    (r.renewalDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24 * 7)
  );

  if (weekIndex >= 0 && weekIndex < 28) {
    renewalData[weekIndex].renewals += 1;
  }
});

return renewalData
}


