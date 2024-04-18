"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MonthPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDelivery = async () => {
      const delivery = await axios.get("/api/delivery");
      setData(delivery.data);
    };
    fetchDelivery();
  }, []);
  return (
    <div>
      <h1 className="text-xl font-bold">Delivery Data</h1>
      <table>
        <thead>
          <tr>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((delivery) => (
            <tr key={delivery.address}>
              <td className="pr-2">{delivery.address}</td>
              <td className="pr-2">{delivery.jan_total}</td>
              <td className="pr-2">{delivery.feb_total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthPage;
