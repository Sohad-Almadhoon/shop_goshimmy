import React from "react";
import Searchbar from "./Searchbar";
import { listData } from "@/helpers/mockData";

const Listing = () => {
  return (
    <div className="px-10">
      <Searchbar title="My Listings" />
      <div className="grid grid-cols-4 border-b border-gray pb-3 *:font-bold">
        <span>{listData.item.label}</span>
        <span>{listData.price.label}</span>
        <span>{listData.size.label}</span>
        <span>{listData.status.label}</span>
      </div>
      <div className="grid grid-cols-4 mt-4 *:flex *:flex-col *:gap-3">
        <div>
          {listData.item.data.map((item, index) => (
            <div
              className="flex items-center gap-2 text-primary border-b border-gray h-10 pb-2"
              key={item.name + index}>
              <img
                src={item.img}
                alt={item.name}
                className="size-8 rounded-lg"
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div>
          {listData.price.data.map((item, index) => (
            <span className="border-b border-gray h-10" key={index}>
              {item}
            </span>
          ))}
        </div>
        <div>
          {" "}
          {listData.size.data.map((item, index) => (
            <span className="border-b border-gray h-10" key={index}>
              {item}
            </span>
          ))}
        </div>
        <div>
          {" "}
          {listData.status.data.map((item, index) => (
            <span className="border-b border-gray h-10" key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listing;
