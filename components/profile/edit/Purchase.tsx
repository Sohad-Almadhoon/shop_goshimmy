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

const Purchase = () => {
  return (
    <div className="px-10">
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
              <TableHead>Review</TableHead>
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
                <TableCell className="text-primary cursor-pointer">
                  {purchaseData.review.data[index]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="block md:hidden space-y-4">
        {purchaseData.item.data.map((item, index) => (
          <div key={item.name + index} className="border rounded-lg p-4 shadow">
            <div className="flex items-center gap-2 text-primary">
              <img
                src={item.img}
                alt={item.name}
                className="size-8 rounded-lg"
              />
              <p className="font-bold">{purchaseData.item.label}:</p>{" "}
              {item.name}
            </div>
            <p>
              <span className="font-bold">{purchaseData.seller.label}:</span>{" "}
              {purchaseData.seller.data[index]}
            </p>
            <p>
              <span className="font-bold">{purchaseData.order.label}:</span>{" "}
              {purchaseData.order.data[index]}
            </p>
            <p>
              <span className="font-bold">{purchaseData.price.label}:</span>{" "}
              {purchaseData.price.data[index]}
            </p>
            <p>
              <span className="font-bold">{purchaseData.status.label}:</span>{" "}
              {purchaseData.status.data[index]}
            </p>
            <p className="text-primary cursor-pointer">
              <span className="font-bold">Review:</span>{" "}
              {purchaseData.review.data[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchase;
