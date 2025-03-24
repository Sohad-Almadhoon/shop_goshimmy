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

const CardDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center gap-2 text-primary mt-3 font-bold">
          <BiPlus className="text-2xl" />
          <span className="text-lg"> Add card information</span>
        </div>
      </DialogTrigger>

      <DialogContent className="lg:max-w-md max-w-md p-6 rounded-lg bg-white text-black">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Add card information
          </DialogTitle>
          <DialogDescription>
            We use this for buying and selling
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-3">
          <div>
            <Label> Card number</Label>
            <Input placeholder="16 digit number" />
          </div>

          <div className="flex gap-3">
            <div>
              <Label> Exp date</Label>
              <Input placeholder="mm/yy" />
            </div>
            <div>
              <Label> CVV</Label>
              <Input placeholder="3 digit number" />
            </div>
          </div>
          <div>
            <Label> Billing address</Label>
            <Input placeholder=" 123 main st" />
          </div>
          <div>
            <Label>City</Label>
            <Input placeholder=" City name" />
          </div>

          <div className="flex gap-3">
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
          <div className="flex justify-end mt-5">
            <Button type="submit">Save</Button>
          </div>
        </form>
        <DialogClose className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
          <BiX />{" "}
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default CardDialog;
