/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  function runSubmit() {
    navigate("/");
  }
  return (
    <div className="w-full h-[100vh]">
      <div className="h-[100%] w-[100%] flex items-center justify-center">
        <form className="bg-white h-[85%] w-[55%] flex flex-col justify-center p-4 uppercase gap-[30px] mt-[100px] shadow-black shadow-lg">
          <div className="text-black font-medium text-center mb-4">
            register with <i>nita's collection</i>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="username">username</label>
            <input
              type="text"
              placeholder="username"
              id="username"
              className="rounded-l outline-none capitalizen h-[30px]  border-b-black border-b-[1px] "
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="password">password</label>
            <input
              type="paassword"
              placeholder="**********"
              id="password"
              className="rounded-l outline-none h-[30px]  border-b-black border-b-[1px] "
            />
          </div>

          <div className="flex  gap-3 justify-center ">
            <input
              onClick={runSubmit}
              type="submit"
              className="rounded-l outline-none bg-blue-600 text-black h-[30px] w-[50%] uppercase cursor-pointer"
            />
          </div>

          <div className="flex  flex-col items-center text-red-700 text-">
            <p className="cursor-pointer">forgetten password?</p>
            <p className="cursor-pointer">sign-up</p>
          </div>
        </form>
      </div>
    </div>
  );
}
