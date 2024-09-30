/** @format */

import React from "react";

export default function Register() {
  return (
    <>
      <div className="w-[view] h-[100vh]">
        <div className="h-[100%] w-[100%] flex items-center justify-center">
          <form className="bg-white h-[80%] w-[25%] flex flex-col justify-center p-4 uppercase gap-[30px]  shadow-black shadow-lg">
            <div className="text-black font-bold text-center mb-4">
              provide your login details
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
    </>
  );
}
