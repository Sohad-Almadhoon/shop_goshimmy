"use client";
import React, { useState } from "react";
import CustomInput from "../components/shared/CustomInput";
import PaymentHeader from "../components/shared/PaymentHeader";
import PaymentFooter from "../components/PaymentFooter";

const Payment = () => {
  const [step, setStep] = useState(1); // Manage the current step of the form

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3)); // Navigate to the next step
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1)); // Navigate to the previous step

  return (
    <div className="bg-dance-pattern min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg max-w-md rounded-xl text-center py-9 px-8">
        <PaymentHeader step={step} />
        {/* Step 1: Personal Info */}
        {step === 1 && (
          <div>
            <h2 className="font-bold text-xl mb-4">Step 1: Personal Info</h2>
            <div className="flex flex-col gap-2">
              <CustomInput placeholder="Full Name" className="bg-slate-100" />
              <CustomInput placeholder="Email" className="bg-slate-100" />
              <CustomInput placeholder="Username" className="bg-slate-100" />
              <CustomInput placeholder="Password" className="bg-slate-100" />
            </div>
          </div>
        )}

        {/* Step 2: Payment Details */}
        {step === 2 && (
          <div>
            <h2 className="font-bold text-xl mb-4">Step 2: Payment Details</h2>
            <div className="flex flex-col gap-2">
              <label className="text-left font-medium">Card Number</label>
              <CustomInput
                placeholder="16-digit number"
                className="bg-slate-100"
              />
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-left font-medium">Exp Date</label>
                <CustomInput placeholder="MM/YY" className="bg-slate-100" />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-left font-medium">CVV</label>
                <CustomInput
                  placeholder="3-digit code"
                  className="bg-slate-100"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Billing Address */}
        {step === 3 && (
          <div>
            <h2 className="font-bold text-xl mb-4">Step 3: Billing Address</h2>
            <div className="flex flex-col gap-2">
              <label className="text-left font-medium">Billing Address</label>
              <CustomInput placeholder="123 Main St" className="bg-slate-100" />
              <label className="text-left font-medium">City</label>
              <CustomInput placeholder="City Name" className="bg-slate-100" />
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-left font-medium">State</label>
                <CustomInput placeholder="State" className="bg-slate-100" />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-left font-medium">Zip</label>
                <CustomInput
                  placeholder="5-digit Zip"
                  className="bg-slate-100"
                />
              </div>
            </div>
          </div>
        )}

        {/* Payment Footer */}
        <PaymentFooter step={step} onBack={prevStep} onNext={nextStep} />
      </div>
    </div>
  );
};

export default Payment;
