"use client"

import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"



type RenewalData = {
  date: number;
  equipment: number;
  machinery: number;
  vehicles: number;
};



export default function RenewalsChart({data, filter}:
  {data:RenewalData[], filter: string}
){
         const [mounted, setMounted] = useState(false);
  


    
      useEffect(() => {
        const t = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(t);
      }, []);
    
      if (!mounted) return null;

    return (
        <div className="h-[200px] min-w-0 min-h-0 mt-3">
 
            <ResponsiveContainer width={"100%"} height={"100%"} aspect={undefined}>
                 <AreaChart
                   data={data}
   
    >
      <CartesianGrid strokeDasharray="3 3" />
<XAxis
  dataKey="date"
  type="category"
  tickFormatter={(timestamp) => {
    const d = new Date(timestamp);
    if (filter === "monthly") {
      return `${d.getDate()}/${d.getMonth() + 1}`;
    } else if (filter === "quarterly") {
      return `W${Math.ceil((d.getDate() + d.getMonth() * 30) / 7)}`;
    } else {
      return d.toLocaleString("default", { month: "short" });
    }
  }}
/>
      <YAxis width="auto" />

      <Tooltip />

        <Area type="monotone" dataKey="equipment" stackId="1" stroke="#8884d8" fill="#8884d8" />
      <Area type="monotone" dataKey="machinery" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
      <Area type="monotone" dataKey="vehicles" stackId="1" stroke="#ffc658" fill="#ffc658" />
    </AreaChart>
            </ResponsiveContainer>

        </div>
    )

}