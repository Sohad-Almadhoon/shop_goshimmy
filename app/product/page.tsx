import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { productInfo, recommendedProducts } from "@/helpers/mockData";
import React from "react";
import { BiMessage } from "react-icons/bi";
import { BsHeart, BsStarFill } from "react-icons/bs";
import { HiShare } from "react-icons/hi2";

const Product = () => {
  const { user, name, price, ...productItem } = productInfo;
  return (
    <div className="px-4 sm:px-10 lg:px-36">
      <div className="flex justify-between items-center">
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
              <BreadcrumbLink
                href="/explore"
                className="text-primary font-bold text-base">
                Explore
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-placeholder" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary font-bold text-base">
                {name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="font-bold px-5 py-2 flex items-center gap-2">
            <BiMessage /> Message Seller
          </Button>
          <Button
            variant="outline"
            className="font-bold px-5 py-2 flex items-center gap-2">
            <BsHeart /> Like
          </Button>
          <Button
            variant="outline"
            className="font-bold px-5 py-2 flex items-center gap-2">
            <HiShare /> Share
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row pb-20 mt-10 gap-10">
        <div className="flex-1">
          <Carousel>
            <CarouselContent>
              {productInfo.images.map((image, index) => (
                <CarouselItem key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="w-full h-auto rounded-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">{name}</h3>
          <span className="text-lg font-semibold">${price}</span>
          <div className="flex gap-3 mt-4 items-center">
            <img
              src={user.image}
              alt={user.username}
              className="size-11 rounded-full"
            />
            <div className="flex flex-col">
              <span>{user.username}</span>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {Array.from({ length: user.review.stars }).map((_, index) => (
                    <BsStarFill className="text-success" key={index} />
                  ))}
                </div>
                ({user.review.number})
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-5">
            {Object.entries(productItem).map(([key, value]) => (
              <div key={key} className="flex items-center py-1">
                <span className="flex-1 max-w-36 font-bold capitalize">
                  {key.replace(/_/g, " ")}
                </span>
                <span className="flex-1">{value}</span>
              </div>
            ))}
          </div>
          <Button className="text-white mt-5 w-full">Add to Cart</Button>
        </div>
      </div>
      <div className="pb-10">
        <h3 className="text-lg font-bold mb-3">Recommended for you</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5">
          {recommendedProducts.map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg size-36"
              />
              <div className="mt-2 flex flex-col">
                <span>{item.title}</span>
                <span className="text-placeholder">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-5 border-t border-gray">
        <div className="mb-3 flex flex-col md:flex-row gap-5 items-center">
          <h3 className="text-lg font-bold">Other items sold by</h3>
          <div className="flex gap-2 items-center">
            <img
              src={user.image}
              alt={user.username}
              className="size-8 rounded-full"
            />
            <span>{user.username}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5">
          {recommendedProducts.map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg size-36"
              />
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
