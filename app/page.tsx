
import { getSession } from "@/server/auth/auth";
import CallToAction from "./(home)/_components/CallToAction";
import Features from "./(home)/_components/Featues";
import Dashboard from "./(dashboard)/_components/Dashboard";



export default async function page({ searchParams }:
    { searchParams: Promise<{filter?: string}> }
){

      const params = await searchParams;
      const filter = params.filter
 
      

  const session = await getSession();
  return(
    <div>
 
      {!session ? <CallToAction/> : 
      <div className="flex flex-col">
<main className="w-full">
<Dashboard filter={filter || "month"}/>

      </main>
      </div>
      
    }

      <div className="mt-10">
        <h1 className="text-center">Features</h1>
        {!session && <Features/>}
     
      </div>

    </div>

  )
}