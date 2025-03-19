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
import { Select, SelectTrigger } from "../ui/select";

const Reviews = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-end">
        {" "}
        <div className="flex md:hidden w-1/2 items-center mb-4 gap-2 justify-end">
          <p className="flex-2">Sort by</p>
          <div className="flex-1">
            {" "}
            <Select>
              <SelectTrigger className="w-full">Recent</SelectTrigger>
            </Select>
          </div>
        </div>
      </div>
      <div className="border-t border-gray">
        {dummyReviews.map((item) => (
          <Review key={item.id} {...item} />
        ))}
      </div>
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
