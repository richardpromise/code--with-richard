import React from "react";

interface buttonProps {
  size: string;
  isDisabled: boolean;
  children: string;
  onCLick: () => void;
  type: string;
}

const CustomButton = ({
  children,
  isDisabled,
  size,
  onCLick,
  type,
}: buttonProps) => {
  const buttonSize =
    size === "lg"
      ? "w-full"
      : size === "mid"
      ? "w-1/4"
      : size === "sm"
      ? "w-1/3"
      : "";

  const buttonColor =
    type === "outlined" ? "bg-black text-white" : "bg-white text-black";
  return (
    <div className="w-full">
      <button
        className={`${buttonSize} ${buttonColor}`}
        onClick={onCLick}
        disabled={isDisabled}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
