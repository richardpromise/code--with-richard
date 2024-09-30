import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Aunthenticated = () => {

  const navigate = useNavigate()
function signup(){
  navigate('/register')
}

  return (
  <>
<div className="w-[100%] h-[100vh] flex bg-white ">
    <div className="w-[100%] h-[80%] flex  justify-center items-center bg-blue-600">
      <div className="w-[50%] bg-blue-600 h-[80%] rounded-[50px] flex justify-center text-[30px] items-center flex-col ">
        <div className="w-[80%]">  <i className="uppercase">nita's collection</i> got you covered, we're available for all kinds of wears  you want fashion?<p className="uppercase mt-5">shop with us now</p> </div>
      </div>

      <div  className="w-[50%] h-[100vh]" > 
           <Outlet/>
 <div className="h-[100%] w-[100%] flex items-center justify-center">
   <form className="bg-white h-[85%] w-[55%] flex flex-col justify-center p-4 uppercase gap-[30px] mt-[100px] shadow-black shadow-lg" >
     <div className="text-black font-bold text-center mb-4">
         provide your login details
     </div>
       
          <div className="flex flex-col gap-3">
               <label htmlFor="username">username</label>
               <input type="text" placeholder="username" id="username" className="rounded-l outline-none capitalizen h-[30px]  border-b-black border-b-[1px] "   />
          </div>

          <div className="flex flex-col gap-3">
               <label htmlFor="password">password</label>
              <input type="paassword" placeholder="**********" id="password" className="rounded-l outline-none h-[30px]  border-b-black border-b-[1px] "  />
          </div>

          <div className="flex  gap-3 justify-center ">
                <input type="submit" className="rounded-l outline-none bg-blue-600 text-black h-[30px] w-[50%] uppercase cursor-pointer"    />
          </div>

        
          <div className="flex  flex-col items-center text-red-700 text-">
              <p className="cursor-pointer">forgetten password?</p>
              <p className="cursor-pointer" onClick={signup}>sign-up</p>
           </div>
   </form>
 </div>
  </div>
     </div>
</div>
  </>
  );
};

export default Aunthenticated;
