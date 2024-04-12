"use client";
import React, { useContext, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MonthContext } from "@/lib/Context";

const MonthSelect = () => {
  const [selectedMonth, setSelectedMonth] = useContext(MonthContext);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Popover>
      <PopoverTrigger className="h-10 w-36 rounded-md border-2 border-black bg-slate-200">
        {selectedMonth}
      </PopoverTrigger>
      <PopoverContent className="w-fit">
        <ul className="grid grid-cols-3 rounded-md border border-gray-200 bg-white shadow-lg">
          {months.map((month) => (
            <li
              key={month}
              onClick={() => setSelectedMonth(month)}
              className="cursor-pointer rounded border p-3 text-center hover:bg-gray-100"
            >
              {month}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default MonthSelect;
