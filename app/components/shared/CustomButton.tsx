import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "solid" | "outline";
  className?: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  onClick,
  className,
  variant = "solid",
}) => {
  const baseClass = "lg:w-fit w-full text-center p-2 px-8 rounded-2xl";
  const variantClass =
    variant === "outline"
      ? "border border-primary text-primary bg-transparent"
      : "bg-primary text-white";

  return (
    <button onClick={onClick} className={twMerge(baseClass, variantClass , className)}>
      {children}
    </button>
  );
};

export default CustomButton;
