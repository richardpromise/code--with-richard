import React from "react";
import { sideBarLinks } from "./data";
import Navlinks from "./nav-links";

const Sidebar = () => {
  return (
    <div className="flex flex-col  h-full justify-between">
      <div>
        <div className="bg-[#2e3944] p-3 text-[white]">C-W-P</div>

        <div className="flex flex-col gap-3 p-4 ">
          {sideBarLinks.map(({ title, url, icon }, i) => (
            <Navlinks title={title} url={url} key={i} icon={icon} />
          ))}
        </div>
      </div>

      <div className="bg-[#2e3944] p-3 text-[white]">log out</div>
    </div>
  );
};

export default Sidebar;
