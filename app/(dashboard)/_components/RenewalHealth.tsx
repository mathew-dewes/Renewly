import RenewalPie from "./charts/RenewalPie";

export default function RenewalHealth(){
    return (
        <div className="flex gap-2 flex-col sm:flex-row">
            <div>
        <h2>Renewal Health</h2>
            <p>Lorem ipsum dolor sit amet.</p>

 
         <RenewalPie/>
            </div>
            <div className="sm:mt-20">
                <p className="font-semibold">Renewals</p>
                <div className="flex flex-col gap-2 mt-2">
      <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#00C49F]">

                    </div>
                              <p>Compliant: 11</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#FFBB28]">

                    </div>
                              <p>Due soon: 11</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#ff1a1a]">

                    </div>
                              <p>Overdue: 11</p>
                </div>
                </div>
          
           
      
               
            
       
            </div>
     
      
       
   
        </div>
    )
}