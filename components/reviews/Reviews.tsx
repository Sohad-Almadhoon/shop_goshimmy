import { dummyReviews } from "@/helpers/data";
import React from "react";
import Review from "./Review";
import { Button } from "../ui/button";
import ReviewDialog from "../ReviewDialog";

const Reviews = () => {
  return (
    <div className="min-h-screen">
      {dummyReviews.map((item) => (
        <Review key={item.id} {...item} />
      ))}
      <div className="flex items-center justify-center my-6 gap-5">
        <Button variant="outline" className="border-gray font-bold">See more </Button>
        <ReviewDialog />
      </div>
    </div>
  );
};

export default Reviews;
