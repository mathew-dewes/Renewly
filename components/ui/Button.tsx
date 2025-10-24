export default function Button({text = "Button", danger = false}:{text?:string, danger?:boolean}){

    const color = danger ? "bg-red-400 hover:red-800" : "bg-blue-accent-500 hover:bg-blue-900"
    return <button className={`${color} text-light-500 px-8 py-2 rounded-lg cursor-pointer hover:font-semibold`}>{text}</button>
}