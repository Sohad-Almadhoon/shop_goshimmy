import React from "react";
import {
  BsInstagram,
  BsPencilFill,
  BsStarFill,
  BsTiktok,
} from "react-icons/bs";
import { BiHeart, BiMessage } from "react-icons/bi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  accordionItems,
} from "../helpers/data";
import { Button } from "@/components/ui/button";
import BrandSearch from "@/components/BrandSearch";
import { Select } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const ProfilePage = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <img
          src="/images/profile-img.png"
          alt="profile-img"
          className="w-32 rounded-full object-cover"
        />
        <span className="font-semibold mt-3">First and Last Name</span>
        {false ? (
          <>
            <span className="text-secondary text-sm mb-5">
              12497 following | 862 followers
            </span>
            <Button
              variant="outline"
              className="flex items-center gap-2 text-sm font-bold px-2 text-primary border-secondary border">
              <BsPencilFill /> <span>Edit Profile</span>
            </Button>
          </>
        ) : (
          <div className="flex gap-3 items-center mt-3">
            <Button
              variant="outline"
              className="flex items-center gap-2 text-sm font-bold px-2 text-primary border-secondary border">
              <BiMessage /> <span>Message </span>
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 text-sm font-bold px-2 text-primary border-secondary border">
              <BiHeart /> <span>Follow</span>
            </Button>
            <Button
              variant="outline"
              className="p-2 rounded-full text-secondary_bold">
              <BsInstagram />
            </Button>
            <Button
              variant="outline"
              className="p-2 rounded-full text-secondary_bold">
              {" "}
              <BsTiktok />
            </Button>
          </div>
        )}
        <div className="flex mt-3 items-center gap-2">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <BsStarFill key={index} className="size-7 text-success" />
            ))}
          <span>(10)</span>
        </div>
        <p className=" text-secondary_bold text-sm my-3">
          Hey there! Shop my collection of pre-loved items :) Fast shipping,
          message me with any questions
        </p>
      </div>
      <div className="px-36 mb-12">
        <div className="flex justify-between items-center mb-5">
          {" "}
          <span className="font-bold">Filter by</span>
          <div className="flex items-center gap-6">
            <span className="text-sm whitespace-nowrap">Sort by</span>
            <Select>
              <option value="Popular">Popular</option>
            </Select>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1 mr-10">
            <Accordion type="single" collapsible>
              {accordionItems.map(
                ({ id, label, content, isColor, isBrands }) => (
                  <AccordionItem value={id} key={id}>
                    <AccordionTrigger>{label}</AccordionTrigger>
                    <AccordionContent>
                      {isBrands ? (
                        <BrandSearch/>
                      ) : isColor ? (
                        <RadioGroup className="grid grid-cols-4 gap-3">
                          {content.map((color) => (
                            <div
                              key={color}
                              className="flex items-center justify-center">
                              <RadioGroupItem
                                id={color}
                                value={color}
                                className="h-6 w-6"
                                style={{ backgroundColor: color }}
                              />
                            </div>
                          ))}
                        </RadioGroup>
                      ) : (
                        <RadioGroup className="space-y-3">
                          {content.map((item) =>
                            typeof item === "string" ? (
                              <div
                                key={item}
                                className="flex items-center space-x-3">
                                <RadioGroupItem id={item} value={item} />
                                <Label htmlFor={item}>{item}</Label>
                              </div>
                            ) : (
                              <div
                                key={item.id}
                                className="flex items-center space-x-3">
                                <RadioGroupItem id={item.id} value={item.id} />
                                <Label htmlFor={item.id}>{item.label}</Label>
                              </div>
                            )
                          )}
                        </RadioGroup>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                )
              )}
            </Accordion>
          </div>
          <div className="grid grid-cols-4 gap-5 flex-3">
            {Array.from({ length: 12 }).map((_, index) => (
              <Card
                key={index}
                className="flex flex-col p-0 text-left overflow-hidden">
                <img
                  src="/images/palle.jpg"
                  alt=""
                  className="w-full object-cover"
                />
                <div className="p-3 flex-col flex">
                  <span className="font-bold"> Ballet shoes</span>
                  <span>Size: S</span>
                  <span>$15</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
