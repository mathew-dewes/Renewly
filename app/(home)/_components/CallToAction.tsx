import Button from "@/components/ui/Button";
import Link from "next/link";

export default function CallToAction(){
    return (
              <div className="text-center mt-30">
<h2>Welcome to Renewly!</h2>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero odio consequuntur quisquam facilis, sed iure unde beatae accusantium aperiam? Deleniti.</p>
<div className="mt-5">
  <p>Login to proceed</p>
  <div className="mt-2 flex justify-center gap-5">
    <Link href={'/auth/login'}><Button text="Login"/></Link>
    <Link href={'/auth/register'}><Button text="Register"/></Link>
  </div>

</div>
      </div>
    )
}