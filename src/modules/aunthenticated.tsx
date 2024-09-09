import React from "react";
import { Outlet } from "react-router-dom";

const Aunthenticated = () => {
  return (
    <div className="h-full w-full">
      <div className="h-[100px]">
        <h1>Header</h1>
      </div>
      <div className="flex w-full h-[calc(100vh-100px)]">
        <div className="h-full">sidebar</div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Aunthenticated;
