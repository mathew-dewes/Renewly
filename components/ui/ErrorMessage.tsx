export default function ErrorMessage({message}:
    {message?: string }
){
    return <p className="my-2 text-red-500 text-sm font-normal">{message}</p>
     
}