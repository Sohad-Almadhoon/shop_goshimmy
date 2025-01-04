"use client";
import React, { useState } from "react";
import CustomInput from "../components/shared/CustomInput";
import PaymentHeader from "../components/payment/PaymentHeader";
import PaymentFooter from "../components/payment/PaymentFooter";
import SuccessfulPayment from "../components/payment/SuccessfulPayment";
import PaymentForm from "../components/payment/PaymentForm";
import Card from "../components/shared/Card";

const Payment = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="bg-payment-pattern min-h-screen flex justify-center items-center">
      <Card>
        {step < 4 && <PaymentHeader step={step} />}

        {step === 1 && (
          <PaymentForm
            title="Thanks for joining!"
            description="Set up your profile first."
            subdescription="Already have an account?">
            <div className="flex flex-col gap-4">
              <CustomInput placeholder="Full Name" className="bg-slate-100" />
              <CustomInput placeholder="Email" className="bg-slate-100" />
              <CustomInput placeholder="Username" className="bg-slate-100" />
              <CustomInput placeholder="Password" className="bg-slate-100" />
            </div>
          </PaymentForm>
        )}

        {step === 2 && (
          <PaymentForm
            title="Studio Information"
            description="Tell us some more about your studio and role">
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
          </PaymentForm>
        )}

        {step === 3 && (
          <PaymentForm title="Payment Information" description="$9/month">
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
          </PaymentForm>
        )}

        {step === 4 && <SuccessfulPayment />}

        {step < 4 && (
          <PaymentFooter step={step} onBack={prevStep} onNext={nextStep} />
        )}
      </Card>
    </div>
  );
};

export default Payment;
