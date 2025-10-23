import Button from "@/components/ui/Button";
import RenewalsTable from "./_components/RenewalsTable";

export default function page(){
    return (
      <div>
        <div>
            <h2>Renewals</h2>
            <div className="mt-5">
        <Button text="Add Renewal"/>
            </div>

        </div>
        <RenewalsTable/>
      </div>
    )
}