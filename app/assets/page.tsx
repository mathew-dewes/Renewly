
import AssetsTable from "./_components/AssetsTable";
import AssetFilters from "./_components/AssetFilters";
import Button from "@/components/ui/Button";
import Link from "next/link";
import FilterTab from "@/components/ui/FilterTab";
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";


export default async function page({ searchParams }:
    { searchParams: Promise<{ type: string }> }
) {

    const filters = (await searchParams).type;



    return (
        <div>

            <h2>Assets:</h2>
     <AssetFilters />
          <div className="my-3">

                <FilterTab filters={filters} routeTo="/assets" />
            </div>

            <div className="mt-5 flex gap-5">
                <Link href={'/assets/add'}><Button text="Add asset" /></Link>

            </div>
            <Suspense fallback={<LoadingSpinner text="Loading assets..."/>}>
       <AssetsTable/> 
            </Suspense>
    

            


        </div>
    )
}