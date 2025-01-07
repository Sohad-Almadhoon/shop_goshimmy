import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";

const PasswordReset = () => {
  return (
    <div className="bg-payment-pattern min-h-screen pt-10 pb-20 flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Reset password</CardTitle>
          <CardDescription>Forgot your password? No problem.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form>
            <Input placeholder="Email" className="mt-3" />
            <div className="flex justify-end mt-8">
              <Button>Reset</Button>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordReset;
