import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { BiPlus, BiTrash } from "react-icons/bi";
import CardDialog from "./CardDialog";
import AddressDialog from "./AddressDialog";
import CancelMembership from "./CancelMembership";

const Settings = () => {
  return (
    <div className="p-5">
      <h2 className="font-bold text-lg">Settings</h2>
      <div className="my-5">
        <h3 className="font-bold">Bank Info</h3>
        <hr className="border-b border-gray my-3" />
        <div className="flex justify-between max-w-xl">
          <div>
            <span className="font-bold"> Card information</span>
            <div className="flex gap-5 items-center">
              <div className="flex flex-col mt-2">
                <span className="font-semibold"> Mastercard</span>
                <span>ending in 1234 exp 12/2019</span>
              </div>
              <BiTrash className="text-primary border-2 text-4xl p-1 rounded-full border-primary" />
            </div>
            <CardDialog />
          </div>
          <div>
            <h3 className="font-bold">Address</h3>
            <div className="flex gap-5 items-center">
              <span className="max-w-44 mt-2">
                {" "}
                1234 Main St, Main, MN 12345
              </span>
              <BiTrash className="text-primary border-2 text-4xl p-1 rounded-full border-primary" />
            </div>
            <AddressDialog />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold"> Notifications</h3>
        <hr className="border-b border-gray mt-3" />
        <p className="mt-2"> Email me when someone purchases my item</p>
        <p className="mt-2"> Email me when someone sends me a message</p>
        <p className="mt-2"> Email me with news and promotions</p>
      </div>
      <div className="mt-3">
        <h3 className="font-bold"> Account Settings</h3>
        <hr className="border-b border-gray my-3" />
        <form className="flex flex-col gap-3 pb-4">
          <div>
            <Label className="font-bold">Full Name</Label>
            <Input className="w-96" placeholder="Jane Doe" />
          </div>
          <div>
            <Label className="font-bold">Email</Label>
            <Input className="w-96" placeholder="janedoe@gmail.com" />
          </div>
          <div>
            <Label className="font-bold">Username</Label>
            <Input className="w-96" placeholder="JaneDoeBallet" />
          </div>
          <div>
            <Label className="font-bold"> Phone number</Label>
            <Input className="w-96" placeholder=" (555) 555-5555" />
          </div>
          <span className="text-primary cursor-pointer font-semibold">
            {" "}
            Reset password
          </span>
          <Button className="w-fit">Save</Button>
        </form>
        <div className="mt-3 pb-6">
          <h3 className="font-bold"> Ensemble subscription</h3>
          <hr className="border-b border-gray my-3" />
          <p> You can cancel your ensemble subscription any time</p>
          <CancelMembership />
        </div>
      </div>
    </div>
  );
};

export default Settings;
