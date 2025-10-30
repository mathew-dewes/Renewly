"use client"

import { useState } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { timeFrames } from "@/app/assets/variables/constants";
import { TimeFrame } from "@/server/validation/types";


export default function DateFilter({filter}:
  {filter: TimeFrame}
) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();


  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.replace(`${pathname}?${params.toString()}`);
      setIsOpen(false);
    
  };

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="relative inline-block text-left mt-3">
      <button
        onClick={toggleDropdown}
        className="bg-blue-accent-500 text-light-500 rounded-lg cursor-pointer hover:bg-blue-900  px-3 py-2 text-center inline-flex items-center"
        type="button"
      >
        <p className="text-sm uppercase">{filter}</p>
 
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

            {timeFrames.map((type, key) => {

    

              return (
                <li  key={key} 
                onClick={() => updateParam("range", type)}
                className={`block px-4 uppercase rounded-lg py-2  font-base font-medium  
                ${type === filter ? "bg-blue-accent-500 text-white" : "hover:bg-blue-accent-500 hover:text-white cursor-pointer"}`}>
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