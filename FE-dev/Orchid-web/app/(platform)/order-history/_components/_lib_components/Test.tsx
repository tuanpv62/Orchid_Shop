"use client";

import * as React from "react";
import Fillter_Table from "./_component_fillter/Fillter_Table";

interface Order {
  id: string;
  amount: number;
  status: string;
  email: string;
}

fetch("dataOrder.json")
  .then((response) => response.json())
  .then((data: Order[]) => {
    const tableBody = document.getElementById("table-body");
    if (tableBody) {
      tableBody.innerHTML = "";
      data.forEach((order) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td class="border px-4 py-2">Image</td>
                    <td class="border px-4 py-2">${order.id}</td>
                    <td class="border px-4 py-2">${order.amount}</td>
                    <td class="border px-4 py-2">Highest Bid</td>
                    <td class="border px-4 py-2">${order.status}</td>
                    <td class="border px-4 py-2">Action</td>
                `;
        tableBody.appendChild(row);
      });
    }
  });

function Test() {
  interface Order {
    id: string;
    amount: number;
    status: string;
    email: string;
  }

  // Đọc dữ liệu từ file JSON
  fetch("dataOrder.json")
    .then((response) => response.json())
    .then((data: Order[]) => {
      const tableBody = document.getElementById("table-body");
      if (tableBody) {
        tableBody.innerHTML = "";
        data.forEach((order) => {
          const row = document.createElement("tr");
          row.innerHTML = `
                    <td class="border px-4 py-2">Image</td>
                    <td class="border px-4 py-2">${order.id}</td>
                    <td class="border px-4 py-2">${order.amount}</td>
                    <td class="border px-4 py-2">Highest Bid</td>
                    <td class="border px-4 py-2">${order.status}</td>
                    <td class="border px-4 py-2">Action</td>
                `;
          tableBody.appendChild(row);
        });
      }
    });

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Order Bidding List</h1>
        <div className="flex space-x-4">
          <Fillter_Table />
        </div>
      </div>

      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Biding Id</th>
            <th className="px-4 py-2">Bid Amount (USD)</th>
            <th className="px-4 py-2">Highest Bid</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody id="table-body"></tbody>
      </table>
    </div>
  );
}

export default Test;
