"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const today = new Date();
const data: { date: number; renewals: number }[] = [];

for (let i = 0; i < 28; i++) {
  const date = new Date(today);
  date.setDate(today.getDate() + i);
  data.push({
    date: date.getTime(),
    renewals: Math.floor(Math.random() * 6), // random 0–5 renewals
  });
}





export default function RenewalLocationChart(){

    return (
        <div className="h-[150px] mt-3">
            <ResponsiveContainer width={"100%"} height={"100%"}>
                 <AreaChart
                   data={data}
   
    >
      <CartesianGrid strokeDasharray="3 3" />
<XAxis
  dataKey="date"
  type="number"
  domain={['dataMin', 'dataMax']}
  tickFormatter={(timestamp) => {
    const d = new Date(timestamp);
    const day = String(d.getDate()).padStart(2, '0');    // day with leading 0
    const month = String(d.getMonth() + 1).padStart(2, '0'); // month with leading 0
    return `${day}/${month}`;
  }}
/>
      <YAxis width="auto" />

      <Tooltip />

      <Area type="monotone" dataKey="renewals" stroke="#FFBB28" fill="#FFBB28" />
    </AreaChart>
            </ResponsiveContainer>

        </div>
    )

}