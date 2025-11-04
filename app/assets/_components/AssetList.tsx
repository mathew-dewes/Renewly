
import { getAssets } from "@/server/queries/assets";
import { AssetType } from "@prisma/client";
import Link from "next/link"
import { AssetTable } from "./AssetTable";



export default async function AssetList({ filters, page, pageSize, query }:
    { filters: AssetType | null, page: number, pageSize: number, query: string | null }
) {
const assets = await getAssets(filters, page, pageSize, query);


    return (
        <div className="mt-5 px-3 py-3">
            <div className="flex items-center gap-5">
   
                <Link href={'/assets/add'}>
                <button className={`text-sm bg-green-400 font-medium text-light-500 px-3 py-2 rounded-lg cursor-pointer hover:font-semibold`}>Create Asset</button>
                </Link>
            
            </div>


{assets.length !== 0 && 
<AssetTable assets={assets}/>}
          
        </div>


    )
}