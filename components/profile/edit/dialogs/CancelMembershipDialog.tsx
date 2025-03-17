import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { cancelMembership } from "@/helpers/mockData";
import React from "react";
import { BiX } from "react-icons/bi";

const CancelMembershipDialog = () => {
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
          <h3 className="text-lg mb-3 font-bold">Select all that apply</h3>
          <RadioGroup className="flex flex-col gap-3">
            {cancelMembership.map((item , index) => (
              <div className="flex items-center gap-3" key={index}>
                <RadioGroupItem value={item} key={item} />
                <Label className="font-medium text-sm mb-0">{item}</Label>
              </div>
            ))}
          </RadioGroup>
          <div className="mt-8">
            <Label className="mb-2" htmlFor="comments">
              {" "}
              Optional comments
            </Label>
            <Textarea
              id="comments"
              placeholder="Tell us how we can improve the Ensemble Membership"
              className=" placeholder:text-base p-3"></Textarea>
          </div>
          <div className="flex justify-end mt-5">
            {" "}
            <Button type="submit">Cancel Membership</Button>
          </div>
        </form>
        <DialogClose className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
          <BiX />{" "}
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default CancelMembershipDialog;
