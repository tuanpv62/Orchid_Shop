"use client";
import React, { useState } from "react";
import Grid_DashBoard_table from "./Grid_DashBoard_table";
import Grid_My_Profile from "./Grid_My_Profile";
import Grid_Order_Data_Table from "./Grid_Order_Data_Table";

//import Fillter_Table from "./_component_fillter/Fillter_Table";
import Test from "./Test";

function Nav_Menu() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex">
      {/* Left Column */}
      <div className="h-full w-1/5">
        {/* Container with fixed height */}
        <div className=" bg-gray-200 border-r border-gray-300 h-full overflow-y-auto">
          {/* Set max height and overflow */}
          <ul className="py-4">
            <li
              className={`px-4 py-2 cursor-pointer ${
                activeTab === "dashboard" ? "bg-green-400" : "hover:bg-gray-300"
              }`}
              onClick={() => handleTabClick("dashboard")}
            >
              Dashboard
            </li>
            <li
              className={`px-4 py-2 cursor-pointer ${
                activeTab === "profile" ? "bg-green-400" : "hover:bg-gray-300"
              }`}
              onClick={() => handleTabClick("profile")}
            >
              My Profile
            </li>
            <li
              className={`px-4 py-2 cursor-pointer ${
                activeTab === "orders" ? "bg-green-400" : "hover:bg-gray-300"
              }`}
              onClick={() => handleTabClick("orders")}
            >
              Order Biding
            </li>
            <li
              className={`px-4 py-2 cursor-pointer ${
                activeTab === "logout" ? "bg-green-400" : "hover:bg-gray-300"
              }`}
              onClick={() => handleTabClick("logout")}
            >
              Log Out
            </li>
          </ul>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 p-4">
        {activeTab === "dashboard" && <Grid_DashBoard_table />}
        {activeTab === "profile" && <Grid_My_Profile />}
        {activeTab === "orders" && <Grid_Order_Data_Table />}
        {activeTab === "logout" && <Test />}
      </div>
    </div>
  );
}

export default Nav_Menu;
