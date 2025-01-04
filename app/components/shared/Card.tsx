import React from "react";
import { twMerge } from "tailwind-merge";
interface CardProps {
  children: React.ReactNode;
  className?:string
}
const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={twMerge(
        "bg-white shadow-lg max-w-md rounded-xl text-center py-9 px-8" ,
        className
      )}>
      {children}
    </div>
  );
};

export default Card;
