import prisma from "@/server/db/prisma"


export default async function Dashboard(){

  const assetCount = await prisma.asset.count();


    
    return (
        <div>
                 <h1 className="text-center md:text-left">Dashboard</h1>
         <div className="flex flex-col md:flex-row gap-5 mt-5 text-center md:text-left">

        <div className="bg-gray-50 p-5 rounded-xl w-full">
  <h2>Inventory</h2>
  <ul className="mt-3">
      <p>Assets: {assetCount}</p>
      <p>Equipment: 3</p>
      <p>Machinery: 3</p>
      <p>Vehicles: 3</p>
  </ul>


        </div>
        <div className="bg-gray-50 p-5 rounded-xl w-full">
  <div>
    <h2>Renewals</h2>
    <ul>
      <p>Upcoming:</p>
      <p>Due soon:</p>
      <p>Overdue:</p>
    </ul>
      <div className="mt-5">
    <h2>Upcoming renewals:</h2>
    <ul>
      <p> P3.551 Lawn mower - Servicing in 3 days</p>
      <p> P3.551 Lawn mower - Servicing in 3 days</p>
      <p> P3.551 Lawn mower - Servicing in 3 days</p>
    </ul>
  </div>
  </div>

        </div>
       
   
      
    
      </div>
       <div className="bg-gray-50 p-5 rounded-xl w-full md:w-3/4 mt-5">
  <div>
    <h2>Renewals</h2>
    <ul>
      <p>Upcoming:</p>
      <p>Due soon:</p>
      <p>Overdue:</p>
    </ul>
      <div className="mt-5">
    <h2>Upcoming renewals:</h2>
    <ul>
      <p> P3.551 Lawn mower - Servicing in 3 days</p>
      <p> P3.551 Lawn mower - Servicing in 3 days</p>
      <p> P3.551 Lawn mower - Servicing in 3 days</p>
    </ul>
  </div>
  </div>

        </div>
        </div>

    )
}