
import AssetThumbnail from "@/components/ui/images/AssetImage";

import { getAssets } from "@/server/queries/assets";
import { AssetType } from "@prisma/client";
import Link from "next/link"



export default async function AssetsTable({ filters }:
    { filters: AssetType | null }
) {

    const assets = await getAssets(filters);




    return (
        <div className="mt-5">
            <div className="flex items-center gap-5">
   
                <Link href={'/assets/add'}>
                <button className={`text-sm bg-green-400 font-medium text-light-500 px-3 py-2 rounded-lg cursor-pointer hover:font-semibold`}>Create Asset</button>
                </Link>
            
            </div>


{assets.length !== 0 && 
  <table className="w-full mt-5">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-3 py-3 text-left text-xs font-medium text-dark-500 uppercase">Plant</th>
                        <th className="px-3 py-3 text-left text-xs font-medium text-dark-500 uppercase">Asset</th>

                        <th className="px-3 py-3 text-left text-xs font-medium text-dark-500 uppercase  md:table-cell">Serial</th>
                        <th className="px-3 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden  lg:table-cell">Type</th>
                        <th className="px-3 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden   lg:table-cell">Location</th>
                        <th className="px-3 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden   md:table-cell"></th>

                    </tr>
                </thead>




                <tbody className="bg-white divide-y divide-gray-200">
                    {assets?.map((asset) => {
                        return (
                            <tr key={asset.id} className="hover:bg-gray-50">



                                <td className="px-3 py-4 text-sm text-dark-500  md:table-cell">{asset.plantNumber}</td>
                                <td className="px-3 py-4 h-20 text-sm text-dark-500  md:table-cell">
                                    <div className="flex gap-2 items-center">
                                        {asset.imageUrl && <div className="overflow-hidden rounded-full">
                                            <AssetThumbnail size={80} src={asset.imageUrl} alt="asset-image" />


                                        </div>}



                                        <div className="font-medium">{asset.name}</div>
                                    </div>

                                </td>

                                <td className="px-3 py-4 text-sm text-dark-500  md:table-cell">{asset.serial}</td>
                                <td className="px-3 py-4 text-sm text-dark-500 hidden  lg:table-cell">{asset.type}</td>
                                <td className="px-3 py-4 text-sm text-dark-500 hidden  lg:table-cell">{asset.location}</td>
                                <td className="px-3 py-4 text-sm text-dark-500 hidden  md:table-cell">
                                    <Link href={`/assets/${asset.id}`}>Edit</Link>
                                </td>









                            </tr>
                        )
                    })}












                </tbody>




            </table>}
          
        </div>


    )
}