import React, { FC, ReactNode } from "react";
interface PaymentFormProps {
  title: string;
  description: string;
  subdescription?: string;
  children: ReactNode;
}
const PaymentForm: FC<PaymentFormProps> = ({
  title,
  description,
  subdescription,
  children,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3"> {title}</h2>
      <p className="font-medium">
        {description}
        <span className="text-primary">{subdescription}</span>
      </p>
      <form className=" gap-2 mt-4 flex flex-col">{children}</form>
    </div>
  );
};

export default PaymentForm;
