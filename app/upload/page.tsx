"use client";
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import MonthSelect from "./MonthSelect";
import { Button } from "@/components/ui/button";

const Upload = () => {
  const [data, setData] = useState<{ [key: string]: number } | null>(null);
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
      {/* we gonna need to use context for this hoe */}
      <div className="m-3 w-[550px] rounded-lg border border-black bg-gray-300 p-3">
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
          onClick={() => {
            console.log(data);
          }}
          className="mt-2 w-full"
        >
          Submit Data
        </Button>
      </div>
    </>
  );
};

export default Upload;

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
