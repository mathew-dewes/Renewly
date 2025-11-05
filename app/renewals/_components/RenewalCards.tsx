import { renewalStatusStyle } from "@/server/queries/helper";
import { getRenewals } from "@/server/queries/renewals";
import {Location, RenewalType } from "@prisma/client";
import { differenceInDays } from "date-fns";
import Link from "next/link";

export default async function RenewalCards({location, renewalType, time, page, pageSize}:
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
        <div>
            {renewals.map((renewal)=>{
                return (
  <div key={renewal.id} className="md:hidden bg-gray-50 py-3 px-3 rounded-xl mt-5">
            <div className="flex items-center gap-2">
            <h3>Plant:</h3>
            <p>{renewal.asset.plantNumber}</p>
            </div>
            <div className="flex items-center gap-2">
            <h3>Asset:</h3>
            <p>{renewal.asset.name}</p>
            </div>
                  <div className="flex items-center gap-2">
            <h3>Location:</h3>
            <p>{renewal.asset.location}</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
            <h3>Renewal type:</h3>
            <p>{renewal.renewalType}</p>
            </div>
      
            <div className="flex items-center gap-2">
            <h3>Renewal date:</h3>
            <p>{renewal.renewalDate.toLocaleDateString("en-NZ", {
  timeZone: "Pacific/Auckland",
})}</p>
            </div>
                <div className="flex items-center gap-2 mt-2">
                    <h3>Status:</h3>
                                                      <div style={{backgroundColor:renewalStatusStyle(renewal.renewalDate)}} className="h-2 w-2 rounded-full"/>
                                            <p>{statusLabel(renewal.renewalDate).label}</p>
                                            </div>
                                               <Link href={'/renewals/update/' + renewal.asset.id}>
                <button className={`mt-5 text-sm bg-green-400 font-medium text-light-500 px-3 py-2 rounded-lg cursor-pointer hover:font-semibold`}>Update</button>
                </Link>

        </div>
                )
            })}

        </div>
      
    )
}

{/* <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Plant no</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Asset</th>
        
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden lg:table-cell">Renewal Type</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden lg:table-cell">Location</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden lg:table-cell">Expiry</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden lg:table-cell">Status</th> */}