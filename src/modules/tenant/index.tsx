import React, { useEffect } from "react";
import { useHeaderContext } from "../../context/header";

const Tenants = () => {
  const { setheader } = useHeaderContext();

  useEffect(() => {
    setheader("Tenants");
  }, []);

  return <div>tenants</div>;
};

export default Tenants;
