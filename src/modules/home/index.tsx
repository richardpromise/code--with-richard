import React, { useEffect } from "react";
import { useHeaderContext } from "../../context/header";

const Dashboard = () => {
  const { setheader } = useHeaderContext();

  useEffect(() => {
    setheader("Dashboard");
  }, []);
  return <div className=" flex flex-col gap-2"> </div>;
};

export default Dashboard;
