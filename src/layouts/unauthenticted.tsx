/** @format */

import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Unauthenticted = () => {
  return (
    <div className="w-[100%] h-[100vh] flex bg-white  ">
      <div className="w-[100%] h-[80%] flex  justify-center items-center bg-blue-600">
        <div className="w-[50%] bg-blue-600 h-[80%] rounded-[50px] flex justify-center text-[30px] items-center flex-col ">
          <div className="w-[80%]">
            {" "}
            <i className="uppercase">nita's collection</i> got you covered,
            we're available for all kinds of wears you want fashion?
            <p className="uppercase mt-5">shop with us now</p>{" "}
          </div>
        </div>

        <div className="w-[50%] h-[100vh]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Unauthenticted;
