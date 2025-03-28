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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { VerifiedIcon } from "lucide-react";
import React from "react";
import { BiPlus, BiX } from "react-icons/bi";

const AddressDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center gap-2 text-primary mt-3 font-bold">
          <BiPlus className="text-2xl" />
          <span className="text-lg">Add another address</span>
        </div>
      </DialogTrigger>

      <DialogContent className="lg:max-w-md max-w-md p-6 rounded-lg bg-white text-black">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Add address
          </DialogTitle>
          <DialogDescription>
            We use this for buying and selling
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-3">
          <div>
            <Label>Street address</Label>
            <Input
              placeholder="123 main st"
            />
          </div>
          <div>
            <Label>City</Label>
            <Input placeholder="City name" />
          </div>
          <div className="flex  gap-5">
            <div className="flex-1">
              <Label>State</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="AZ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="az">AZ</SelectItem>
                  <SelectItem value="ca">CA</SelectItem>
                  <SelectItem value="ny">NY</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label>Zip</Label>
              <Input placeholder="3 digit number" />
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <span className="flex gap-2 items-center">
              <VerifiedIcon className="text-primary" />
              Use as billing address
            </span>
            <Button>Save</Button>
          </div>
        </form>
        <DialogClose className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
          <BiX />{" "}
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default AddressDialog;
