
import { getSession } from "@/server/auth/auth";
import CallToAction from "./(home)/_components/CallToAction";
import Features from "./(home)/_components/Featues";
import Dashboard from "./(dashboard)/_components/Dashboard";
import { AssetType } from "@prisma/client";



export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: AssetType | undefined }>
}){


  const type = (await searchParams).type;

  console.log(type);
  
  
      

  const session = await getSession();
  return(
    <div>
 
      {!session ? <CallToAction/> : 
      <div className="flex flex-col">

<Dashboard filter={type || "EQUIPMENT"}/>

   
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