

import UpcomingRewalsCard from "./cards/UpcomingRenewalsCard";


import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import FortnightlyRenewalsCard from "./cards/FornightlyRenewalsCard";
import { AssetType } from "@prisma/client";
import RenewalForcast from "./cards/RenewalForcast";
import { TimeFrame } from "@/server/validation/types";
import RenewalForcastLocations from "./cards/RenewalForcastLocations";




export default async function Dashboard({type, range }:{
  type:AssetType, range: TimeFrame
}) {


  return (
    <>
      <section className="grid gap-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 mt-5">
    
        <div className="p-8 bg-gray-50 shadow rounded h-[400px] lg:h-[300px] col-span-1 lg:col-span-1">
          <Suspense fallback={<LoadingSpinner text="Loading data..." />}>
            <UpcomingRewalsCard />
          </Suspense>

        </div>
        <div className="p-8 bg-gray-50 shadow rounded md:flex-row gap-10 col-span-1 lg:col-span-1 2xl:col-span-2  h-[300px]">
          <FortnightlyRenewalsCard  />

        </div>

      </section>
      <section className="grid gap-4 grid-cols-1 mt-5">

        <div className="p-8 bg-gray-50 shadow rounded md:flex-row gap-10 h-[380px]">
          <RenewalForcast type={type} range={range}/>

        </div>


      </section>
      <section className="grid gap-4 grid-cols-1 mt-5">

        <div className="p-8 bg-gray-50 shadow rounded md:flex-row gap-10 h-[400px] md:h-[380px]">
          <RenewalForcastLocations type={type} range={range}/>

        </div>










      </section>
    </>
  )
}
