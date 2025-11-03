"use client"

import { useState } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Locations } from "@/app/assets/variables/constants";
import { Location } from "@prisma/client";


export default function LocationDropDown({location}:
  {location: Location | null}
) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();


  const atPath = (path: string) =>{
    return searchParams.get("location") === path
  }



  const updateTypeParam = (location: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (location === "ALL") {
      params.delete("location"); 
    } else {
      params.set("location", location); 
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
        {!location ? "All REGIONS" : location}
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
             <li onClick={() => updateTypeParam("ALL")} 
             className={`block px-4 uppercase rounded-lg py-2  font-base font-medium
             ${!searchParams.get("location") ? "bg-blue-accent-500 text-white" : "hover:bg-blue-accent-500 hover:text-white cursor-pointer"}`}>
                  All REGIONS
                </li>
            {Locations.map((location, key) => {
    
              return (
                <li onClick={() => updateTypeParam(location)} 
                className={`block px-4 uppercase rounded-lg py-2  font-base font-medium
                ${atPath(location) ? "bg-blue-accent-500 text-white" : "hover:bg-blue-accent-500 hover:text-white cursor-pointer"}`} key={key}>
                  {location}
                </li>
              )
            })}




          </ul>
        </div>
      )}
    </div>
  )
}