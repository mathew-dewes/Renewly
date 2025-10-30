"use client"

import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"




export default function RenewalsChart({data}:{
  data:{weekStart: Date, renewals: number}[]
}){
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
  formatter={(value) => value} // keep the renewals as-is
  labelFormatter={(label) => {
    const d = new Date(label);
    return d.toLocaleDateString("default", { month: "short", day: "numeric" });
  }}
/>

        <Area type="monotone" dataKey="renewals" stroke="#8884d8" fill="#8884d8" />

    </AreaChart>
            </ResponsiveContainer>

        </div>
    )

}