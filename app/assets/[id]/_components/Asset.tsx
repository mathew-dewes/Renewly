
import { getAsset } from "@/server/queries/assets"


export default async function Asset({ assetId }:
    { assetId: string }
) {

    const asset = await getAsset(assetId);

    console.log(asset);
    

    if (!asset) return
    return (
        <div className="flex gap-5">

            <div>
                <h1>{asset.name}</h1>
                <div className="flex flex-col gap-1 mt-2">
                    <p><span className="font-semibold">Plant:</span> {asset.plantNumber}</p>
                    <p><span className="font-semibold">Type:</span> {asset.type}</p>
                    <p><span className="font-semibold">Serial Number:</span> {asset.serial}</p>
                    <p><span className="font-semibold">Location:</span> {asset.location}</p>
                    <p><span className="font-semibold">Renewal type:</span> {asset.renewals[0].renewalType}</p>
                    <p><span className="font-semibold">Renewal date:</span> {asset.renewals[0].renewalDate.toLocaleDateString()}</p>
                </div>

            </div>

        </div>
    )
}