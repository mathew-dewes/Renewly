import Button from "@/components/ui/Button";
import Asset from "./_components/Asset";
import GoBack from "@/components/ui/GoBack";
import DeleteAssetButton from "./_components/DeleteAssetButton";
import Link from "next/link";


export default async function page({params}:
    {params: Promise<{id: string}>}
){

    const {id} = await params;


 

    return (
        <div>
         <GoBack text="Assets" href={"/assets"}/>
            <div className="w-full sm:w-150 mt-5 bg-gray-50 px-5 py-5 rounded-xl">
     <Asset assetId={id}/>
            <div className="flex flex-col md:flex-row mt-5 justify-between">
            <div className="flex gap-4">
            <Link href={'/assets/edit/' + id}><Button text="Edit"/></Link>
            <Link href={'/renewals/update/' + id}><Button text="Update renewal"/></Link>
   
 

           
            </div>
            <div className="mt-8 md:mt-0">
              <DeleteAssetButton assetId={id}/>
            </div>
  
            </div>
            </div>
       

        </div>
    )
}