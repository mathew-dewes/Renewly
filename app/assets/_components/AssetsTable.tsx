
import AssetImage from "@/components/ui/AssetImage";
import { getAssets } from "@/server/queries/assets";
import Image from "next/image"
import Link from "next/link"




export default async function AssetsTable() {

        const assets = await getAssets();
    return (

        <table className="w-full mt-5 hidden md:table">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Plant no</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Asset</th>

                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden lg:table-cell">Serial/ Rego</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden lg:table-cell">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden lg:table-cell">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden lg:table-cell"></th>

                </tr>
            </thead>




            <tbody className="bg-white divide-y divide-gray-200">
                {assets?.map((asset) => {
                    return (
                        <tr key={asset.id} className="hover:bg-gray-50">



                            <td className="px-6 py-4 text-sm text-dark-500">{asset.plantNumber}</td>
                            <td className="px-6 py-4 text-sm text-dark-500 hidden lg:table-cell">
                                <div className="flex gap-3 items-center">
                                    <div className="w-16 h-16 overflow-hidden rounded-full">
                               <AssetImage src={asset.imageUrl || ""} alt="asset-image" />
                                    </div>


                                    <div>{asset.name}</div>
                                </div>

                            </td>

                            <td className="px-6 py-4 text-sm text-dark-500 hidden lg:table-cell">{asset.serial}</td>
                            <td className="px-6 py-4 text-sm text-dark-500 hidden lg:table-cell">{asset.type}</td>
                            <td className="px-6 py-4 text-sm text-dark-500 hidden lg:table-cell">{asset.location}</td>
                            <td className="px-6 py-4 text-sm text-dark-500 hidden lg:table-cell">
                                <Link href={`/assets/${asset.id}`}>View</Link>
                            </td>









                        </tr>
                    )
                })}












            </tbody>




        </table>

    )
}