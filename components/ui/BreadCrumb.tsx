import Link from "next/link"

export default function BreadCrumb({route, href, active = false}:
    {route: string ,href: string, active?: boolean}
){

return <nav>
    <Link className={`${active ? "pointer-events-none" : ""}`} href={href}>
    <p className={`${active ? "font-semibold" : ""}`}>{route}</p></Link>
  
</nav>

}