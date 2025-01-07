"use client";
import React, { useState } from "react";
import PaymentHeader from "../../components/payment/PaymentHeader";
import PaymentFooter from "../../components/payment/PaymentFooter";
import SuccessfulPayment from "../../components/payment/SuccessfulPayment";
import PaymentForm from "../../components/forms/PaymentForm";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

const Payment = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="bg-payment-pattern min-h-screen flex items-center justify-center">
      <Card className="p-5 py-10">
        <CardTitle>{step < 4 && <PaymentHeader step={step} />}</CardTitle>

        <CardContent>
          {step === 1 && (
            <PaymentForm
              title="Thanks for joining!"
              description="Set up your profile first."
              subdescription="Already have an account?">
              <div className="flex flex-col gap-4">
                <Input placeholder="Full Name" className="bg-slate-100" />
                <Input placeholder="Email" className="bg-slate-100" />
                <Input placeholder="Username" className="bg-slate-100" />
                <Input placeholder="Password" className="bg-slate-100" />
              </div>
            </PaymentForm>
          )}

          {step === 2 && (
            <PaymentForm
              title="Studio Information"
              description="Tell us some more about your studio and role">
              <div className="flex flex-col gap-2">
                <label className="text-left font-medium">Card Number</label>
                <Input placeholder="16-digit number" className="bg-slate-100" />
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-left font-medium">Exp Date</label>
                  <Input placeholder="MM/YY" className="bg-slate-100" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-left font-medium">CVV</label>
                  <Input placeholder="3-digit code" className="bg-slate-100" />
                </div>
              </div>
            </PaymentForm>
          )}

          {step === 3 && (
            <PaymentForm title="Payment Information" description="$9/month">
              <div className="flex flex-col gap-2">
                <label className="text-left font-medium">Billing Address</label>
                <Input placeholder="123 Main St" className="bg-slate-100" />
                <label className="text-left font-medium">City</label>
                <Input placeholder="City Name" className="bg-slate-100" />
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-left font-medium">State</label>
                  <Input placeholder="State" className="bg-slate-100" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-left font-medium">Zip</label>
                  <Input placeholder="5-digit Zip" className="bg-slate-100" />
                </div>
              </div>
            </PaymentForm>
          )}

          {step === 4 && <SuccessfulPayment />}
        </CardContent>

        {step < 4 && (
          <PaymentFooter step={step} onBack={prevStep} onNext={nextStep} />
        )}
      </Card>
    </div>
  );
};

export default Payment;
