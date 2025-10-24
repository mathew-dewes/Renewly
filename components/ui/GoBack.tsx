import { ArrowLeftToLine } from "lucide-react";

export default function GoBack({text}:
    {text: string}
){
    return (
        <div className="flex gap-1">
                  <ArrowLeftToLine />
                <button className="">{text}</button>
           
            </div>
    )
}