import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { BiX } from "react-icons/bi";

const CancelMembership = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="text-primary"> Cancel Ensemble Membership</span>
      </DialogTrigger>
      <DialogContent className="lg:max-w-md max-w-md p-6 rounded-lg bg-white text-black">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            We are sad to see you go!
          </DialogTitle>
          <DialogDescription>
            Would you mind giving us a bit more info about why you would like to
            cancel your membership?
          </DialogDescription>
        </DialogHeader>
        <form>
                  <h3>Select all that apply</h3>
                  
        </form>
        <DialogClose className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
          <BiX />{" "}
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default CancelMembership;
