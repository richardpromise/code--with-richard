import React from "react";
interface buttonProps {
  size: string;
  isDisabled: boolean;
  children: string;
  onCLick: () => void;
}

const CustomButton = ({ children, isDisabled, size, onCLick }: buttonProps) => {
  const buttonSize =
    size === "lg"
      ? "w-full"
      : size === "mid"
      ? "w-1/4"
      : size === "sm"
      ? "w-1/3"
      : "";
  return (
    <div className="w-full">
      {/* <button className={``} onClick={onclick} disabled={isDisabled}>
        {children}
      </button> */}
    </div>
  );
};

export default CustomButton;
