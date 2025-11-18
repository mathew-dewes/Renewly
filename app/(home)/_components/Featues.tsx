"use client"

import { MessageCircleMore, NotebookPen } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Features(){
          const pathname = usePathname();
              if ( !pathname.startsWith('/auth')) return
    return  <div className="mt-20 md:mt-30">
             <h2 className="text-center">Features</h2>
      <div className="grid md:grid-cols-2 gap-5  md:gap-10 md:mx-30 mt-5">

             <div className="bg-white border rounded border-gray-200 shadow-lg px-5 py-8 text-sm  m-auto mt-2 flex flex-col gap-2 items-center w-full h-full">
              <div className="flex items-center gap-1.5">
                <NotebookPen/>
         <p className="font-bold">Renewal Forcasting</p>
              </div>
       <p>Keep track of your asset renewals through our dashboard which shares insights on upcoming renewals by type, location and date</p>
          
   
             

            </div>
                <div className="bg-white border rounded border-gray-200 shadow-lg px-5 py-8 text-sm  m-auto mt-2 flex flex-col gap-2 items-center w-full h-full">
              <div className="flex items-center gap-1.5">
                <MessageCircleMore/>
            <p className="font-bold">Compliance overview</p>
              </div>

            <p>Get a full overview of the compliance of all assets through our filter systems which lets you isolate areas of concern</p>
    
   
             

            </div>
      
         

        
      </div>
     
          
        </div>
}