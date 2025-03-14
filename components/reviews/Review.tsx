import { ReviewProps } from "@/app/types";
import React, { FC } from "react";
import { BsStarFill } from "react-icons/bs";

const Review: FC<ReviewProps> = ({
  content,
  createdAt,
  images,
  img,
  stars,
  username,
}) => {
  return (
    <div className="border-b-2 border-gray-300 py-5" key={createdAt}>
      <div className="flex gap-3">
        <img src={img} alt="" className="size-14 rounded-full" />
        <div className="flex flex-col">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span>{username}</span>
              <div className="flex gap-1 items-center my-2 mt-1">
                {Array.from({ length: stars }).map((_) => (
                  <BsStarFill className="text-yellow-400" />
                ))}
              </div>
            </div>
            <span>on {createdAt}</span>
          </div>
          <p className="text-xs">{content}</p>
          <div className="flex gap-5 mt-3">
            {images?.map((img) => (
              <img src={img} className="size-20 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
