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
import { salesData } from "@/helpers/mockData";
import { redirect } from "next/navigation";
const Sales = () => {
  return (
    <div className="lg:px-10 px-3">
      <Searchbar title="My Sales" />
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{salesData.item.label}</TableHead>
              <TableHead>{salesData.buyer.label}</TableHead>
              <TableHead>{salesData.order.label}</TableHead>
              <TableHead>{salesData.earnings.label}</TableHead>
              <TableHead>{salesData.shipping.label}</TableHead>
              <TableHead>{salesData.payment.label}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salesData.item.data.map((item, index) => (
              <TableRow
                key={item.name + index}
                onClick={() => redirect("/profile/sales")}
                className=" cursor-pointer">
                <TableCell className="flex items-center gap-2 text-primary">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="size-8 rounded-lg"
                  />
                  {item.name}
                </TableCell>
                <TableCell>{salesData.buyer.data[index]}</TableCell>
                <TableCell>{salesData.order.data[index]}</TableCell>
                <TableCell>{salesData.earnings.data[index]}</TableCell>
                <TableCell>{salesData.shipping.data[index]}</TableCell>
                <TableCell>{salesData.payment.data[index]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="block md:hidden space-y-4 border-t border-gray pt-3">
        {salesData.item.data.map((item, index) => (
          <div
            onClick={() => redirect("/profile/sales")}
            className="flex cursor-pointer gap-4 border-b border-gray pb-3"
            key={index}>
            <img
              src={item.img}
              alt={item.name}
              className="size-12 rounded-lg flex-2 object-cover"
            />
            <div key={item.name + index} className=" flex-1">
              <div className="flex items-center w-full">
                <p className="font-bold flex-1">{salesData.item.label}</p>{" "}
                <p className="text-primary font-bold flex-1">{item.name}</p>
              </div>
              <p className="flex">
                <span className="font-bold flex-1">
                  {salesData.buyer.label}
                </span>{" "}
                <span className="flex-1">{salesData.buyer.data[index]}</span>
              </p>
              <p className="flex">
                <span className="font-bold flex-1">
                  {salesData.order.label}
                </span>{" "}
                <span className="flex-1">{salesData.order.data[index]}</span>
              </p>

              <p className="flex">
                <span className="font-bold flex-1">
                  {salesData.earnings.label}
                </span>{" "}
                <span className="flex-1">{salesData.earnings.data[index]}</span>
              </p>
              <p className="flex">
                <span className="font-bold flex-1">
                  {salesData.shipping.label}
                </span>{" "}
                <span className="flex-1">{salesData.shipping.data[index]}</span>
              </p>
              <p className="flex">
                <span className="font-bold flex-1">
                  {salesData.payment.label}
                </span>{" "}
                <span className="flex-1">{salesData.payment.data[index]}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sales;
