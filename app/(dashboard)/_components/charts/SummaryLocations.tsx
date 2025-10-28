"use client"

import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export  function SummaryLocations(){

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
  {
    name: 'CHCH',
    equipment: 2780,
    machinery: 3908,
    vehciles: 2000,
  },
  {
    name: 'DUN',
    equipment: 1890,
    machinery: 4800,
    vehciles: 2181,
  },

];
    return (
        <div className="W-[250px] h-[150px] mt-2">
            <ResponsiveContainer width="100%" height="100%">
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
      <Bar dataKey="machinery" fill="#FFBB28" activeBar={<Rectangle stroke="purple" />} />
      <Bar dataKey="equipment" fill="#33ccff" activeBar={<Rectangle stroke="green" />} />

          {/* const data = [
        { name: "Compliant - 111 Assets", value: 33, color: "#00C49F" },
        { name: "Due soon - 311 Assets", value: 33, color: "#FFBB28" },
        { name: "Over due - 344 Assets", value: 33, color: "#ff1a1a" },

    ]; */}
    </BarChart>
            </ResponsiveContainer>
        </div>
    )
}