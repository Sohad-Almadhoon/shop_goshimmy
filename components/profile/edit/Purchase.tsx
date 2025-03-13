import React from "react";
import Searchbar from "./Searchbar";
import { purchaseData } from "@/helpers/mockData";

const Purchase = () => {
  return (
    <div className="px-10">
      <Searchbar title="My purchases" />
      <div className="grid grid-cols-6 border-b border-gray pb-3 *:font-bold">
        <span>{purchaseData.item.label}</span>
        <span>{purchaseData.seller.label}</span>
        <span>{purchaseData.order.label}</span>
        <span>{purchaseData.price.label}</span>
        <span>{purchaseData.status.label}</span>
        <span></span>
      </div>
      <div className="grid grid-cols-6 mt-4 *:flex *:flex-col *:gap-3">
        <div>
          {purchaseData.item.data.map((item, index) => (
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
          {purchaseData.seller.data.map((item, index) => (
            <span
              className="border-b border-gray h-10 text-primary"
              key={index}>
              {item}
            </span>
          ))}
        </div>
        <div>
          {" "}
          {purchaseData.order.data.map((item, index) => (
            <span
              className="border-b border-gray h-10 text-primary"
              key={index}>
              {item}
            </span>
          ))}
        </div>
        <div>
          {" "}
          {purchaseData.price.data.map((item) => (
            <span className="border-b border-gray h-10" key={item}>
              {item}
            </span>
          ))}
        </div>
        <div>
          {" "}
          {purchaseData.status.data.map((item) => (
            <span className="border-b border-gray h-10" key={item}>
              {item}
            </span>
          ))}
        </div>
        <div>
          {" "}
          {purchaseData.review.data.map((item, index) => (
            <span
              className="border-b border-gray h-10 text-primary cursor-pointer"
              key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Purchase;
