import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { BiX } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";

const ReviewDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="font-bold text-primary">Leave a review</span>{" "}
      </DialogTrigger>

      <DialogContent className="lg:max-w-md max-w-md p-6 rounded-lg bg-white text-black">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Leave a review
          </DialogTitle>
          <DialogDescription>
            {" "}
            <span className="text-sm">
              How was your [name of itme] from [name of seller]?
            </span>
          </DialogDescription>
        </DialogHeader>
        <div>
          <h3 className="text-sm font-bold">Select start amount </h3>
          <div className="flex mt-1 items-center gap-2">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <BsStarFill key={index} className="size-6 text-success " />
              ))}
          </div>
          <div className="mt-5">
            <h3 className="text-sm font-bold">Describe your experience</h3>
            <textarea
              className="w-full bg-lightGray outline-none rounded-lg mt-4 p-5"
              placeholder="How was your experience with this item and 
this seller?"></textarea>
          </div>
          <div>
            <span className="text-sm font-bold">
              {" "}
              Add photo(s) of your item
            </span>
            <div className="flex items-center gap-5 mt-2">
              <div className="size-16  rounded-lg overflow-hidden relative">
                <img src="/images/palle.jpg" alt="" />
                <span className="bg-blue-500 text-white rounded-full size-4 absolute top-0 right-0 cursor-pointer">
                  <BiX />
                </span>
              </div>
              <div className="size-16 bg-lightGray border-dashed border-2 border-bodyLight rounded-lg flex items-center justify-center">
                <PlusIcon className="text-xl" />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <Button className="bg-primary text-white px-5 hover:text-primaryDark">
              Submit review
            </Button>
          </div>
        </div>

        <DialogClose className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
          <BiX />{" "}
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewDialog;
