import React from "react";
import Searchbar from "./Searchbar";
import { Card } from "@/components/ui/card";

const Likes = () => {
  return (
    <div className="p-5">
      <Searchbar title="My Likes" />
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 pb-5 lg:px-0 px-5">
        {Array.from({ length: 7 }).map((_, index) => (
          <Card
            key={index}
            className="flex flex-col p-0 text-left overflow-hidden">
            <img
              src="/images/palle.jpg"
              alt=""
              className="w-full h-48 object-cover"
            />
            <div className="p-3 flex flex-col">
              <span className="font-bold">Ballet shoes</span>
              <span>Size: S</span>
              <span>$15</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Likes;
