import Link from "next/link";

export default function FilterReseter({href}:
    { href: string}
){
    return (
           <div>
                <Link href={href}><button className="bg-red-400 hover:bg-red-600 text-light-500 rounded-lg cursor-pointer  text-sm px-3 py-2 text-center inline-flex items-center">
                    Clear filters</button>
  </Link>
          </div>
    )
}