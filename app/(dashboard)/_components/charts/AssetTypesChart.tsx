"use client"


import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function AssetTypesChart(){

        const data = [
  {
    name: 'AKL',
    equipment: 4000,
    machinery: 2400,
    vehciles: 2400,
  },
  {
    name: 'HAM',
    equipment: 3000,
    machinery: 1398,
    vehciles: 2210,
  },
  {
    name: 'WELL',
    equipment: 2000,
    machinery: 9800,
    vehciles: 2290,
  },


];
    return (
        <div className="h-[150px] mt-2">
            <ResponsiveContainer width={"100%"} height={"100%"}>
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
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="vehciles" fill="#00C49F" activeBar={<Rectangle stroke="blue" />} />

    </BarChart>
            </ResponsiveContainer>
        </div>
    )
}