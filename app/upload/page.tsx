'use client';
import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const Upload = () => {
  const [data, setData] = useState<{ [key: string]: number } | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result;
      if (typeof content !== 'string') return;

      const data = JSON.parse(content);
      const addresses = data.map((item: any) => item.way_point1__address);
      const countedAddresses = countAddress(addresses);
      setData(countedAddresses);
    };

    reader.readAsText(file);
  };
  return (
    <div>
      <input
        type="file"
        id="file"
        accept=".json"
        className="file:bg-green-600 file:text-white file:px-4 file:py-2 file:cursor-pointer file:mt-4 file:mb-4 file:ml-4 file:mr-4 file:font-bold file:shadow-lg file:outline-none file:rounded-md file:hover:bg-green-700 file:hover:transition file:duration-300 file:ease-in-out file:transform file:hover:scale-105 file:active:bg-green-700 file:active:scale-100 file:focus:outline-none file:focus:scale-100 file:focus:bg-green-700"
        onChange={handleFileChange}
      />
      {data && (
        <div>
          <ScrollArea className="h-[700px] w-fit rounded-md border p-4">
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
      )}
    </div>
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
    {}
  );

  return addressCounted;
};
