import React from "react";
import { Button } from "../ui/button";


const SuccessfulPayment = () => {
  return (
    <div className="flex flex-col items-center gap-4 max-w-md">
      <img src="/images/thumb.svg" alt="" />
      <h2 className="text-3xl font-bold">Bravo! Thanks for joining.</h2>
      <p>
        Welcome to a community that's reimagining how the dance world shops.
        <br /> <br />
        Get started with exclusive access to listings, shipping made simple, and
        purchase peace of mind.
      </p>
      <Button>Explore</Button>
    </div>
  );
};

export default SuccessfulPayment;
