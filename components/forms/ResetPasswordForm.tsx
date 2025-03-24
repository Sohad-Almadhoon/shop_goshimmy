"use client";
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
const ResetPasswordForm = () => {
  return (
    <Card className="w-[420px] h-fit mt-20">
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
  );
};

export default ResetPasswordForm;
