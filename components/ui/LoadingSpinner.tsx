export default function LoadingSpinner({text}:{text?: string}){
return (
    <div className="flex flex-col items-center justify-center gap-1">
      <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
      <p>{text}</p>
    </div>
  );

}