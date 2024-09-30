import React, { useEffect } from "react";
import { useHeaderContext } from "../../context/header";

const Header = () => {
  const { header } = useHeaderContext();

  return (
    <div className="w-full bg-[#d3d9d4] flex items-center jsutify-between h-[70px] font-bold text-xl px-3">
      {header}
    </div>
  );
};

export default Header;
