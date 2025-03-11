import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
} from "./ui/dialog";

const Following = () => {
  return (
    <div className="bg-white z-50 rounded-lg shadow-md text-black inset-0 absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 size-[500px]">
      <Dialog>
        <DialogClose>x</DialogClose>
        <DialogDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quia
          ducimus temporibus sint, autem omnis provident animi impedit
          cupiditate adipisci reiciendis. Animi possimus officiis culpa
          voluptatibus minima. Blanditiis, quas molestias!
        </DialogDescription>
        <DialogContent>
          <p className="text-red-500">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            fuga ipsa, eaque quo molestiae temporibus ipsum eveniet error
            aliquid cupiditate, facilis, itaque quaerat. Dolorum modi aspernatur
            molestiae perspiciatis eveniet odio.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Following;
