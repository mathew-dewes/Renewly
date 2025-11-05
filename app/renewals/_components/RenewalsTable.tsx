

import { renewalStatusStyle } from "@/server/queries/helper";
import { getRenewals } from "@/server/queries/renewals";
import {Location, RenewalType } from "@prisma/client";
import { differenceInDays } from "date-fns";
import Link from "next/link";


export default async function RenewalsTable({location, renewalType, time, page, pageSize}:
    {location: Location | null, renewalType: RenewalType | null, time: string | null,  page: number, pageSize: number}
){



    const renewals = await getRenewals(location, renewalType, time, page, pageSize);


         if (renewals.length === 0){
            return 
        }
    

        const statusLabel = (date: Date) =>{
    const today = new Date();
    const days = differenceInDays(today, date);

    if (days > 0){
        return {label:"Overdue", color: "#ff1a1a"}
    } else if (days < -14){
        return {label:"Upcoming", color: "#00C49F"}
    } else{
        return {label: "Due soon", color: "#FFBB28"}
    }

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
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden lg:table-cell">Status</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-dark-500 uppercase hidden lg:table-cell">Action</th>
                          
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
                            <td className="px-6 py-4 text-sm text-dark-500 hidden lg:table-cell">{renewal.renewalDate.toLocaleDateString("en-NZ", {
  timeZone: "Pacific/Auckland",
})}</td>
                            <td className={`px-6 py-4 text-sm text-dark-500 hidden lg:table-cell`}>
                                <div className="flex items-center gap-2">
                                          <div style={{backgroundColor:renewalStatusStyle(renewal.renewalDate)}} className="h-2 w-2 rounded-full"/>
                                <p>{statusLabel(renewal.renewalDate).label}</p>
                                </div>
                         </td>
                            <td className="px-6 py-4 text-sm text-dark-500 hidden md:table-cell text-center">
                
   
                <Link href={'/renewals/update/' + renewal.asset.id}>
                <button className={`text-sm bg-green-400 font-medium text-light-500 px-3 py-2 rounded-lg cursor-pointer hover:font-semibold`}>Update</button>
                </Link>
            
          
                            </td>









                        </tr>
                    )
                })}

                         
                   
                                  
                   
                   
                   
                   
                   
                   
                           </tbody>
                           
  
 
               
                        </table>
           
    )
}