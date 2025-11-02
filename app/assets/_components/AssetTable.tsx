"use client"


import { $Enums } from "@prisma/client";
import { useRouter } from "next/navigation";

export function AssetTable({assets}:
    {assets:{
    id: string;
    plantNumber: string;
    name: string;
    serial: string;
    type: $Enums.AssetType;
    location: $Enums.Location;
}[]}
){

      const router = useRouter();
    return (
          <table className="w-full mt-5">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-3 py-3 text-left text-xs font-medium text-dark-500 uppercase">Plant</th>
                        <th className="px-3 py-3 text-left text-xs font-medium text-dark-500 uppercase">Asset</th>
                        <th className="px-3 py-3 text-left text-xs font-medium text-dark-500 uppercase">Serial</th>
                        <th className="px-3 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden  md:table-cell">Type</th>
                        <th className="px-3 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden  md:table-cell">Location</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {assets?.map((asset) => {
                        return (
                            <tr 
                            key={asset.id} onClick={() => router.push(`/assets/edit/${asset.id}`)} 
                            className="hover:bg-gray-100 cursor-pointer">
                        
                                  <td className="px-3 py-4 text-sm text-dark-500  md:table-cell">{asset.plantNumber}</td>
                                <td className="px-3 py-4 h-20 text-sm text-dark-500  md:table-cell">
                                    <div>
                                        <div className="font-medium">{asset.name}</div>
                                    </div>

                                </td>
                                <td className="md:px-3 px-2 py-4 text-sm text-dark-500  md:table-cell">{asset.serial}</td>
                                <td className="md:px-3 px-2 py-4 text-sm text-dark-500 hidden  md:table-cell">{asset.type}</td>
                                <td className="md:px-3 px-2 py-4 text-sm text-dark-500 hidden  md:table-cell">{asset.location}</td>
                            </tr>
                        )
                    })}












                </tbody>




            </table>
    )
}