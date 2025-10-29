"use client";

import { useEffect, useState } from "react";
import { Cell, LabelList, Pie, PieChart, ResponsiveContainer } from "recharts";

export default function RenewalPie() {
      const [mounted, setMounted] = useState(false);


  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;
  
    const data = [
        { name: "Compliant - 111 Assets", value: 33, color: "#00C49F" },
        { name: "Due soon - 311 Assets", value: 33, color: "#FFBB28" },
        { name: "Over due - 344 Assets", value: 33, color: "#ff1a1a" },

    ];

    
  if (!mounted) return null; 




    return (
        <div className="w-[250px] h-[200px] min-w-0 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
            
             

                    <Pie

                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius="60%"
                        outerRadius="80%"
                        dataKey="value"


                    >
                        <LabelList formatter={(label) =>
                            `${typeof label === "number" ? label : Number(label)}%`
                        } position="outside" offset={10} dataKey={"value"} fill="black" />
                        {data.map((entry, index) => (
                            <Cell key={index} fill={entry.color} />
                        ))}

                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
