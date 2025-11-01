"use client"

import { useState } from "react";

import { assetTypes } from "@/app/assets/variables/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AssetType } from "@prisma/client";


export default function AssetTypeFilter({filter}:
  {filter: AssetType}
) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
    const searchParams = useSearchParams();


  const updateTypeParam = (type: string) => {
    setIsOpen(false);
    const params = new URLSearchParams(searchParams.toString());
      params.set("type", type);
       const newUrl = `${pathname}?${params.toString()}`;
   router.replace(newUrl,  { scroll: false });
    
  };

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="relative inline-block text-left mt-3">
      <button
        onClick={toggleDropdown}
        className="bg-blue-accent-500 text-sm text-light-500 rounded-lg cursor-pointer hover:bg-blue-900  px-3 py-2 text-center inline-flex items-center"
        type="button"
      >
        {filter}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 w-fit p-2 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm z-10">
          <ul className="py-2 text-sm font-semibold text-dark-500">

            {assetTypes.map((type, key) => {

              return (
                <li onClick={() => updateTypeParam(type)} 
                          className={`block px-4 uppercase rounded-lg py-2  font-base font-medium  
                ${type === filter ? "bg-blue-accent-500 text-white" : "hover:bg-blue-accent-500 hover:text-white cursor-pointer"}`} key={key}>
                  {type}
                </li>
              )
            })}




          </ul>
        </div>
      )}
    </div>
  )
}