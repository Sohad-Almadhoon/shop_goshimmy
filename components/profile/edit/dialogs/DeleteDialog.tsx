import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React from "react";
import { BiTrash } from "react-icons/bi";

const DeleteDialog = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <BiTrash className="text-primary border-2 text-4xl p-1 rounded-full border-primary" />
      </AlertDialogTrigger>
      <AlertDialogContent className="lg:max-w-md max-w-md p-6 rounded-lg bg-white text-black">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl">
            {" "}
            Are you sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-lg">
            Are you sure you want to delete this conversation?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex gap-3">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Yes, delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialog;
