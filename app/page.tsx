import Link from "next/link";
import Button from "./components/ui/Button";

export default function page(){
  return(
    <div>
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
      <div className="mt-50">
        <h1 className="text-center">Features</h1>
        <div className="flex flex-col lg:flex-row justify-center gap-30 mt-10">
          <div>
            <h2>Renewal Reminders</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sit explicabo cumque ea commodi maxime?</p>
          </div>
          <div>
            <h2>Asset Tracking</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sit explicabo cumque ea commodi maxime?</p>
          </div>
          <div>
            <h2>Renewal Reminders</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sit explicabo cumque ea commodi maxime?</p>
          </div>
     
          
        </div>
      </div>

    </div>

  )
}