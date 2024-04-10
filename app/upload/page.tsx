'use client';
import React, { useState } from 'react';

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
      <input type="file" id="file" accept=".json" onChange={handleFileChange} />
      {data && (
        <div>
          <h2>Address Count</h2>
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
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
