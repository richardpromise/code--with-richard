import { useLocation, useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";

interface navlinksProps {
  title: string;
  url: string;
  icon: any;
}

export default function Navlinks({ title, url, icon }: navlinksProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNaigate = () => {
    navigate(url);
  };
  return (
    <div
      onClick={handleNaigate}
      className={`w-full p-2 hover:bg-[#124e66] ${
        pathname === url ? " bg-[#124e66]" : ""
      } rounded-[10px] text-[white] flex items-center gap-3 capitalize`}
    >
      {icon} {title}
    </div>
  );
}
