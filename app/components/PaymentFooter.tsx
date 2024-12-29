import React from "react";

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
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={onBack}>
          Back
        </button>
      )}
      {step < 3 ? (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onNext}>
          Next
        </button>
      ) : (
        <button className="px-4 py-2 bg-green-500 text-white rounded">
          Save
        </button>
      )}
    </div>
  );
};

export default PaymentFooter;
