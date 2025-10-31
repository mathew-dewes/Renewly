
import {Location, RenewalType } from "@prisma/client";
import RenewalsTable from "./_components/RenewalsTable";
import Filters from "./_components/Filters";
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { renewalCount } from "@/server/queries/renewals";
import Pagination from "@/components/ui/Pagination";

export default async function page({ searchParams }:
    { searchParams: Promise<{ location: Location | null , page?: string, type: RenewalType | null, time: string | null }> }
){

   const params = await searchParams;
   const location = params.location;
   const type = params.type;
   const time = params.time;


   const totalFoundAssets = await renewalCount(location, type, time);

   console.log(totalFoundAssets + " results found");

       const pageSize = 5;
    const page = Math.max(1, Number(params.page ?? 1));
    const totalPages = Math.max(1, Math.ceil(totalFoundAssets / pageSize));
   
   

   

    return (
      <div>
           <h2>Renewals</h2>
                  <div className="flex items-center mt-3 gap-10">
                      <div className="flex gap-5 items-center">
                          <p className="font-semibold">Filters:</p>
                          <Filters location={location} assetType={type} time={time} />
          
                      </div>
                  </div>
                  <p><span className="font-semibold">Results:</span> {totalFoundAssets}</p>
        <Suspense fallback={<div className="mt-10 mb-50"><LoadingSpinner text="Loading assets..." />
                        </div>}>
 <RenewalsTable location={location || null} renewalType={type || null} time={time || null} page={page} pageSize={pageSize}/>
    
        </Suspense>
                <div className="mt-5">
                        <Pagination
                            currentPage={page}
                            totalPages={totalPages}
                            baseUrl="/renewals"
                            searchParams={{
                        
                                pageSize: String(pageSize),
                                ...(type ? { type } : {}),
                                ...(location ? { location } : {}),
                                ...(time ? { time } : {}),

                            }}
                        />
        
                    </div>
        
      </div>
    )
}