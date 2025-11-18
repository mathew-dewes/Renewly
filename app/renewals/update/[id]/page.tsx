
import { renewalStatusStyle, statusLabel } from "@/server/queries/helper";
import { getRenewal } from "@/server/queries/renewals";
import UpdateRenewalForm from "./_components/UpdateRenewalForm";
import BreadCrumb from "@/components/ui/BreadCrumb";


export default async function page({ params }:
  { params: Promise<{ id: string }> }
) {

  const { id } = await params;

  const renewal = await getRenewal(id);

  if (!renewal) return <p>Renewal not found</p>


  return (


      <div>
        
                         <div className="flex gap-4">
                                             <BreadCrumb route="Renewals" href="/renewals" active={false}/>
                                             <BreadCrumb route={"Update - " + renewal.asset.plantNumber} href="/renewals" active={true}/>
                                      
                                           </div>
    <div className="bg-white border rounded border-gray-200 shadow-lg px-5 py-8 text-sm w-full md:w-120 mt-3">
        <h2>{renewal?.asset.name}</h2>
        <div className="flex flex-col gap-1 mt-2">

        <p><span className="font-semibold">Serial / REGO:</span> {renewal?.asset.serial}</p>
        <p><span className="font-semibold">Asset type:</span> {renewal?.asset.type}</p>
        </div>
 
        <div className="mt-5">
          <p><span className="font-semibold">Renewal type:</span> {renewal?.renewalType}</p>
          <div className="flex items-center gap-2">
                      <p className="font-semibold">Renewal Status</p>
            <div style={{ backgroundColor: renewalStatusStyle(renewal.renewalDate) }} className="h-2 w-2 rounded-full" />
            <p>{statusLabel(renewal.renewalDate).label}</p>
          </div>
        </div>

  
  
          <UpdateRenewalForm assetId={renewal.id} renewalDate={renewal.renewalDate}/>
      
      </div>
      </div>
      
  
  
  )
}
