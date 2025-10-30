
import FortnightlyRenewals from "../charts/FortnightlyRenewals";
import { getNext14DaysData } from "@/server/queries/renewals";



export default async function FortnightlyRenewalsCard(){
    

    const renewals = await getNext14DaysData();




    return (
              <div>
                         <h2 className="text-center md:text-left">Upcoming Renewals</h2>
                         <p>Within 14 days</p>
                         <div className="my-2 flex items-center gap-2">
                         </div>
                         <FortnightlyRenewals data={renewals}/>
                     </div>
    )
}


 