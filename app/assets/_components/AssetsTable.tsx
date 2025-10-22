
import React from "react"



export default function AssetsTable(){



   
    return (

                 <table className="w-full mt-5 hidden md:table">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Plant no</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Asset</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden lg:table-cell">Desc</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase hidden lg:table-cell">Serial</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-dark-500 uppercase">Renewal type</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium textdark-500 uppercase">Renewal date</th>
                                </tr>
                            </thead>


    
                 
                    <tbody className="bg-white divide-y divide-gray-200">
                         
                                       <React.Fragment >
                                           <tr className="hover:bg-gray-50">
                   
                   
                                               <td className="px-6 py-4 text-sm text-dark-500">P1.001</td>
                                               <td className="px-6 py-4 text-sm text-dark-500 hidden lg:table-cell">Lawn Mower</td>
                                               <td className="px-6 py-4 text-sm text-dark-500">150cc masport</td>
                                               <td className="px-6 py-4 text-sm text-dark-500 hidden lg:table-cell">3455889</td>
                                               <td className="px-6 py-4 text-sm text-dark-500">Service</td>
                                               <td className="px-6 py-4 text-sm text-dark-500">31/01/26</td>
                              
                               
                                                
                   
                   
                   
                   
                   
                                           </tr>
                    
                         
                   
                                       </React.Fragment>
                   
                   
                   
                   
                   
                   
                           </tbody>
                           
  
 
               
                        </table>
           
    )
}