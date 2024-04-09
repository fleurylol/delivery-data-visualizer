'use client';
import React, { useState } from 'react';

const Upload = () => {
  const [data, setData] = useState([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result;
      if (typeof content !== 'string') return;

      const data = JSON.parse(content);
      const addresses = data.map((item: any) => item.way_point1__address);
      setData(addresses);
    };

    reader.readAsText(file);
  };
  return (
    <div>
      <input type="file" id="file" accept=".json" onChange={handleFileChange} />
      {data}
    </div>
  );
};

export default Upload;
