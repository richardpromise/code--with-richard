import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/side-bar";
import Header from "../components/header";

const Authenticated = () => {
  return (
    <div className="h-screen w-full flex">
      <div className="h-full w-[15%] bg-[#212a31] ">
        <Sidebar />
      </div>

      <div className="flex w-[85%] flex-col ">
        <Header />
        <div className="h-[calc(100vh-70px)] px-12 p-y-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Authenticated;
