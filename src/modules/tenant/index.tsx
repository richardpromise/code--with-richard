import React, { useEffect } from "react";
import { useHeaderContext } from "../../context/header";
import coffe from '../../assets/images/coffee.jpeg'

const Tenants = () => {
  const { setheader } = useHeaderContext();

  useEffect(() => {
    setheader("Tenants");
  }, []);

  return (
    <div className="p-[30px]">
      <table className=" w-[80%] mx-auto ">
        <thead className=" bg-red-500 border">
          <tr className=" border border-black">
            <th className="border-r border-black text-left p-[10px]">Tenants</th>
            <th className="border-r border-black text-left p-[10px]">Tenant Details</th>
            <th className=" text-left p-[10px]">Tenant Address</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-300 border border-black">
            <td className="border-r border-black p-[10px]">Tenant 1</td>
            <td className="border-r border-black flex items-center gap-3  p-[10px]">  <span className="w-10 h-10 rounded-full" style={{backgroundImage : `url(${coffe})`,
          backgroundPosition :"center" , backgroundSize:"cover"}}></span>Micheal Olarewaju</td>
            <td className="px-[10px]">123 Main St</td>
          </tr>

          <tr className="border border-black ">
          <td className="border-r border-black p-[10px]">Tenant 2</td>
          <td className="border-r border-black flex items-center gap-3  p-[10px]">  <span className="w-10 h-10 rounded-full" style={{backgroundImage : `url(${coffe})`,
          backgroundPosition :"center" , backgroundSize:"cover"}}></span>Sandra James</td>
            <td className="px-[10px]">456 Elm St</td>
          </tr>

          <tr className="border border-black ">
          <td className="border-r border-black p-[10px]">Tenant 3</td>
          <td className="border-r border-black flex items-center gap-3  p-[10px]">  <span className="w-10 h-10 rounded-full" style={{backgroundImage : `url(${coffe})`,
          backgroundPosition :"center" , backgroundSize:"cover"}}></span>Amaka daniel</td>
            <td className="px-[10px]">456 Elm St</td>
          </tr>

          <tr className="border border-black ">
          <td className="border-r border-black p-[10px]">Tenant 4</td>
          <td className="border-r border-black flex items-center gap-3  p-[10px]">  <span className="w-10 h-10 rounded-full" style={{backgroundImage : `url(${coffe})`,
          backgroundPosition :"center" , backgroundSize:"cover"}}></span>Samuel Okunzunwa</td>
            <td className="px-[10px]">456 Elm St</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tenants;
