
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { AssetType } from "@prisma/client";
import TypeDropDown from "./_components/TypeDropDown";
import Pagination from "@/components/ui/Pagination";
import prisma from "@/server/db/prisma";
import SearchBar from "./_components/SearchBar";
import AssetList from "./_components/AssetList";
import FilterReseter from "@/components/ui/FilterReseter";
import BreadCrumb from "@/components/ui/BreadCrumb";


export default async function page({ searchParams }:
    { searchParams: Promise<{ type: AssetType, query?: string, page?: string }> }
) {

    const params = await searchParams;
    const query = (params.query ?? "").trim();
    const type = (params.type)


    const totalAssets = await prisma.asset.count({
        where: {
            type,
                  ...(query && {
        OR: [
          { name: { contains: query } },
          { plantNumber: { contains: query } },
          { serial: { contains: query } },
     
        ],
      }),
        },
        
    });

    const pageSize = 5;
    const page = Math.max(1, Number(params.page ?? 1));
    const totalPages = Math.max(1, Math.ceil(totalAssets / pageSize));



    return (
        <div>
                  <div className="flex gap-4">
                  <BreadCrumb route="Assets" href="/assets" active={true}/>
                </div>
            <div className="flex items-center mt-5 gap-3 md:gap-5">
                <div className="flex gap-5 items-center">
                    <p className="font-semibold">View:</p>
                    <TypeDropDown filter={type} />

                </div>
                        {(query || type) && <FilterReseter  href="/assets"/>}
            </div>
 

       

            <SearchBar />
            {query && <p className="mt-5">{totalAssets} results found for search query &quot;{query}&quot; </p>}
            {type && <p className="mt-5">{totalAssets} results found for asset type &quot;{type}&quot; </p>}

            <Suspense fallback={<div className="mt-10 mb-50"><LoadingSpinner text="Loading assets..." />
                </div>}>
                <AssetList filters={type || null} page={page} pageSize={pageSize} query={query || null} />
            </Suspense>
            <div className="mt-5 w-full">
                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    baseUrl="/assets"
                    searchParams={{
                        ...(query ? { query } : {}),
                        pageSize: String(pageSize),
                        ...(type ? { type } : {}) 
                    }}
                />

            </div>







        </div>
    )
}