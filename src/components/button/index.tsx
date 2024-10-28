import React from "react";

interface buttonProps {
  size: string;
  isDisabled: boolean;
  children: string;
  onCLick: () => void;
  type: string;
  touches?: string;
}

const CustomButton = ({
  children,
  isDisabled,
  size,
  onCLick,
  type,
  touches,
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
        className={`${buttonSize} ${buttonColor} ${touches}`}
        onClick={onCLick}
        disabled={isDisabled}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
