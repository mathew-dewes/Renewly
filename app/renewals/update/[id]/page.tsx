import { renewalTypes } from "@/app/assets/variables/constants";
import Button from "@/components/ui/Button";
import { getRenewal } from "@/server/queries/renewals";

export default async function page({params}:
    {params: Promise<{id: string}>}
){

     const {id} = await params;

     const renewal = await getRenewal(id);

     if (!renewal) return <p>Renewal not found</p>


     
    return (
        <div>
            <h1>Update renewal</h1>
            <div className="mt-5">
                <p><span className="font-semibold">Asset:</span> {renewal?.asset.name}</p>
                <p><span className="font-semibold">Serial / REGO:</span> {renewal?.asset.serial}</p>
                <p><span className="font-semibold">Asset type:</span> {renewal?.asset.type}</p>
                <div className="mt-5">
      <p><span className="font-semibold">Renewal type:</span> {renewal?.renewalType}</p>
                {/* Add renewal status function here */}
                <p><span className="font-semibold">Renewal status:</span> Overdue</p>
                </div>
          
                <div className="mt-10 flex items-center gap-2">
 <p className="font-semibold">Renewal type:</p>
                       <select  className="border p-1 bg-white rounded cursor-pointer">
                
                          {renewalTypes?.map((type, key) => (
                            <option className="text-black" key={key} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                         
                      
                </div>
                <div className="mt-5 flex items-center gap-2">
                   <p className="font-semibold">Renewal date:</p>
        <input className="border p-2 rounded bg-white" type="date" />
          
                </div>
                <div className="mt-10">
      <Button text="Update"/>
                </div>
             
            
               
            </div>
            </div>
    )
}