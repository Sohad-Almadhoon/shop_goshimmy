import React from "react";
import Card from "../shared/Card";
import CustomInput from "../shared/CustomInput";
import CustomButton from "../shared/CustomButton";

const PasswordReset = () => {
  return (
    <Card>
      <h2>New password</h2>
      <span>Enter in your new password</span>
      <CustomInput placeholder="New password" className="bg-slate-100" />
      <CustomInput placeholder="Reenter password" className="bg-slate-100" />
      <CustomButton text="Reset" />
    </Card>
  );
};

export default PasswordReset;
