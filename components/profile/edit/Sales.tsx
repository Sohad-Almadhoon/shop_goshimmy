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

const Sales = () => {
  return (
    <div className="px-10">
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
              <TableRow key={item.name + index}>
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
      <div className="block md:hidden space-y-4">
        {salesData.item.data.map((item, index) => (
          <div key={item.name + index} className="border rounded-lg p-4 shadow">
            <div className="flex items-center gap-2 text-primary">
              <img
                src={item.img}
                alt={item.name}
                className="size-8 rounded-lg"
              />
              <p className="font-bold">{salesData.item.label}:</p> {item.name}
            </div>
            <p>
              <span className="font-bold">{salesData.buyer.label}:</span>{" "}
              {salesData.buyer.data[index]}
            </p>
            <p>
              <span className="font-bold">{salesData.order.label}:</span>{" "}
              {salesData.order.data[index]}
            </p>
            <p>
              <span className="font-bold">{salesData.earnings.label}:</span>{" "}
              {salesData.earnings.data[index]}
            </p>
            <p>
              <span className="font-bold">{salesData.shipping.label}:</span>{" "}
              {salesData.shipping.data[index]}
            </p>
            <p>
              <span className="font-bold">{salesData.payment.label}:</span>{" "}
              {salesData.payment.data[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sales;
