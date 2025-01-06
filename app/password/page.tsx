import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

const PasswordReset = () => {
  return (
    <Card>
      <h2>New password</h2>
      <span>Enter in your new password</span>
      <Input placeholder="New password" className="bg-slate-100" />
      <Input placeholder="Reenter password" className="bg-slate-100" />
      <Button>Reset</Button>
    </Card>
  );
};

export default PasswordReset;
