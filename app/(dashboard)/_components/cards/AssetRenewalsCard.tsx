
import RenewalsChart from "../charts/RenewalsChart";
import { getQuartlyForcast } from "@/server/queries/renewals";
import AssetTypeFilter from "../AssetTypeFilter";
import { AssetType } from "@prisma/client";



export default async function AssetRenewalsCard({filter}:
  {filter: AssetType}
){

const data = await getQuartlyForcast(filter);


        


    return (
        <div className="w-full">
            <h2>Quartly Forcast</h2>
            <p>By asset type</p>
<AssetTypeFilter filter={filter}/>
            <div className="my-2 flex items-center gap-2">
            </div>

            <RenewalsChart data={data} />
        </div>
    )
}