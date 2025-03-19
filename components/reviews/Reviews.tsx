import { dummyReviews } from "@/helpers/data";
import React from "react";
import Review from "./Review";
import { Button } from "../ui/button";
import ReviewDialog from "../profile/edit/dialogs/ReviewDialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

const Reviews = () => {
  return (
    <div className="min-h-screen border-t border-gray">
      {dummyReviews.map((item) => (
        <Review key={item.id} {...item} />
      ))}
      <div className="lg:flex hidden items-center justify-center my-6 gap-5">
        <Button variant="outline" className="border-gray font-bold">
          See more{" "}
        </Button>
      </div>
      <div className="md:hidden my-5">
        <Pagination>
          <PaginationContent className="flex gap-4">
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem className="text-white bg-primary p-1 size-8 flex justify-center items-center rounded-lg">
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem className="text-white bg-primary p-1 size-8 flex justify-center items-center rounded-lg">
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem className="text-white bg-primary p-1 size-8 flex justify-center items-center rounded-lg">
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>{" "}
            <PaginationItem className="text-white bg-primary p-1 size-8 flex justify-center items-center rounded-lg">
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Reviews;
