import Image from "next/image";
import Link from "next/link";

export default function FilterTab({filters, routeTo}:
    {filters: string, routeTo: string}
){
    return                 <p className={`${filters == undefined ? "invisible" : "visible"} bg-green-400 text-sm w-fit px-3 py-2 text-dark-500 font-medium rounded-lg flex items-center gap-2 capitalize`}>
                    {filters || "clear"}
                    <span className="font-thin cursor-pointer"><Link
                        href={routeTo}

                    ><Image src={'/close.png'} alt="close" height={12} width={12}/></Link></span></p>
}