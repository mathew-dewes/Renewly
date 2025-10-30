
import RenewalsChart from "../charts/RenewalsChart";
import { getRenewalForcast } from "@/server/queries/renewals";
import AssetTypeFilter from "../AssetTypeFilter";
import { AssetType } from "@prisma/client";
import DateFilter from "../DateFilter";
import { TimeFrame } from "@/server/validation/types";



export default async function RenewalForcast({type, range}:
  {type: AssetType, range: TimeFrame}
){

const data = await getRenewalForcast(type, range);



    return (
        <div className="w-full">
            <h2>Renewal Forcast</h2>
            <p>By asset type</p>
            <div className="flex gap-3">
<AssetTypeFilter filter={type}/>
<DateFilter filter={range}/>
            </div>

            <div className="my-2 flex items-center gap-2">
            </div>

            <RenewalsChart data={data} />
        </div>
    )
}