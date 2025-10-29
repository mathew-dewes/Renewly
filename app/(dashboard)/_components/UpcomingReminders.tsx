import Button from "@/components/ui/Button";
import Link from "next/link";

export default function UpcomingReminders(){
    return (
        <div>
            <h2>Next due renewals</h2>
            <div className="mt-3 flex flex-col gap-2">
   <p>P3.211 Lawn Mower - Wellington - 5 days</p>
   <p>P3.211 Lawn Mower - Wellington - 5 days</p>
   <p>P3.211 Lawn Mower - Wellington - 5 days</p>
   <p>P3.211 Lawn Mower - Wellington - 5 days</p>

            </div>
            <div className="mt-5">
                <Link href={'/assets'}><Button text="View All"/></Link>
  
            </div>
       
         
        </div>
    )
}