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

const Password = () => {
  return (
    <div className="bg-payment-pattern min-h-screen pt-10 pb-20 flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">New password</CardTitle>
          <CardDescription>Enter in your new password</CardDescription>
        </CardHeader>
        <CardContent>
          <Form>
            <Input placeholder="New password" />
            <Input placeholder="Reenter password" className="mt-3" />
            <div className="flex justify-end mt-8">
              <Button>Reset</Button>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Password;
