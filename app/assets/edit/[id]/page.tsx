import prisma from "@/server/db/prisma";
import EditAssetForm from "./_components/EditAssetForm";
import DeleteAssetButton from "../../[id]/_components/DeleteAssetButton";
import GoBack from "@/components/ui/GoBack";

export default async function page({params}:
    {params: Promise<{id: string}>}
){

        const {id} = await params;

        const defaulValues = await prisma.asset.findUnique({
            where:{
                id
            },
            select:{
                id: true,
                name:true,
                plantNumber:true,
                serial: true,
                location:true,
                type:true,
        
                renewals:{
                    select:{
                        renewalType: true,
                        renewalDate: true
                    }
                }

            }
        });

        if (!defaulValues) return
   
        


    return(
        <div>
           <h1>Edit Asset</h1>
           <GoBack text="Assets" href="/assets"/>
            <EditAssetForm values={defaulValues}/>
            <div className="mt-10">
                <DeleteAssetButton assetId={id}/>
            </div>
        </div>
    )
}