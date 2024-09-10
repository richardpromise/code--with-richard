import React, { useEffect } from "react";
import { useHeaderContext } from "../../context/header";

const Users = () => {
  const { setheader } = useHeaderContext();

  useEffect(() => {
    setheader("Users");
  }, []);

  return <div>userspage</div>;
};

export default Users;
