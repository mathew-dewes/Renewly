import prisma from "@/server/db/prisma"

export default async function Dashboard(){

    const assets = await prisma.asset.count();

    console.log(assets);
    
    return (
        <div>
                 <h1>Dashboard:</h1>
         <div className="flex gap-5 mt-5">
        <div className="bg-gray-50 p-8 rounded-xl">
  <h2>Assets: {assets}</h2>
  <ul>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
  </ul>

        </div>
        <div className="bg-gray-50 p-8 rounded-xl">
  <h2>Renewals: 2</h2>
  <ul>
      <p>Overdue: 1</p>
      <p>Due soon: 4</p>
  </ul>
  <div>
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