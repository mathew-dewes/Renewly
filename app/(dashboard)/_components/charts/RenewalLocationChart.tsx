"use client"


import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


type LocationData = {
  weekStart: Date;
  [location: string]: number | Date; // any dynamic location key
};


export default function RenewalLocationChart({ data }:{ data: LocationData[] }){

  const [mounted, setMounted] = useState(false);

    useEffect(() => {
      const t = setTimeout(() => setMounted(true), 0);
      return () => clearTimeout(t);
    }, []);
  
    if (!mounted) return null;

  

    return (
      <div  className="h-[200px] min-w-0 min-h-0 mt-3">
                    <h2>Renewal Location</h2>
            <p>By asset type</p>
   <ResponsiveContainer width={"100%"} height={"100%"} aspect={undefined}>

 <BarChart

      data={data}
        syncId="renewals"
         margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
 
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="weekStart"
            tickFormatter={(timestamp) => {
              const d = new Date(timestamp);
              return d.toLocaleDateString("default", { month: "short", day: "numeric" });
            }} />
      <YAxis width="auto" />
      <Tooltip  formatter={(value) => value} 
            labelFormatter={(label) => {
              const d = new Date(label);
              return d.toLocaleDateString("default", { month: "short", day: "numeric" });
            }}/>
      <Legend />


      <Bar dataKey="AUCKLAND"  fill="#00ff00"  />
      <Bar dataKey="HAMILTON"  fill="#ff6600"  />
      <Bar dataKey="WELLINGTON" fill="#ff99ff"  />
      <Bar dataKey="CHRISTCHURCH" fill="#00ffff"  />
      <Bar dataKey="DUNEDIN" fill="#ff0000"  />
    </BarChart>
      </ResponsiveContainer>
      </div>
   
      
    )
}