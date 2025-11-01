import { renewalTypes } from "@/app/assets/variables/constants";
import Button from "@/components/ui/Button";
import { getRenewal } from "@/server/queries/renewals";

export default async function page({params}:
    {params: Promise<{id: string}>}
){

     const {id} = await params;

     const renewal = await getRenewal(id);


     
    return (
        <div>
            <h1>Update renewal page</h1>
            <div className="mt-2">
                <p>Asset: {renewal?.asset.name}</p>
                <p>Serial / REGO: {renewal?.asset.serial}</p>
                <p>Type: {renewal?.asset.type}</p>
                <p>Renewal type: {renewal?.renewalType}</p>
                {/* Add renewal status function here */}
                <p>Renewal status: Overdue</p>
                <div className="mt-5">
 <p>Renewal type:</p>
                       <select  className="border p-1 bg-white rounded cursor-pointer mt-2">
                
                          {renewalTypes?.map((type, key) => (
                            <option className="text-black" key={key} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                         
                      
                </div>
                     <input className="border mt-5 p-2 rounded bg-white" type="date" />
                <div className="mt-10">
      <Button text="Update"/>
                </div>
            
               
            </div>
            </div>
    )
}