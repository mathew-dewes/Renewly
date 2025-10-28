"use client";

import { Cell, LabelList, Pie, PieChart, ResponsiveContainer } from "recharts";

export default function RenewalPie() {
    const data = [
        { name: "Compliant - 111 Assets", value: 33, color: "#00C49F" },
        { name: "Due soon - 311 Assets", value: 33, color: "#FFBB28" },
        { name: "Over due - 344 Assets", value: 33, color: "#ff1a1a" },

    ];





    return (
        <div className="w-[250px] h-[200px]">
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
