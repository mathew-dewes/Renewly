
import { getRenewalForcastLocations } from "@/server/queries/renewals";
import { AssetType } from "@prisma/client";
import { TimeFrame } from "@/server/validation/types";
import RenewalLocationChart from "../charts/RenewalLocationChart";



export default async function RenewalForcastLocations({type, range}:
  {type: AssetType, range: TimeFrame}
){

const data = await getRenewalForcastLocations(type, range);


    return (
        <div className="w-full">

                        <RenewalLocationChart data={data} />
            

    
        </div>
    )
}