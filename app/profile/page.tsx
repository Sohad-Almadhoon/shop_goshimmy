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
import { accordionItems } from "../helpers/data";
import { Button } from "@/components/ui/button";
import BrandSearch from "@/components/BrandSearch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        <div className="flex">
          <div className="flex-1 mr-10">
            <span className="font-bold mb-10 block">Filter by</span>
            <div className="flex flex-col gap-4">
              <RadioGroup>
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="radio-1" value="Rehearsal Wear" />
                  <Label htmlFor="radio-1">Rehearsal Wear</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="radio-2" value="Costumes" />
                  <Label htmlFor="radio-2">Costumes</Label>
                </div>
              </RadioGroup>
              <hr />
            </div>
            <Accordion type="single" collapsible>
              {accordionItems.map(
                ({ id, label, content, isColor, isBrands }) => (
                  <AccordionItem value={id} key={id}>
                    <AccordionTrigger>{label}</AccordionTrigger>
                    <AccordionContent>
                      {isBrands ? (
                        <BrandSearch />
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
          <Tabs defaultValue="tab1" value="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Current List </TabsTrigger>
              <TabsTrigger value="tab2">Sold Listings</TabsTrigger>
              <TabsTrigger value="tab3">Reviews (10)</TabsTrigger>
            </TabsList>

            <TabsContent value="tab1">
              <div className="flex items-center gap-6 justify-end">
                <span className="text-sm whitespace-nowrap font-semibold">
                  Sort by
                </span>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Popular" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Popular</SelectItem>
                  </SelectContent>
                </Select>
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
            </TabsContent>
            <TabsContent value="tab2">
              {" "}
              <div className="flex items-center gap-6">
                <span className="text-sm whitespace-nowrap font-semibold">
                  Sort by
                </span>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Popular" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Popular</SelectItem>
                  </SelectContent>
                </Select>
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
            </TabsContent>
            <TabsContent value="tab3">
              <div className="flex items-center gap-6">
                <span className="text-sm whitespace-nowrap font-semibold">
                  Sort by
                </span>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Recent" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Recent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
