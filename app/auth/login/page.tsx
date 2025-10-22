import LoginForm from "./_components/LoginForm";

export default function loginPage(){
    return(
        <div>
            <div className="text-center mt-20">
                <h2>Login</h2>
            <p className="mt-2">Welcome to Renewly! Keep track of your assets renewals today</p>
            </div>

            <LoginForm/>
        </div>
    )
}