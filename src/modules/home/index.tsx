import React, { useEffect } from "react";
import { useHeaderContext } from "../../context/header";

const Dashboard = () => {
  const { setheader } = useHeaderContext();

  useEffect(() => {
    setheader("Dashboard");
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
