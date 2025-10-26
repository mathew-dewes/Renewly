import { ArrowLeftToLine } from "lucide-react";
import Link from "next/link";

export default function GoBack({text, href}:
    {text: string, href: string}
){
    return (
        <div className="flex gap-1 mt-5">
                  <ArrowLeftToLine />
                  <Link href={href}>{text}</Link>
     
         
           
            </div>
    )
}