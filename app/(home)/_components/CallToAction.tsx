import Button from "@/components/ui/Button";
import Link from "next/link";

export default function CallToAction(){
    return (
              <div className="text-center mt-30">
<h2>Renewly</h2>
<p className="mt-2">Stay ahead. Stay organised. Never miss a renewal.</p>
<div className="mt-5">
  <div className="mt-5 flex justify-center gap-5">
    <Link href={'/auth/login'}><Button text="Login"/></Link>

  </div>

</div>
      </div>
    )
}