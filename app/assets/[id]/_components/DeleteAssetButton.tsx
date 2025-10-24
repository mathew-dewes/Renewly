"use client"

import { deleteAsset } from "@/server/mutations/assets";
import { useRouter } from "next/navigation";

export default function DeleteAssetButton({assetId}:
    {assetId: string}
){
    const router = useRouter();

    async function handleDelete(){
        deleteAsset(assetId);
        router.push('/assets')
    }

    return <button onClick={handleDelete} className={`bg-red-400 text-light-500 px-8 py-2 rounded-lg cursor-pointer hover:font-semibold`}>Delete</button>

}