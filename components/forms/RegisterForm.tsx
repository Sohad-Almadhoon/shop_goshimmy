import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
const RegisterForm = () => {
  return (
    <Card className="my-10 mx-12">
      <CardTitle className="text-center my-6 text-sm">
        Already have an account?
        <Link href="/auth/login" className="text-primary">
          Log in
        </Link>
      </CardTitle>
      <hr className="border border-b border-input" />
      <CardContent>
        <h3 className="text-2xl font-semibold mt-4">
          Welcome! We're glad you're here.
        </h3>
        <p className="text-sm mb-7">
          Create your account to start buying and selling
        </p>
        <Form>
          <Input placeholder="Full name" className="mt-5 mb-3" />
          <Input placeholder="Email" />
          <Input placeholder="Username" className="mt-5 mb-3" />
          <Input placeholder="Password" className="mt-5 mb-3" />

          <div className="flex items-center justify-between mt-6">
            <span className="max-w-xs text-sm">
              By creating an account you agree to our{" "}
              <span className="text-primary">terms of service</span>
            </span>
            <Button>Log in</Button>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
