import EditAssetForm from "./_components/EditAssetForm";
import GoBack from "@/components/ui/GoBack";
import { getDefaultAssetValues } from "@/server/queries/assets";

export default async function page({params}:
    {params: Promise<{id: string}>}
){

        const {id} = await params;

        const defaulValues = await getDefaultAssetValues(id)

        if (!defaulValues) return
   
        


    return(
        <div>
           <h1>Edit Asset</h1>
           <GoBack text="Return" href={`/assets/${id}`}/>
            <EditAssetForm values={defaulValues}/>
        </div>
    )
}