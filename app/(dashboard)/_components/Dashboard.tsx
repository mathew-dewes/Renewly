
import Locations from "./Locations";
import RenewalForcast from "./forcast/RenewalForcast";
import RenewalHealth from "./RenewalHealth";
import Summary from "./Summary";
import UpcomingReminders from "./UpcomingReminders";



export default async function Dashboard(){


      
    return (
        <>
<section className="grid gap-4 px-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
  <div className="p-8 h-[500px] md:h-[350px] bg-gray-50 shadow rounded">
    <RenewalHealth/>
  </div>
    <div className="p-8 h-[350px] bg-gray-50 shadow rounded lg:col-span-2 2xl:col-span-1">
    <Summary/>
  </div>
  <div className="p-8 h-[350px] bg-gray-50 shadow rounded">
    <UpcomingReminders/>
  </div>

</section>
        <section className="grid gap-4 px-4 grid-cols-1 2xl:grid-cols-3 mt-5">
            <div className="p-8 h-[500px] md:h-[350px] bg-gray-50 shadow rounded md:flex-row gap-10 col-span-2">
        <RenewalForcast/>

  </div>
   
    
    <div className="p-8 h-[350px] bg-gray-50 shadow rounded col-span-2 lg:col-span-1">
      <Locations/>
    </div>
     
        
       
  
       
        </section>
        </>
    )
}
