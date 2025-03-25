import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { productInfo, recommendedProducts } from "@/helpers/mockData";
import React from "react";
import { BiMessage } from "react-icons/bi";
import { BsHeart, BsStarFill } from "react-icons/bs";
import { HiShare } from "react-icons/hi2";

const Product = () => {
  const { user, name, price, ...profuctItem } = productInfo;
  return (
    <div className="px-36">
      <div className="flex justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="text-primary font-bold text-base">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-placeholder" />
            <BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-primary font-bold text-base">
                  Explore
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-placeholder" />
              <BreadcrumbItem className="text-primary font-bold text-base">
                Girls Halter Leotard
              </BreadcrumbItem>

              <BreadcrumbPage className="flex"></BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex gap-3 *:font-bold *:px-5 *:py-2">
          <Button variant="outline">
            <BiMessage /> Message Seller
          </Button>
          <Button variant="outline">
            <BsHeart /> Like
          </Button>
          <Button variant="outline">
            <HiShare /> Share
          </Button>
        </div>
      </div>
      <div className="flex pb-20 mt-10">
        {" "}
        <div className="flex-1">Slider</div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">{name}</h3>
          <span>${price}</span>
          <div className="flex gap-3 mt-4">
            <img
              src={user.image}
              alt={user.username}
              className="size-11 rounded-full"
            />
            <div className="flex flex-col">
              <span>{user.username}</span>
              <span className="flex gap-2">
                <div className="flex gap-1 items-center my-2 mt-1">
                  {Array.from({ length: user.review.stars }).map((_, index) => (
                    <BsStarFill className="text-success" key={index} />
                  ))}
                </div>
                ({user.review.number})
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            {Object.entries(profuctItem).map(([key, value]) => (
              <div className="flex items-center space-y-2">
                <span className="flex-1 max-w-36 font-bold">{key}</span>
                <span className="flex-1">{value}</span>
              </div>
            ))}
          </div>
          <Button className="text-white mt-5"> Add to Cart</Button>
        </div>
      </div>
      <div className="pb-10">
        <h3 className="text-lg font-bold mb-3"> Recommended for you</h3>
        <div className="grid grid-cols-8 gap-5">
          {recommendedProducts.map((item) => (
            <div>
              <img src={item.image} alt="" className=" rounded-lg size-36" />
              <div className="mt-2 flex flex-col">
                <span>{item.title}</span>
                <span className="text-placeholder">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-5 border-t border-gray">
        <div className="mb-3 flex gap-5">
          {" "}
          <h3 className="text-lg font-bold">Other items sold by</h3>
          <div className="flex gap-2 items-center">
            <img
              src={user.image}
              alt={user.username}
              className="size-8 rounded-full"
            />
            <span>{user.username}</span>{" "}
          </div>
        </div>
        <div className="grid grid-cols-8 gap-5">
          {recommendedProducts.map((item) => (
            <div>
              <img src={item.image} alt="" className=" rounded-lg size-36" />
              <div className="mt-2 flex flex-col">
                <span>{item.title}</span>
                <span className="text-placeholder">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
