
import React from "react"



export default function RenewalsTable(){



   
    return (

                 <table className="w-full mt-5 hidden md:table">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Plant no</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Asset</th>
        
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden lg:table-cell">Renewal Type</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden lg:table-cell">Location</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden lg:table-cell">Expiry</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden lg:table-cell"></th>
                          
                                </tr>
                            </thead>


    
                 
                    <tbody className="bg-white divide-y divide-gray-200">
                         
                           
                                           <tr className="hover:bg-gray-50">
                   
                   
                                               <td className="px-6 py-4 text-sm text-dark-500">P1.001</td>
                                               <td className="px-6 py-4 text-sm text-dark-500 hidden lg:table-cell">
                                                <div className="flex gap-3 items-center">
                                                    <div className="bg-black w-10 h-10 rounded-full"></div>
                                            <div>Lawn Mover</div>
                                                </div>
                                        
                                               </td>
                     
                
                                               <td className="px-6 py-4 text-sm text-dark-500 hidden lg:table-cell">Machinery</td>
                                               <td className="px-6 py-4 text-sm text-dark-500 hidden lg:table-cell">AA2</td>
                                               <td className="px-6 py-4 text-sm text-dark-500 hidden lg:table-cell">12/12/2025</td>
                                               <td className="px-6 py-4 text-sm text-dark-500 hidden lg:table-cell">Edit</td>
                       
                              
                               
                                                
                   
                   
                   
                   
                   
                                           </tr>
                    
                         
                   
                                  
                   
                   
                   
                   
                   
                   
                           </tbody>
                           
  
 
               
                        </table>
           
    )
}