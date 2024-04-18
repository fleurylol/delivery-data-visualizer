"use client";
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import MonthSelect from "./MonthSelect";
import { Button } from "@/components/ui/button";
import { MonthContext } from "@/lib/Context";
import axios from "axios";

const UploadButton = () => {
  const [data, setData] = useState<{ [key: string]: number } | null>(null);
  const [selectedMonth, setSelectedMonth] = useState("Select Month");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result;
      if (typeof content !== "string") return;

      const data = JSON.parse(content);
      const addresses = data.map((item: any) => item.way_point1__address);
      const countedAddresses = countAddress(addresses);
      setData(countedAddresses);
    };

    reader.readAsText(file);
  };
  return (
    <>
      <MonthContext.Provider value={[selectedMonth, setSelectedMonth]}>
        <div className="w-[550px] rounded-lg border border-black bg-gray-300 p-3">
          <div className="flex items-center justify-between px-2">
            <input
              type="file"
              id="file"
              accept=".json"
              className="file:mr-2 file:h-10 file:w-28 file:cursor-pointer file:rounded-md file:bg-slate-200 file:bg-transparent"
              onChange={handleFileChange}
            />
            <MonthSelect />
          </div>
          {data && (
            <>
              <h1 className="text-center text-lg font-bold">Data Preview</h1>
              <div className="border-2 border-black">
                <ScrollArea className="h-[700px] w-fit rounded-md border bg-slate-200 p-4">
                  <table>
                    <thead>
                      <tr>
                        <th>Address</th>
                        <th>Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(data).map(([key, value]) => (
                        <tr key={key}>
                          <td className="pr-2">{key}</td>
                          <td className="text-center">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </ScrollArea>
              </div>
            </>
          )}
          <Button
            onClick={() => handleSubmit(data!, selectedMonth)}
            className="mt-2 w-full"
          >
            Submit Data
          </Button>
        </div>
      </MonthContext.Provider>
    </>
  );
};

export default UploadButton;

const countAddress = (address: string[]) => {
  const addressCounted = address.reduce<{ [key: string]: number }>(
    (acc, curr) => {
      if (curr in acc) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }
      return acc;
    },
    {},
  );

  return addressCounted;
};

const handleSubmit = async (data: { [key: string]: number }, month: string) => {
  try {
    for (const [address, count] of Object.entries(data)) {
      const checkAddress = await axios.get("api/upload", {
        params: { address },
      });
      if (!checkAddress) {
        console.error("Address not found: ", address);
        continue;
      }
      await axios.patch("api/upload", { address, count, month });
      await axios.patch("api/month", { month });
    }
  } catch (error) {
    console.error("Error saving data: ", error);
  }
};
