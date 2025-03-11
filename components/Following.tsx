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
import { BiHeart, BiX } from "react-icons/bi";

const Following = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className="flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-3xl text-primary border-secondary border">
          <BiHeart /> <span>Follow</span>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-md p-6 rounded-lg bg-white text-black">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Following (12,497)
          </DialogTitle>
        </DialogHeader>
        <div>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div className="flex items-center gap-4 mt-4" key={item}>
              <img
                src="/images/profile.png"
                alt="Profile"
                className="size-14 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-lg">First and Last Name</p>
                <DialogDescription className="text-gray-500">
                  @username
                </DialogDescription>
              </div>
            </div>
          ))}
        </div>

        <DialogClose className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
          <BiX />{" "}
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default Following;
