import Locations from "./Locations";
import RenewalForcast from "./RenewalForcast";
import RenewalHealth from "./RenewalHealth";
import Summary from "./Summary";
import UpcomingReminders from "./UpcomingReminders";

export default function Dashboard(){
    return (
        <>
        <section className="grid gap-4 px-4 grid-cols-1  xl:grid-cols-3">
        <div className="p-8 h-[300px] bg-gray-50  shadow rounded">
           <RenewalHealth/>
        </div>
        <div className="p-8 h-[300px] bg-gray-50  shadow rounded">
           <UpcomingReminders/>
        </div>
        <div className="p-8 h-[300px] bg-gray-50  shadow rounded">
            <Summary/>
        </div>
        </section>
        <section className="grid gap-4 px-4 py-4">
        <div className="h-[300px] bg-gray-50  shadow rounded grid xl:grid-cols-3">
            <div className="col-span-2 p-8">
       <RenewalForcast/>
            </div>
    <div className="p-8">
      <Locations/>
    </div>
     
        
        </div>
  
       
        </section>
        </>
    )
}


// "use client";

// import AreaChartPlot from "@/app/(dashboard)/_components/plots/AreaChartPlot";
// import BarChartPlot from "@/app/(dashboard)/_components/plots/BarChartPlot";
// import LineChartPlot from "@/app/(dashboard)/_components/plots/LineChartPlot";
// import PieChartPlot from "@/app/(dashboard)/_components/plots/PieChartPlot";
// import RadarChartPlot from "@/app/(dashboard)/_components/plots/RadarChartPlot";


// export default function Charts() {
//   return <>
//     <section className="grid gap-4 px-4 py-5 
//   grid-cols-1 sm:grid-cols-2 xl:grid-cols-[0.5fr_1.5fr_1fr]">

//       <div className="p-8 h-[300px]   bg-gray-50  shadow rounded h-300px">
//         <div className="">
//           <p className="text-gray-900 font-bold">Total Assets</p>
//           <p className="py-4 font-bold">32</p>
//           <p className="text-green-300">+34.5%</p>

//         </div>
//       </div>
   
//             <div className="p-8 h-[300px] bg-gray-50 shadow rounded col-span-1 sm:col-span-2 xl:col-span-1">

//         <BarChartPlot /></div>

//   <div className=" p-4 justify-center  bg-gray-50  shadow rounded h-300px">
//         <div className="">
//           <p className="text-gray-900 font-bold">Upcoming Renewals</p>
//           <p className="py-4 font-bold">$30,000 </p>
//           <p className="text-green-300">+34.5%</p>
//         </div>
//       </div>


//     </section>

//     <section className="grid gap-4 px-4 py-5 
//   grid-cols-1 sm:grid-cols-2  xl:grid-cols-[2fr_1fr]">
    
      

//       <div className="p-4 h-[300px] bg-gray-50 shadow rounded col-span-1 sm:col-span-2 xl:col-span-1">
//         <AreaChartPlot /></div>
//         <div className=" p-4 justify-center  bg-gray-50  shadow rounded h-300px">
//         <div className="">
//           <p className="text-gray-900 font-bold">Renewal Heath</p>
//           <p className="py-4 font-bold ">$30,000 </p>
//           <p className="text-green-300">+34.5%</p>
     

//         </div>
//       </div>

//     </section>


//     <section className="flex flex-col lg:flex-row my-4 px-4 gap-3">
//       <div className="w-full h-[250px] bg-gray-50 rounded"><PieChartPlot /></div>
//       <div className="w-full h-[250px] bg-gray-50 rounded"><LineChartPlot /></div>
//       <div className="w-full h-[250px] bg-gray-50 rounded"><RadarChartPlot /></div>
//     </section>
//   </>
// }