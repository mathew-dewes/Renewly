import { SummaryLocations } from "./charts/SummaryLocations";

export default function Summary(){
    return (
        <div>
            <h2>Monthly Summary</h2>

            <div className="mt-2">
                <p>Renewals: 20</p>
                <div className="h-30 mt-5">
                    <p className="font-semibold">Renewals by type and location</p>
     
          
        <SummaryLocations/>
           
          
                </div>
            </div>
        </div>
    )
}