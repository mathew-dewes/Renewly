

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
      <section className="grid gap-4 px-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4">
    
        <div className="p-8 bg-gray-50 shadow rounded">
          <Suspense fallback={<LoadingSpinner text="Loading data..." />}>
            <UpcomingRewalsCard />
          </Suspense>

        </div>
        <div className="p-8 h-80 md:h-[350px] bg-gray-50 shadow rounded md:flex-row gap-10 md:col-span-3">
          <FortnightlyRenewalsCard  />

        </div>

      </section>
      <section className="grid gap-4 px-4 grid-cols-1 mt-5">

        <div className="p-8 h-[720px] md:h-[700px] bg-gray-50 shadow rounded md:flex-row gap-10">
          <RenewalForcast type={type} range={range}/>
          <RenewalForcastLocations type={type} range={range}/>

        </div>










      </section>
    </>
  )
}
