"use client";

import AssetTypePie from "@/app/(dashboard)/_components/PieCharts/AssetTypePie";
import AreaChartPlot from "@/app/(dashboard)/_components/plots/AreaChartPlot";
import BarChartPlot from "@/app/(dashboard)/_components/plots/BarChartPlot";
import LineChartPlot from "@/app/(dashboard)/_components/plots/LineChartPlot";
import PieChartPlot from "@/app/(dashboard)/_components/plots/PieChartPlot";
import RadarChartPlot from "@/app/(dashboard)/_components/plots/RadarChartPlot";


export default function Charts(){
 return    <>
      <section className="flex flex-col md:flex-row my-4 px-4 gap-3">
  
          <div className="w-1/2 h-[250px] p-4 justify-center  bg-gray-50  shadow rounded h-300px">
            <div className="">
              <p className="text-gray-900 font-bold">Total Assets</p>
              <p className="py-4 font-bold">32</p>
              <p className="text-green-300">+34.5%</p>
        
            </div>
          </div>
          <div className="w-full h-[250px] p-4 justify-center  bg-gray-50  shadow rounded">
            <AssetTypePie/>
          </div>
              <div className="w-full h-[250px] xl:w-2/4  bg-gray-50 rounded p-5">
  
          <BarChartPlot/></div>
       
   
     
       
      </section>

 <section className="flex flex-col md:flex-row my-4 px-4 gap-3">
     <div className="flex-1 p-4 justify-center  bg-gray-50  shadow rounded h-300px">
            <div className="">
              <p className="text-gray-900 font-bold">Upcoming Renewals</p>
              <p className="py-4 font-bold">$30,000 </p>
              <p className="text-green-300">+34.5%</p>
            </div>
          </div>
               <div className="flex-1 p-4 justify-center  bg-gray-50  shadow rounded h-300px">
            <div className="">
              <p className="text-gray-900 font-bold">Overdue Reminders</p>
              <p className="py-4 font-bold ">$30,000 </p>
              <p className="text-green-300">+34.5%</p>
            </div>
          </div>

        <div className="w-full h-[300px] bg-gray-50 rounded p-5">
          <AreaChartPlot/></div>

      </section>


      <section className="flex flex-col lg:flex-row my-4 px-4 gap-3">
        <div className="w-full h-[250px] bg-gray-50 rounded"><PieChartPlot/></div>
        <div className="w-full h-[250px] bg-gray-50 rounded"><LineChartPlot/></div>
        <div className="w-full h-[250px] bg-gray-50 rounded"><RadarChartPlot/></div>
      </section>
    </>
}