"use client";


import { Cell, LabelList, Legend, Pie, PieChart, Tooltip } from "recharts";

const data = [
  {
    "name": "Equipment",
    "value": 400,
    "color": "#33ccff"
  },
  {
    "name": "Machinery",
    "value": 500,
    "color": "#ff9933"
  },
  {
    "name": "Vehciles",
    "value": 200,
    "color": "#00ff00"
  },

  
]

export default function AssetMetrics(){
    return (
        
                <div className="bg-gray-50 p-5 rounded-xl mt-10">
          <h2>Assets</h2>
          <div>
            <p>Total assets: 315</p>
          </div>
           <div
              style={{
                width: '100%',
                minHeight: '300px',
                alignItems: 'start',
           
              }}
            >
        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '70vh', aspectRatio: 1.4}} >
               <Legend layout="vertical" verticalAlign="top" align="left" height={36} fill="#000000" iconType="square"/>
            <Pie data={data} dataKey="value" nameKey="name" outerRadius="80%" innerRadius="50%" isAnimationActive={false} >
                   <LabelList
                  dataKey="name"
                  position="outside"
                  fill="#000"
                  fontSize={15}
                  offset={10}
                  fontWeight={600}
        
                
                />
              {data.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={_entry.color}  
                />
              ))}
            </Pie>
                  <Tooltip />
        
        
          </PieChart>
        
        
            </div>
         
                </div>
    )
}