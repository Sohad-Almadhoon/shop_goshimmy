import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import React from "react";

const CancelThanksDialog = () => {
  return (
    <AlertDialog open={true}>
      <AlertDialogContent className="lg:max-w-md max-w-md p-6 rounded-lg bg-white text-black">
        <AlertDialogHeader>
          <AlertDialogDescription className="text-xl font-bold">
            Thanks for letting us know! You can rejoin Ensemble at any time.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default  CancelThanksDialog;
