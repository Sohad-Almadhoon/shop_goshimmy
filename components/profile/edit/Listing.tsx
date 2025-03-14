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
import { listData } from "@/helpers/mockData";

const Listing = () => {
  return (
    <div className="px-10">
      <Searchbar title="My Listings" />
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{listData.item.label}</TableHead>
              <TableHead>{listData.price.label}</TableHead>
              <TableHead>{listData.size.label}</TableHead>
              <TableHead>{listData.status.label}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listData.item.data.map((item, index) => (
              <TableRow key={item.name + index}>
                <TableCell className="flex items-center gap-2 text-primary">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="size-8 rounded-lg"
                  />
                  {item.name}
                </TableCell>
                <TableCell>{listData.price.data[index]}</TableCell>
                <TableCell>{listData.size.data[index]}</TableCell>
                <TableCell>{listData.status.data[index]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="block md:hidden space-y-4">
        {listData.item.data.map((item, index) => (
          <div key={item.name + index} className="border rounded-lg p-4 shadow">
            <div className="flex items-center gap-2 text-primary">
              <img
                src={item.img}
                alt={item.name}
                className="size-8 rounded-lg"
              />
              <p className="font-bold">{listData.item.label}:</p> {item.name}
            </div>
            <p>
              <span className="font-bold">{listData.price.label}:</span>{" "}
              {listData.price.data[index]}
            </p>
            <p>
              <span className="font-bold">{listData.size.label}:</span>{" "}
              {listData.size.data[index]}
            </p>
            <p>
              <span className="font-bold">{listData.status.label}:</span>{" "}
              {listData.status.data[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
