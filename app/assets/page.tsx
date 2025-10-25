
import AssetsTable from "./_components/AssetsTable";


import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { AssetType } from "@prisma/client";
import TypeDropDown from "./_components/TypeDropDown";
import Pagination from "@/components/ui/Pagination";
import prisma from "@/server/db/prisma";
import SearchBar from "./_components/SearchBar";


export default async function page({ searchParams }:
    { searchParams: Promise<{ type: AssetType, query?: string, page?: string }> }
) {

    const filters = (await searchParams).type;
    const params = await searchParams;
    const query = (params.query ?? "").trim();
    const type = (params.type)


    const totalAssets = await prisma.asset.count({
        where: {
            type
        }
    });

    const pageSize = 5;
    const page = Math.max(1, Number(params.page ?? 1));
    const totalPages = Math.max(1, Math.ceil(totalAssets / pageSize));



    return (
        <div>
            <h2>Assets</h2>
            <div className="flex items-center mt-3 gap-10">
                <div className="flex gap-5 items-center">
                    <p className="font-semibold">View:</p>
                    <TypeDropDown filter={filters} />

                </div>
            </div>

            <SearchBar />
            <Suspense fallback={<LoadingSpinner text="Loading assets..." />}>
                <AssetsTable filters={filters || null} page={page} pageSize={pageSize} />
            </Suspense>
            <div className="mt-5">
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