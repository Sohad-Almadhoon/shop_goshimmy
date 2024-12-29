import React from "react";
import CustomButton from "./shared/CustomButton";

interface PaymentFooterProps {
  step: number;
  onBack: () => void;
  onNext: () => void;
}

const PaymentFooter: React.FC<PaymentFooterProps> = ({ step, onBack, onNext }) => {
  return (
    <div className="flex mt-6 justify-between items-center">
      {step === 1 ? (
        <p className="text-left max-w-sm flex flex-wrap">
          By creating an account you agree to our{" "}
          <span className="text-primary">terms of service</span>.
        </p>
      ) : (
      <CustomButton text="Back" onClick={onBack} />
      )}
      {step < 3 ? (
       <CustomButton text="Next" onClick={onNext} />
      ) : (
        <CustomButton text="Save" onClick={onNext} />
      )}
    </div>
  );
};

export default PaymentFooter;
