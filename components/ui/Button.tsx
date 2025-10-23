export default function Button({text = "Button"}:{text?:string}){
    return <button className="bg-blue-accent-500 text-light-500 px-8 py-2 rounded-lg cursor-pointer hover:bg-blue-900 hover:font-semibold">{text}</button>
}