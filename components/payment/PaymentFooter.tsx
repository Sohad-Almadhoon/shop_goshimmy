import React from "react";
import { Button } from "../ui/button";

interface PaymentFooterProps {
  step: number;
  onBack: () => void;
  onNext: () => void;
}

const PaymentFooter: React.FC<PaymentFooterProps> = ({
  step,
  onBack,
  onNext,
}) => {
  return (
    <div className="flex mt-6 justify-between items-center">
      {step === 1 ? (
        <p className="text-left w-72 text-sm flex flex-wrap">
          By creating an account you agree to our{" "}
          <span className="text-primary">terms of service</span>.
        </p>
      ) : (
        <Button onClick={onBack}> Back</Button>
      )}
      {step < 3 ? (
        <Button onClick={onNext}> Next</Button>
      ) : (
        <Button onClick={onNext}> Save</Button>
      )}
    </div>
  );
};

export default PaymentFooter;
