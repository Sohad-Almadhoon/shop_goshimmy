import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";

const page = () => {
  return (
    <div className="bg-payment-pattern min-h-screen  flex justify-center">
      <Card className="w-[420px] h-fit mt-20 p-5">
        <CardTitle className="text-2xl ml-5">Thanks!</CardTitle>
        <CardContent>
          We've sent an email with a link to reset password to [their email].
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
