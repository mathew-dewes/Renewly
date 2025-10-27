

import AssetMetrics from "@/app/(dashboard)/_components/AssetMetrics";


export default function Dashboard(){

    
    return (
        <div>
                 <h1 className="text-center md:text-left">Dashboard</h1>
   
<div className="flex gap-10 flex-wrap">
 
<AssetMetrics/>


<div className="bg-gray-50 p-5 rounded-xl mt-10">
<h1>Renewal Health</h1>
<p>Upcoming renewals</p>
<ul>
  <li>Lawn Mower</li>
  <li>Lawn Mower</li>
  <li>Lawn Mower</li>
</ul>
</div>
</div>


       
   
      
    
      
    
        </div>

    )
}