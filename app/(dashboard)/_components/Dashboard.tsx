

import ComplianceCard from "./cards/ComplianceCard";
import UpcomingRewalsCard from "./cards/UpcomingRenewalsCard";

import AssetRenewalsCard from "./cards/AssetRenewalsCard";
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import FortnightlyRenewalsCard from "./cards/FornightlyRenewalsCard";
import { AssetType } from "@prisma/client";



export default async function Dashboard({filter}:{
  filter:AssetType
}) {


  return (
    <>
      <section className="grid gap-4 px-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4">
        <div className="p-8 h-[430px] md:h-[350px] bg-gray-50 shadow rounded">

          <ComplianceCard />


        </div>

        <div className="p-8 h-[350px] bg-gray-50 shadow rounded">
          <Suspense fallback={<LoadingSpinner text="Loading data..." />}>
            <UpcomingRewalsCard />
          </Suspense>

        </div>
        <div className="p-8 h-[500px] md:h-[350px] bg-gray-50 shadow rounded md:flex-row gap-10 md:col-span-2">
          <FortnightlyRenewalsCard  />

        </div>

      </section>
      <section className="grid gap-4 px-4 grid-cols-1 mt-5">

        <div className="p-8 h-[500px] md:h-[350px] bg-gray-50 shadow rounded md:flex-row gap-10">
          <AssetRenewalsCard filter={filter}/>

        </div>









      </section>
    </>
  )
}
