import React, { FC } from "react";
interface CustomButtonProps {
  text: string;
  onClick?: () => void;
}
const CustomButton: FC<CustomButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary lg:w-fit w-full text-white text-center p-2 px-8 rounded-2xl">
      {text}
    </button>
  );
};

export default CustomButton;
