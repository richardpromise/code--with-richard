import React, { useEffect } from "react";
import { useHeaderContext } from "../../context/header";

const Tenants = () => {
  const { setheader } = useHeaderContext();

  useEffect(() => {
    setheader("Tenants");
  }, []);

  return (
    <div>
      <table className="border w-[80%] mx-auto ">
        <thead className=" bg-red-500 border">
          <tr className=" ">
            <th className="border text-left">Tenant ID</th>
            <th>Tenant Name</th>
            <th>Tenant Address</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-300 border">
            <td>1</td>
            <td>Tenant 1</td>
            <td>123 Main St</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Tenant 2</td>
            <td>456 Elm St</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Tenant 2</td>
            <td>456 Elm St</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Tenant 2</td>
            <td>456 Elm St</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tenants;
