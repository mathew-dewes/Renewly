import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    baseUrl: string;
    searchParams: Record<string, string>;
}

export default function Pagination({ currentPage, totalPages, baseUrl, searchParams }: PaginationProps) {
    if (totalPages <= 1) return null;


const getPageUrl = (page: number) => {
  const params = new URLSearchParams(searchParams as Record<string, string>);
  params.set("page", String(page));

  return `${baseUrl}?${params.toString()}`;
};

    const getVisablePages = () =>{
        const delta = 2;
        const range = []
        const rangeWithDots = [];

        for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i ++){

            range.push(i);
    }

    if (currentPage - delta > 2){
        rangeWithDots.push(1, "...")
    } else{
        rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

        if (currentPage + delta < totalPages -1){
        rangeWithDots.push("...", totalPages)
    } else{
        rangeWithDots.push(totalPages);
    }

    return rangeWithDots;

};

const visablePages = getVisablePages();
    return (
        <nav className="flex items-center w-full justify-center gap-1">
            <Link
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${currentPage <= 1 ? "text-gray-400 cursor-not-allowed bg-gray-100" : "text-gray-700 hover:bg-gray-100 bg-white border border-gray-300"}`}
                href={getPageUrl(currentPage - 1)}
                aria-disabled={currentPage <= 1}
            ><ChevronLeft /><p className="hidden md:block">Previous</p></Link>

            {visablePages.map((page, key)=>{

                if (page === "..."){
                    return <span key={key} className="px-2 py-2 text-sm text-gray-500">...</span>
                }

                const pageNumber = page as number;
                const isCurrentPage = pageNumber === currentPage;

                return (
                    <Link key={key} href={getPageUrl(pageNumber)} className={`px-3 py-2 text-sm font-medium rounded-lg 
                        ${isCurrentPage ? "bg-blue-accent-500 text-white" : 
                            "text-gray-700 hover:bg-gray-100 bg-white border border-gray-300"}`}>{pageNumber}</Link>
                )
            })}
            <Link   href={getPageUrl(currentPage + 1)}
                className={`flex items-center px-2 py-2 text-sm font-medium rounded-lg ${currentPage >= totalPages ? "text-gray-400 cursor-not-allowed bg-gray-100" : "text-gray-700 hover:bg-gray-100 bg-white border border-gray-300"}`}
                aria-disabled={currentPage >= totalPages}><ChevronRight /><p className="hidden md:block">Next</p></Link>
        </nav>
    )
}