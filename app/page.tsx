
import { getSession } from "@/server/auth/auth";
import CallToAction from "./(home)/_components/CallToAction";
import Features from "./(home)/_components/Featues";
import Dashboard from "./(dashboard)/_components/Dashboard";
import { AssetType } from "@prisma/client";
import { TimeFrame } from "@/server/validation/types";


export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}){


  const type = (await searchParams).type as AssetType | undefined;
  const range = (await searchParams).range as TimeFrame | undefined;
      

  const session = await getSession();
  return(
    <div>
 
      {!session ? <CallToAction/> : 
      <div className="flex flex-col">
        <h2 className="text-center md:text-left">Dashboard</h2>

<Dashboard type={type || "EQUIPMENT"} range={range || "fornightly"}/>

   
      </div>
      
    }

 

        {!session && 
        <div className="mt-40">
        <h1 className="text-center">Features</h1>
            <Features/>
        </div>
        
    }
     


    </div>

  )
}