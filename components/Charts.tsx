"use client";

import AreaChartPlot from "@/app/(dashboard)/_components/plots/AreaChartPlot";
import BarChartPlot from "@/app/(dashboard)/_components/plots/BarChartPlot";
import LineChartPlot from "@/app/(dashboard)/_components/plots/LineChartPlot";
import PieChartPlot from "@/app/(dashboard)/_components/plots/PieChartPlot";
import RadarChartPlot from "@/app/(dashboard)/_components/plots/RadarChartPlot";


export default function Charts(){
 return    <>
      <section>
        <div className="flex flex-wrap m-4 gap-2">
          <div className="flex-1 p-4 justify-center  bg-gray-50  shadow rounded h-300px">
            <div className="">
              <p className="text-gray-900 font-bold">Total Assets</p>
              <p className="py-4 font-bold">$30,000 </p>
              <p className="text-green-300">+34.5%</p>
            </div>
          </div>
          <div className="flex-1 p-4 justify-center  bg-gray-50  shadow rounded h-300px">
            <div className="">
              <p className="text-gray-900 font-bold">Total sales</p>
              <p className="py-4 font-bold">$30,000 </p>
              <p className="text-green-300">+34.5%</p>
            </div>
          </div>
          <div className="flex-1 p-4 justify-center  bg-gray-50  shadow rounded h-300px">
            <div className="">
              <p className="text-gray-900 font-bold">Total subscriptions</p>
              <p className="py-4 font-bold">$30,000 </p>
              <p className="text-green-300">+34.5%</p>
            </div>
          </div>
          <div className="flex-1 p-4 justify-center  bg-gray-50  shadow rounded h-300px">
            <div className="">
              <p className="text-gray-900 font-bold">Total returns</p>
              <p className="py-4 font-bold ">$30,000 </p>
              <p className="text-green-300">+34.5%</p>
            </div>
          </div>
        </div>
      </section>

 <section className="flex my-4 px-4 gap-3">
        <div className="w-1/2 h-[300px] bg-gray-50 rounded"><AreaChartPlot/></div>
        <div className="w-1/2 h-[300px] bg-gray-50 rounded"><BarChartPlot/></div>
      </section>


      <section className="flex my-4 px-4 gap-2">
        <div className=" w-1/3 h-[250px] bg-gray-50 rounded"><PieChartPlot/></div>
        <div className=" w-1/3 h-[250px] bg-gray-50 rounded"><LineChartPlot/></div>
        <div className=" w-1/3 h-[250px] bg-gray-50 rounded"><RadarChartPlot/></div>
      </section>
    </>
}