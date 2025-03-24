import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const Logout = () => {
  return (
      <Card className="w-[420px] h-fit mt-20">
        <CardTitle className="text-center my-6 text-sm">
          Need to log back in? <Link className="text-primary" href="login">Log in</Link>
        </CardTitle>
        <hr className="border border-b border-gray" />
        <CardContent className="p-5">
          <h3 className="text-2xl font-bold">Log out successful</h3>
          <span>Thanks for stopping by! Hope to see you soon :)</span>
        </CardContent>
      </Card>
  );
};

export default Logout;
