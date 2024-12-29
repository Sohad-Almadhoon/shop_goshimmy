import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const PaymentHeader = () => {
  return (
    <div className="flex items-center mb-10">
      <span className="bg-primary lg:w-fit w-full text-white text-center p-2 px-8 rounded-2xl">
        Profile
      </span>
      <HiOutlineArrowLongRight className="w-14 h-10 text-gray-500" />
      <span className="bg-primary lg:w-fit w-full whitespace-nowrap text-white text-center p-2 px-8 rounded-2xl">
        Studio Info
      </span>
      <HiOutlineArrowLongRight className="w-14 h-10 text-gray-500" />
      <span className="bg-primary lg:w-fit w-full text-white text-center p-2 px-8 rounded-2xl">
        Payment
      </span>
    </div>
  );
};

export default PaymentHeader;
