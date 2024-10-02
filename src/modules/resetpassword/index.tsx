/** @format */

import React from "react";

export default function Resetpassword() {
  return (
    <div className="bg-red-500 h-[100%] flex justify-center items-center ">
      <form className="bg-white h-[70%] w-[80%] flex flex-col justify-center items-center pl-4 pr-4 gap-11">
        <div className="uppercase text-[20px] ">reset password</div>
        <div className="capitalize">provide your e-mail to receive code</div>
        <div className="flex flex-col justify-center uppercase w-[100%] gap-8">
          <div className="flex flex-col justify-center uppercase w-[100%] gap-2">
            <label htmlFor="e-mail">e-mail address</label>
            <input
              type="email"
              placeholder="@gmail.com"
              id="e-mail"
              className="border-b-[1px] border-b-black outline-none w-[80%]"
            />
          </div>
          <div className="flex  justify-center uppercase w-[100%] h-7">
            <input
              type="submit"
              value="send code"
              className="w-[40%] bg-blue-600 h-[100%] uppercase"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
