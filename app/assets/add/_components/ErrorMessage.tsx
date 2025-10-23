export default function ErrorMessage({message}:
    {message?: string }
){
    return <p className="my-3 text-red-500 text-sm font-semibold">{message}</p>
     
}