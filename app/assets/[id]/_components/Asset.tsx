
import AssetImageLarge from "@/components/ui/images/AssetImageLarge";
import { getAsset } from "@/server/queries/assets"


export default async function Asset({assetId}:
    {assetId: string}
){

    const asset = await getAsset(assetId);

    if (!asset) return
    return (
        <div className="flex gap-5">
    <AssetImageLarge src={asset.imageUrl!} alt="Asset-image" size={200}/>
 

            <div>
 <h1>{asset.name}</h1>
            <p>Plant number: {asset.plantNumber}</p>
            <p>Type: {asset.type}</p>
            <p>Serial Number: {asset.serial}</p>
            <p>Location: {asset.location}</p>
            </div>
           
        </div>
    )
}