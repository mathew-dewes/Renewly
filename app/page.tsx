
import { getSession } from "@/server/auth/auth";
import CallToAction from "./(home)/_components/CallToAction";
import Features from "./(home)/_components/Featues";
import Charts from "@/components/Charts";

export default async function page(){

  const session = await getSession();
  return(
    <div>
 
      {!session ? <CallToAction/> : 
      <div className="flex">
<main className="grow">
        <Charts/>

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