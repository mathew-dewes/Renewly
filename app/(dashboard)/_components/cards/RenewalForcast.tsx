
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
        <div>
            <h2 className="text-xl text-center md:text-left">Renewal Forcast</h2>
            <p className="text-center md:text-left">By asset type</p>
            <div className="flex gap-3">
<AssetTypeFilter filter={type}/>
<DateFilter filter={range}/>
            </div>


            <RenewalsChart data={data} type={type} />
        </div>
    )
}