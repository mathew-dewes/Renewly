
import BreadCrumb from "@/components/ui/BreadCrumb";
import Asset from "./_components/Asset";
import prisma from "@/server/db/prisma";



export default async function page({params}:
    {params: Promise<{id: string}>}
){

    const {id} = await params;

    const asset = await prisma.asset.findUnique({
        where: {id},
        select:{
            plantNumber: true
        }
    });

    if (!asset || !id) return


    return (
        <div>
                  <div className="flex gap-4">
                  <BreadCrumb route="Assets" href="/assets" active={false}/>
                <BreadCrumb route={asset?.plantNumber} href="/" active={true}/>
                </div>
            <div>
     <Asset assetId={id}/>
          
            </div>
       

        </div>
    )
}