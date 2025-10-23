
import AssetsTable from "./_components/AssetsTable";
import AssetFilters from "./_components/AssetFilters";
import Button from "@/components/ui/Button";
import prisma from "@/server/db/prisma";


export default async function page({searchParams}:
    {searchParams: Promise<{type: string}>}
){

    const filters = (await searchParams).type;

    const assets = await prisma.asset.findMany();

    console.log(assets);
    



    
    return (
        <div>
       
           <h2>Assets:</h2>
                   <AssetFilters/>
                   <div className="my-3">
                    <p className={`${filters == undefined ? "invisible" : "visible"} bg-green-400 text-sm w-fit px-3 py-2 text-dark-500 font-medium rounded-lg flex items-center gap-2`}>{filters || "clear"} 
                        <span className="font-thin cursor-pointer"><a
                href="/assets"
     
              >
                x
              </a></span></p>
                   </div>
                    <div className="mt-5 flex gap-5">
                               <Button text="Add asset"/>
                              </div>
   
            <AssetsTable/>
        </div>
    )
}