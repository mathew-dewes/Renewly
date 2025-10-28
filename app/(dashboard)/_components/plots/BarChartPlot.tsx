import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function BarChartPlot() {

    const data = [
        {
            name: "AKL",
            equipment: 210,
            machinery: 122,
            vehicles: 350
        },
        {
            name: "HAM",
            equipment: 25,
            machinery: 31,
            vehicles: 110
        },
        {
            name: "WELL",
            equipment: 210,
            machinery: 52,
            vehicles: 350
        },
        {
            name: "CHCH",
            equipment: 210,
            machinery: 52,
            vehicles: 350
        },
        {
            name: "DUN",
            equipment: 210,
            machinery: 52,
            vehicles: 350
        },

    ];
    return (
        <>

            <ResponsiveContainer width="100%" height="90%" >
                <p className="text-gray-900 font-bold mb-5">Assets By Location</p>


                <BarChart width={730} height={250} data={data} >

                    <XAxis dataKey="name" interval={0} >
                    </XAxis>
                    <YAxis width={"auto"} >

                    </YAxis>
                    <Tooltip />
             
                 
        

                    <Bar dataKey="equipment" fill="#4f8ef7" />
                    <Bar dataKey="machinery" fill="#ff9f1c" />
                    <Bar dataKey="vehicles" fill="#34c759" />
               
     <Legend verticalAlign="bottom" layout="horizontal" align="left"    />
             
  
                </BarChart>
                
            </ResponsiveContainer>
        </>
    )
}