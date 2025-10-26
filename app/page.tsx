
import { getSession } from "@/server/auth/auth";
import CallToAction from "./(home)/_components/CallToAction";
import Dashboard from "./(home)/_components/Dashboard";

export default async function page(){

  const session = await getSession();
  return(
    <div>
 
      {!session ? <CallToAction/> : <Dashboard/>}
 

      <div className="mt-10">
        <h1 className="text-center">Features</h1>
        <div className="flex flex-col lg:flex-row justify-center gap-30 mt-10">
          <div>
            <h2>Renewal Reminders</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sit explicabo cumque ea commodi maxime?</p>
          </div>
          <div>
            <h2>Asset Tracking</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sit explicabo cumque ea commodi maxime?</p>
          </div>
          <div>
            <h2>Renewal Reminders</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sit explicabo cumque ea commodi maxime?</p>
          </div>
     
          
        </div>
      </div>

    </div>

  )
}