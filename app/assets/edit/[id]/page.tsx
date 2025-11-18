import BreadCrumb from "@/components/ui/BreadCrumb";
import EditAssetForm from "./_components/EditAssetForm";
import { getDefaultAssetValues } from "@/server/queries/assets";

export default async function page({params}:
    {params: Promise<{id: string}>}
){

        const {id} = await params;

        const defaulValues = await getDefaultAssetValues(id);


        

        if (!defaulValues) return
   
        


    return(
        <div>
                 <div className="flex gap-4">
                                                         <BreadCrumb route="Assets" href="/assets" active={false}/>
                                                         <BreadCrumb route={"Edit - " + defaulValues.plantNumber} href="/renewals" active={true}/>
                                                 
                                                  
                                                       </div>
            <EditAssetForm values={defaulValues}/>
        </div>
    )
}