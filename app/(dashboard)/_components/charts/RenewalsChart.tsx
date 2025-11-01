"use client"

import { AssetType } from "@prisma/client";
import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"




export default function RenewalsChart({ data, type }: {
  data: { weekStart: Date, renewals: number }[], type: AssetType
}) {
  const [mounted, setMounted] = useState(false);

  let typeColor;

  switch(type){
    case "EQUIPMENT":
      typeColor = "#8884d8"
      break;
    case "MACHINERY":
      typeColor = "#ffc658"
      break;
    case "VEHICLE":
      typeColor = "#82ca9d"
      break;
  }



  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return (
    <div className="h-[200px] mt-3 w-full">

      <ResponsiveContainer width={"100%"} height={"100%"} aspect={undefined}>
        <AreaChart
          data={data}
          syncId="renewals"

        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="weekStart"
            type="number"
            domain={['dataMin', 'dataMax']}
            tickFormatter={(timestamp) => {
              const d = new Date(timestamp);
              return d.toLocaleDateString("default", { month: "short", day: "numeric" });
            }}
          />
          <YAxis width="auto" />

          <Tooltip
            formatter={(value) => value} 
            labelFormatter={(label) => {
              const d = new Date(label);
              return d.toLocaleDateString("default", { month: "short", day: "numeric" });
            }}
          />

          <Area type="monotone" dataKey="renewals" stroke={typeColor} fill={typeColor} />


        </AreaChart>
      </ResponsiveContainer>

    </div>
  )

}