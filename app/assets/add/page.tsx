import GoBack from "@/components/ui/GoBack";
import AssetForm from "./_components/AssetForm";

export default function page(){
    return (
        <div>
            <GoBack text="Assets" href="/assets"/>
            <h2 className="mt-5">Create Asset</h2>
            <AssetForm/>
        </div>
    )
}