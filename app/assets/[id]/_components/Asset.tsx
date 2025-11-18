
import Button from "@/components/ui/Button";
import { getAsset } from "@/server/queries/assets"
import { renewalStatusStyle, statusLabel } from "@/server/queries/helper";
import Link from "next/link";
import DeleteAssetButton from "./DeleteAssetButton";


export default async function Asset({ assetId }:
    { assetId: string }
) {

    const asset = await getAsset(assetId);
    

    if (!asset) return
    return (
        <div className=" bg-white border rounded border-gray-200 shadow-lg px-5 py-8 text-sm mt-2 w-full md:w-120">

            <div>
                <h1>{asset.name}</h1>
                <div className="flex flex-col gap-1 mt-2">
                    <p><span className="font-semibold">Plant:</span> {asset.plantNumber}</p>
                    <p><span className="font-semibold">Type:</span> {asset.type}</p>
                    <p><span className="font-semibold">Serial Number:</span> {asset.serial}</p>
                    <p><span className="font-semibold">Location:</span> {asset.location}</p>
                    <p><span className="font-semibold">Renewal type:</span> {asset.renewals[0].renewalType}</p>
                        <div className="flex items-center gap-2">
                                          <p className="font-semibold">Renewal Status</p>
                                <div style={{ backgroundColor: renewalStatusStyle(asset.renewals[0].renewalDate) }} className="h-2 w-2 rounded-full" />
                                <p>{statusLabel(asset.renewals[0].renewalDate).label}</p>
                              </div>
                    <p><span className="font-semibold">Renewal date:</span> {asset.renewals[0].renewalDate.toLocaleDateString()}</p>
                </div>

            </div>
              <div className="flex justify-between mt-5 flex-col md:flex-row">
            <div className="flex gap-2">
            <Link href={'/assets/edit/' + assetId}><Button text="Edit"/></Link>
            <Link href={'/renewals/update/' + assetId}><Button text="Update"/></Link>
   
 

           
            </div>
            <div className="mt-5 md:mt-0">
              <DeleteAssetButton assetId={assetId}/>
            </div>
  
            </div>

        </div>
    )
}