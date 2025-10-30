import RenewalPie from "../charts/RenewalPie";
import ComplianceLegend from "../ComplianceLegend";


export default function ComplianceCard() {
    return (
        <div className="flex gap-2 flex-col sm:flex-row">
            <div>
                <h2>Compliance</h2>
                <p>Lorem ipsum dolor sit amet.</p>
  <ComplianceLegend/>
            


                <RenewalPie />
            </div>





        </div>
    )
}