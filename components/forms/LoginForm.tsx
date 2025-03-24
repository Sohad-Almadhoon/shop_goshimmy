import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
const LoginForm = () => {
  return (
    <Card className="my-10">
      <CardTitle className="text-center my-6 text-sm">
        Don't have an account?{" "}
        <Link href="/register" className="text-primary">
          Sign up
        </Link>
      </CardTitle>
      <hr className="border border-b border-gray" />
      <CardContent className="w-[450px]">
        <h3 className="text-2xl font-semibold mt-4">Welcome back!</h3>
        <p className="text-sm mb-7">
          In case no one has told you today, you're doing great.
        </p>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="Password" className="mt-5 mb-3" />
          <span className="text-sm font-semibold">
            <span> Forgot password?</span>
            <Link href="/reset-password" className="text-primary ml-1">
              Reset password
            </Link>
          </span>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                className="bg-lightGray size-4 cursor-pointer block"
              />
              <span>Remember me</span>
            </div>
            <Button>Log in</Button>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
}

export default LoginForm