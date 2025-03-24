import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Searchbar from "./Searchbar";
import { purchaseData } from "@/helpers/mockData";
import ReviewDialog from "@/components/profile/account/dialogs/ReviewDialog";

const Purchase = () => {
  return (
    <div className="lg:px-10 px-3">
      <Searchbar title="My purchases" />
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{purchaseData.item.label}</TableHead>
              <TableHead>{purchaseData.seller.label}</TableHead>
              <TableHead>{purchaseData.order.label}</TableHead>
              <TableHead>{purchaseData.price.label}</TableHead>
              <TableHead>{purchaseData.status.label}</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {purchaseData.item.data.map((item, index) => (
              <TableRow key={item.name + index}>
                <TableCell className="flex items-center gap-2 text-primary">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="size-8 rounded-lg"
                  />
                  {item.name}
                </TableCell>
                <TableCell>{purchaseData.seller.data[index]}</TableCell>
                <TableCell>{purchaseData.order.data[index]}</TableCell>
                <TableCell>{purchaseData.price.data[index]}</TableCell>
                <TableCell>{purchaseData.status.data[index]}</TableCell>
                <TableCell>
                  <ReviewDialog />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="block md:hidden space-y-4 border-t border-gray pt-3">
        {purchaseData.item.data.map((item, index) => (
          <div className="flex gap-4 border-b border-gray pb-3 " key={index}>
            <img
              src={item.img}
              alt={item.name}
              className="size-12 rounded-lg flex-2 object-cover"
            />
            <div key={item.name + index} className="flex-1">
              <div className="flex items-center w-full">
                <p className="font-bold flex-1">{purchaseData.item.label}</p>{" "}
                <p className="text-primary font-bold flex-1">{item.name}</p>
              </div>
              <p className="flex">
                <span className="font-bold flex-1">
                  {purchaseData.seller.label}
                </span>{" "}
                <span className="flex-1">
                  {purchaseData.seller.data[index]}
                </span>
              </p>
              <p className="flex">
                <span className="font-bold flex-1">
                  {purchaseData.order.label}
                </span>{" "}
                <span className="flex-1">{purchaseData.order.data[index]}</span>
              </p>
              <p className="flex">
                <span className="font-bold flex-1">
                  {purchaseData.price.label}
                </span>{" "}
                <span className="flex-1">
                  {" "}
                  {purchaseData.price.data[index]}
                </span>
              </p>
              <p className="flex">
                <span className="font-bold flex-1">
                  {purchaseData.status.label}
                </span>{" "}
                <span className="flex-1">
                  {purchaseData.status.data[index]}
                </span>
              </p>
              <ReviewDialog />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchase;
