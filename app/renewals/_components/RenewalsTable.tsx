
import { getRenewals } from "@/server/queries/renewals";
import Link from "next/link";





export default async function RenewalsTable(){

    const renewals = await getRenewals();


         if (renewals.length === 0){
            return <p className="mt-10 font-medium">There are no renewals at this time. Please try again later</p>
        }
    


   
    return (

                 <table className="w-full mt-5 hidden md:table">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Plant no</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Asset</th>
        
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden lg:table-cell">Renewal Type</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden lg:table-cell">Location</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden lg:table-cell">Expiry</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden lg:table-cell"></th>
                          
                                </tr>
                            </thead>


    
                 
                    <tbody className="bg-white divide-y divide-gray-200">
                         
                           
                                       {renewals?.map((renewal) => {
                    return (
                        <tr key={renewal.id} className="hover:bg-gray-50">



                            <td className="px-6 py-4 text-sm text-dark-500 hidden md:table-cell">{renewal.asset.plantNumber}</td>
                            <td className="px-6 py-4 h-20 text-sm text-dark-500 hidden md:table-cell font-medium">
                                {renewal.asset.name}

                            </td>

                            <td className="px-6 py-4 text-sm text-dark-500 hidden md:table-cell">{renewal.renewalType}</td>
                            <td className="px-6 py-4 text-sm text-dark-500 hidden md:table-cell">{renewal.asset.location}</td>
                            <td className="px-6 py-4 text-sm text-dark-500 hidden lg:table-cell">{renewal.renewalDate.toLocaleDateString()}</td>
                            <td className="px-6 py-4 text-sm text-dark-500 hidden md:table-cell">
                                <Link href={`/renewals/${renewal.id}`}>View</Link>
                            </td>









                        </tr>
                    )
                })}

                         
                   
                                  
                   
                   
                   
                   
                   
                   
                           </tbody>
                           
  
 
               
                        </table>
           
    )
}