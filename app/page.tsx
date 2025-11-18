

import Dashboard from "./(dashboard)/_components/Dashboard";
import { AssetType } from "@prisma/client";
import { TimeFrame } from "@/server/validation/types";
import { authProtection } from "@/server/auth/auth";
import BreadCrumb from "@/components/ui/BreadCrumb";



export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}){


  const type = (await searchParams).type as AssetType | undefined;
  const range = (await searchParams).range as TimeFrame | undefined;

  await authProtection()
      

  return(
    <div>
      <div className="flex gap-4">
      <BreadCrumb route="Dashboard" href="/" active={true}/>
    </div>
     
      <div className="flex flex-col">

<Dashboard type={type || "EQUIPMENT"} range={range || "fornightly"}/>

   
      </div>
      
    

 

    </div>

  )
}