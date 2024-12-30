import React, { FC } from "react";

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "solid" | "outline";
}

const CustomButton: FC<CustomButtonProps> = ({
  text,
  onClick,
  variant = "solid",
}) => {
  const baseClass = "lg:w-fit w-full text-center p-2 px-8 rounded-2xl";
  const variantClass =
    variant === "outline"
      ? "border border-primary text-primary bg-transparent"
      : "bg-primary text-white";

  return (
    <button onClick={onClick} className={`${baseClass} ${variantClass}`}>
      {text}
    </button>
  );
};

export default CustomButton;
