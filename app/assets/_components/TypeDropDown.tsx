"use client"

import { useState } from "react";
import { assetTypes } from "../variables/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


export default function TypeDropDown({ filter = "All Assets" }:
  { filter: string }
) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();


  const updateTypeParam = (type: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (type === "ALL") {
      params.delete("type"); // remove type if "All Assets"
    } else {
      params.set("type", type); // add or replace type
    }
      params.set("page", "1");

    router.push(`${pathname}?${params.toString()}`);
    setIsOpen(false); // close dropdown after selection
  };

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-gray-500 text-light-500 rounded-lg cursor-pointer hover:bg-gray-600 text-sm px-3 py-2 text-center inline-flex items-center"
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
                <li onClick={() => updateTypeParam(type)} className="block px-4 rounded-lg py-2 hover:bg-gray-100 font-base font-medium dark:hover:bg-gray-600 hover:text-white" key={key}>
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