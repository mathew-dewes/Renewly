"use client"


import { useState } from "react";
import RenewalsChart from "../charts/RenewalsChart";
import DateFilter from "../DateFilter";

const today = new Date();

// --- Quarterly Data (9 weeks) ---
const quarterlyData = Array.from({ length: 9 }).map((_, i) => {
  const date = new Date(today);
  date.setDate(today.getDate() + i * 7); // each entry = one week apart
  return {
    date: date.getTime(),
    equipment: Math.floor(Math.random() * 6),
    machinery: Math.floor(Math.random() * 6),
    vehicles: Math.floor(Math.random() * 6),
  };
});

// --- Yearly Data (12 months) ---
const yearlyData = Array.from({ length: 12 }).map((_, i) => {
  const date = new Date(today.getFullYear(), today.getMonth() + i, 1); // first day of each month
  return {
    date: date.getTime(),
    equipment: Math.floor(Math.random() * 6),
    machinery: Math.floor(Math.random() * 6),
    vehicles: Math.floor(Math.random() * 6),
  };
});

// Generate 28 days of mock data for equipment, machinery, and vehicles
const monthlyData = Array.from({ length: 28 }).map((_, i) => {
  const date = new Date(today);
  date.setDate(today.getDate() + i);
  return {
    date: date.getTime(),
    equipment: Math.floor(Math.random() * 6),
    machinery: Math.floor(Math.random() * 6),
    vehicles: Math.floor(Math.random() * 6),
  };
});



export default function RenewalForcast(){
            const [filter, setFilter] = useState("month")
    
      const dataToShow =
        filter === "month" ? monthlyData : filter === "quarter" ? quarterlyData : yearlyData;
    
    return (
        <div className="w-full">
            <h2>Monthly Renewals</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="my-2 flex items-center gap-2">
            </div>
            <DateFilter filter={filter} setFilter={setFilter}/>
            <RenewalsChart data={dataToShow} filter={filter} />
        </div>
    )
}