import React, { useEffect } from "react";
import { useHeaderContext } from "../../context/header";
import coffe from '../../assets/images/coffee.jpeg'
import mike from '../../assets/images/Layer 3@2x.jpg'
import sandra from '../../assets/images/Layer 12@2x.jpg'
import amaka from '../../assets/images/Layer 6@2x.jpg'
import samuel from '../../assets/images/pexels-photo-1222271@2x.jpg'

const Tenants = () => {
  const { setheader } = useHeaderContext();

  useEffect(() => {
    setheader("Tenants");
  }, []);

  return (
    <div className="p-[30px]">
      <table className=" w-[80%] mx-auto ">
        <thead className=" bg-cyan-900 border">
          <tr className=" border border-black">
            <th className="border-r border-black text-left p-[10px]">Tenants</th>
            <th className="border-r border-black text-left p-[10px]">Tenant Details</th>
            <th className=" text-left p-[10px]">Tenant Address</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-black">
            <td className="border-r border-black p-[10px]">Tenant 1</td>
            <td className="border-r border-black flex items-center gap-3  p-[10px]"><span className="w-10 h-10 rounded-full" style={{backgroundImage : `url(${mike})`,
          backgroundPosition :"center" , backgroundSize:"cover"}}></span>Micheal Olarewaju</td>
            <td className="px-[10px]">123 Main St</td>
          </tr>

          <tr className="border border-black ">
          <td className="border-r border-black p-[10px]">Tenant 2</td>
          <td className="border-r border-black flex items-center gap-3  p-[10px]">  <span className="w-10 h-10 rounded-full" style={{backgroundImage : `url(${sandra})`,
          backgroundPosition :"center" , backgroundSize:"cover"}}></span>Sandra James</td>
            <td className="px-[10px]">456 Elm St</td>
          </tr>

          <tr className="border border-black ">
          <td className="border-r border-black p-[10px]">Tenant 3</td>
          <td className="border-r border-black flex items-center gap-3  p-[10px]">  <span className="w-10 h-10 rounded-full" style={{backgroundImage : `url(${amaka})`,
          backgroundPosition :"center" , backgroundSize:"cover"}}></span>Amaka daniel</td>
            <td className="px-[10px]">456 Elm St</td>
          </tr>

          <tr className="border border-black ">
          <td className="border-r border-black p-[10px]">Tenant 4</td>
          <td className="border-r border-black flex items-center gap-3  p-[10px]">  <span className="w-10 h-10 rounded-full" style={{backgroundImage : `url(${samuel})`,
          backgroundPosition :"center" , backgroundSize:"cover"}}></span>Samuel Okunzunwa</td>
            <td className="px-[10px]">456 Elm St</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tenants;
