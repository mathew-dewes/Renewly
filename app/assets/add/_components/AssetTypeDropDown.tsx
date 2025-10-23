"use client"

import { useState } from "react";
import { assetTypes } from "../../variables/constants";


export default function AssetTypeDropDown(){

      const [isOpen, setIsOpen] = useState(false);
      

  const toggleDropdown = () => setIsOpen(!isOpen);
    return (
   <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-blue-accent-500 text-light-500 rounded-lg cursor-pointer hover:bg-blue-900 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Type
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
            {assetTypes.map((type, key)=>{
                return (
                     <li key={key}>
              <a
                href={"/assets?type=" + type.toLocaleLowerCase()} 
                className="block px-4 rounded-lg py-2 hover:bg-gray-100 font-base font-medium dark:hover:bg-gray-600 hover:text-white"
              >
                {type}
              </a>
            </li>
                )
            })}
   
   

 
          </ul>
        </div>
      )}
    </div>
    )
}