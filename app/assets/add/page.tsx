
import AssetForm from "./_components/AssetForm";
import BreadCrumb from "@/components/ui/BreadCrumb";

export default function page(){
    return (
        <div>
            <div className="flex gap-4">
                         <BreadCrumb route="Assets" href="/assets" active={false}/>
                         <BreadCrumb route="Add" href="/assets/add" active={true}/>
                       </div>
            <h2 className="mt-5">Create Asset</h2>
            <AssetForm/>
        </div>
    )
}