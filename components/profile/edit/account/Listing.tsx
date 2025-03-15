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
    <div className="lg:px-10 px-3">
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
      <div className="block md:hidden space-y-4 border-t border-gray pt-3">
        {listData.item.data.map((item, index) => (
          <div className="flex gap-4 border-b border-gray pb-3" key={index}>
            <img
              src={item.img}
              alt={item.name}
              className="size-12 rounded-lg flex-2 object-cover"
            />
            <div key={item.name + index} className=" flex-1">
              <div className="flex items-center w-full">
                <p className="font-bold flex-1">{listData.item.label}</p>{" "}
                <p className="text-primary font-bold flex-1">{item.name}</p>
              </div>
              <p className="flex">
                <span className="font-bold flex-1">{listData.price.label}</span>{" "}
                <span className="flex-1">{listData.price.data[index]}</span>
              </p>
              <p className="flex">
                <span className="font-bold flex-1">{listData.size.label}</span>{" "}
                <span className="flex-1">{listData.size.data[index]}</span>
              </p>

              <p className="flex">
                <span className="font-bold flex-1">
                  {listData.status.label}
                </span>{" "}
                <span className="flex-1">{listData.status.data[index]}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
