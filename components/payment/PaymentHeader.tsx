import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

interface PaymentHeaderProps {
  step: number;
}

const PaymentHeader: React.FC<PaymentHeaderProps> = ({ step }) => {
  const isActive = (currentStep: number) => step === currentStep;

  return (
    <div className="flex items-center mb-10">
      <div
        className={`lg:w-fit w-full text-center p-2 px-8 rounded-2xl ${
          isActive(1)
            ? "bg-primary text-white"
            : "border-2 border-border text-primary"
        }`}>
        Profile
      </div>
      <HiOutlineArrowLongRight className="w-14 h-10 text-border" />
      <div
        className={`lg:w-fit whitespace-nowrap w-full text-center p-2 rounded-2xl ${
          isActive(2)
            ? "bg-primary text-white"
            : "border-2 border-border text-primary"
        }`}>
        Studio Info
      </div>
      <HiOutlineArrowLongRight className="w-14 h-10 text-border" />
      <div
        className={`lg:w-fit w-full text-center p-2 px-4 rounded-2xl ${
          isActive(3)
            ? "bg-primary text-white"
            : "border-2 border-border text-primary"
        }`}>
        Payment
      </div>
    </div>
  );
};

export default PaymentHeader;
