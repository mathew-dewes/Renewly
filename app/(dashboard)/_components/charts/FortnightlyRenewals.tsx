"use client"

import { useEffect, useState } from "react";
import {  Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"




export default function FortnightlyRenewals({ data }: {
    data: { date: number, equipment: number, machinery: number, vehicles: number }[]
}) {
    const [mounted, setMounted] = useState(false);




    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(t);
    }, []);

    if (!mounted) return null;

    return (
        <div className="h-[200px] min-w-0 min-h-0 mt-3">

            <ResponsiveContainer width={"100%"} height={"100%"} aspect={undefined}>

              <BarChart


      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="localDate" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="equipment" fill="#8884d8" activeBar={<Rectangle fill="#8884d8" stroke="#8884d8" />} />
      <Bar dataKey="machinery" fill="#ffc658" activeBar={<Rectangle fill="#ffc658" stroke="#ffc658" />} />
      <Bar dataKey="vehicles" fill="#82ca9d" activeBar={<Rectangle fill="#82ca9d" stroke="#82ca9d" />} />
    </BarChart>
            </ResponsiveContainer>

        </div>
    )

}

      //   <Area type="monotone" dataKey="equipment" stackId="1" stroke="#8884d8" fill="#8884d8" />
      // <Area type="monotone" dataKey="machinery" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
      // <Area type="monotone" dataKey="vehicles" stackId="1" stroke="#ffc658" fill="#ffc658" />