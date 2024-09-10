import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

export const sideBarLinks = [
  {
    title: "Home",
    url: "/",
    icon: <LuLayoutDashboard />,
  },
  {
    title: "users",
    url: "/users",
    icon: <FaRegUser />,
  },
  {
    title: "tenant",
    url: "/tentant",
    icon: <IoHome />,
  },
];
