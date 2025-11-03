import Button from "@/components/ui/Button";
import { renewalStatusStyle, timeBetween } from "@/server/queries/helper";
import { getLatestRenewals } from "@/server/queries/renewals";
import Link from "next/link";

export default async function UpcomingRewalsCard(){

    const renewals = await getLatestRenewals();

    
    return (
        <div>
            <h2 className="text-xl text-center md:text-left">Latest Renewals</h2>
            <div className="mt-3 flex flex-col gap-2">
                {renewals.map((renewal)=>{
                    const asset = renewal.asset;
                    const duration = timeBetween(renewal.renewalDate);
       
                    
                    return <div className="flex items-center gap-2" key={renewal.id}>
                        <div style={{backgroundColor:renewalStatusStyle(renewal.renewalDate)}} className="h-2 w-2 rounded-full"/>
                        <p className="text-sm text-gray-700"
                    >{asset.plantNumber} {asset.name} - {asset.location} - {duration}</p></div>
                })}

            </div>
            <div className="mt-5">
                <Link href={'/renewals'}><Button text="View renewals"/></Link>
  
            </div>
       
         
        </div>
    )
}