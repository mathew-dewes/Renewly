"use client"

import { useState } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { RenewalType } from "@prisma/client";



export default function RenewalTypeDropDown({type}:
  {type: RenewalType | null}
) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const renewals = Object.values(RenewalType);

    const atPath = (path: string) =>{
    return searchParams.get("type") === path
  }


  const updateTypeParam = (type: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (type === "ALL") {
      params.delete("type"); 
    } else {
      params.set("type", type); 
    }
    params.set("page", "1");

    router.push(`${pathname}?${params.toString()}`);
    setIsOpen(false); 
  };

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-gray-500 text-light-500 rounded-lg cursor-pointer hover:bg-gray-600 text-sm px-3 py-2 text-center inline-flex items-center"
        type="button"
      >
       {!type ? "ALL TYPES" : type}
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
             <li onClick={() => updateTypeParam("ALL")}  className={`block px-4 uppercase rounded-lg py-2  font-base font-medium
             ${!searchParams.get("type") ? "bg-blue-accent-500 text-white" : "hover:bg-blue-accent-500 hover:text-white cursor-pointer"}`}>
                  ALL TYPES
                </li>
            {renewals.map((type, key) => {
    
              return (
                <li onClick={() => updateTypeParam(type)} className={`block px-4 uppercase rounded-lg py-2  font-base font-medium
                ${atPath(type) ? "bg-blue-accent-500 text-white" : "hover:bg-blue-accent-500 hover:text-white cursor-pointer"}`} key={key}>
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