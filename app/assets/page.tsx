
import AssetsTable from "./_components/AssetsTable";
import AssetFilters from "./_components/AssetFilters";
import Button from "@/components/ui/Button";
import { getAssets } from "@/server/queries/assets";
import Link from "next/link";


export default async function page({ searchParams }:
    { searchParams: Promise<{ type: string }> }
) {

    const filters = (await searchParams).type;

    const assets = await getAssets();


    return (
        <div>

            <h2>Assets:</h2>
            <AssetFilters />
            <div className="my-3">
                <p className={`${filters == undefined ? "invisible" : "visible"} bg-green-400 text-sm w-fit px-3 py-2 text-dark-500 font-medium rounded-lg flex items-center gap-2`}>{filters || "clear"}
                    <span className="font-thin cursor-pointer"><Link
                        href="/assets"

                    >
                        x
                    </Link></span></p>
            </div>
            <div className="mt-5 flex gap-5">
                <Link href={'/assets/add'}><Button text="Add asset" /></Link>

            </div>
            {assets.length !== 0 ? <AssetsTable assets={assets} /> :

                <div className="mt-5">
                        <p>There are no products listed at this time. Please add assets to see them here</p>
                </div>}


        </div>
    )
}