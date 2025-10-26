export default function LoadingSpinner({text}:{text?: string}){
return (
    <div className="flex items-center">
      <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="ml-1">{text}</p>
    </div>
  );

}