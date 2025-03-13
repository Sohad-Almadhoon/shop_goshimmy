import React from "react";

import { salesData } from "@/helpers/mockData";
import Searchbar from "./Searchbar";

const Sales = () => {
  return (
    <div className="px-10">
      <Searchbar title="My Sales" />
      <div className="grid grid-cols-6 border-b border-gray pb-3 *:font-bold">
        <span>{salesData.item.label}</span>
        <span>{salesData.buyer.label}</span>
        <span>{salesData.order.label}</span>
        <span>{salesData.earnings.label}</span>
        <span>{salesData.shipping.label}</span>
        <span>{salesData.payment.label}</span>
      </div>
      <div className="grid grid-cols-6 mt-4 *:flex *:flex-col *:gap-3">
        <div>
          {salesData.item.data.map((item, index) => (
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
          {salesData.buyer.data.map((item, index) => (
            <span className="border-b border-gray h-10" key={index}>
              {item}
            </span>
          ))}
        </div>
        <div>
          {" "}
          {salesData.order.data.map((item, index) => (
            <span className="border-b border-gray h-10" key={index}>
              {item}
            </span>
          ))}
        </div>
        <div>
          {" "}
          {salesData.earnings.data.map((item, index) => (
            <span className="border-b border-gray h-10" key={index}>
              {item}
            </span>
          ))}
        </div>
        <div>
          {" "}
          {salesData.shipping.data.map((item, index) => (
            <span className="border-b border-gray h-10" key={index}>
              {item}
            </span>
          ))}
        </div>
        <div>
          {" "}
          {salesData.payment.data.map((item, index) => (
            <span className="border-b border-gray h-10" key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sales;
