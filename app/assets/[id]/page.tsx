import Button from "@/components/ui/Button";
import Asset from "./_components/Asset";
import GoBack from "@/components/ui/GoBack";

export default async function page({params}:
    {params: Promise<{id: string}>}
){

    const {id} = await params;

    return (
        <div>
         <GoBack text="Assets"/>
            <div className="w-full sm:w-110 mt-5">
     <Asset assetId={id}/>
            <div className="flex flex-col md:flex-row mt-5 justify-between">
            <div className="flex gap-2">
                <Button text="Edit"/>
                <Button text="Add renewal"/>
           
            </div>
            <div className="mt-3 md:mt-0">
               <Button danger={true} text="Delete"/>
            </div>
  
            </div>
            </div>
       

        </div>
    )
}