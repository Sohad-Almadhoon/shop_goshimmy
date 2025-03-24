import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import React from "react";

const CancelThanksDialog = () => {
  return (
    <AlertDialog open={false}>
      <AlertDialogContent className="lg:max-w-md max-w-md p-6 rounded-lg bg-white text-black">
        <AlertDialogHeader>
          <AlertDialogTitle className=" sr-only">Hi</AlertDialogTitle>
          <AlertDialogDescription className="text-xl font-bold">
            Thanks for letting us know! You can rejoin Ensemble at any time.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-primary">Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CancelThanksDialog;
