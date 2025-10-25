
import AssetsTable from "./_components/AssetsTable";


import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { AssetType } from "@prisma/client";
import TypeDropDown from "./_components/TypeDropDown";


export default async function page({ searchParams }:
    { searchParams: Promise<{ type: AssetType }> }
) {

    const filters = (await searchParams).type;



    return (
        <div>
            <h2>Assets</h2>
            <div className="flex items-center mt-3 gap-10">
      <div className="flex gap-5 items-center">
               <p className="font-semibold">View:</p>
                     <TypeDropDown filter={filters}/>
   
                     </div>
            </div>
      
            <Suspense fallback={<LoadingSpinner text="Loading assets..."/>}>
       <AssetsTable filters={filters || null}/> 
            </Suspense>
    

            


        </div>
    )
}