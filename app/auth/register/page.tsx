import RegisterForm from "./_components/RegisterForm";


export default function RegisterPage(){
    return(
        <div>
            <div className="text-center mt-20">
                <h2>Register</h2>
            <p className="mt-2">Welcome to Renewly! Keep track of your assets renewals today</p>
            </div>

            <RegisterForm/>
        </div>
    )
}