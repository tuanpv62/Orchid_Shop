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
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="flex flex-row">
      <div className="container mx-auto mt-12 h-full w-66">
        <div className="justify-center items-center h-screen">
          <div className=" md:gap-4">
            <div className=" mx-auto mt-12 items-center">
              <div className="flex flex-row  justify-center  gap-10">
                <ul className="flex flex-col gap-5 py-4 w-96 font-mono text-2xl font-bold pt-10">
                  <li>
                    {/* <a href="#"></a> */}
                    <button
                      onClick={() => setOpenTab(1)}
                      className={` w-full ${
                        openTab === 1 ? "bg-green-400 text-black" : "bg-white"
                      } inline-block px-4 py-2 text-gray-600  bg-green-500 rounded  `}
                    >
                      DashBoard
                    </button>
                  </li>
                  <li>
                    {/* <a href="#"></a> */}
                    <button
                      onClick={() => setOpenTab(2)}
                      className={` w-full ${
                        openTab === 2 ? "bg-green-400 text-black " : "bg-white"
                      } inline-block px-4 py-2 text-gray-600 bg-white rounded `}
                    >
                      My Profile
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setOpenTab(3)}
                      className={` w-full ${
                        openTab === 3 ? "bg-green-400 text-black " : "bg-white"
                      } inline-block px-4 py-2 text-gray-600 bg-white rounded `}
                    >
                      Order Biding
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setOpenTab(4)}
                      className={` w-full ${
                        openTab === 4 ? "bg-green-400 text-black " : "bg-white"
                      } inline-block px-4 py-2 text-gray-600 bg-white rounded `}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
                <div className="p-3 mt-6 bg-white border w-full">
                  <div className={openTab === 1 ? "block " : "hidden"}>
                    {openTab === 1 && <Grid_DashBoard_table />}
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"}>
                    {openTab === 2 && <Grid_My_Profile />}
                  </div>
                  <div className={openTab === 3 ? "block " : "hidden"}>
                    {openTab === 3 && <Grid_Order_Data_Table />}
                  </div>
                  <div className={openTab === 4 ? "block " : "hidden"}>
                    {openTab === 4 && <Test />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav_Menu;
