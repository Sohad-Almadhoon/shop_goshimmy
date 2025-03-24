"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Reviews from "@/components/reviews/Reviews";
import ProfileInfo from "@/components/profile/shared/ProfileInfo";
import Filters from "@/components/shared/Filters";
import { twMerge } from "tailwind-merge";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="relative">
      <ProfileInfo />
      <div className="lg:px-36 max-w-screen-2xl w-full mx-auto">
        <Tabs defaultValue="tab1" onValueChange={setActiveTab}>
          <TabsList className="flex justify-center">
            <TabsTrigger
              value="tab1"
              className={twMerge(
                activeTab === "tab1" && "border-b-2 border-primary"
              )}>
              Current List
            </TabsTrigger>
            <TabsTrigger
              value="tab2"
              className={twMerge(
                activeTab === "tab2" && "border-b-2 border-primary"
              )}>
              Sold Listings
            </TabsTrigger>
            <TabsTrigger
              value="tab3"
              className={twMerge(
                activeTab === "tab3" && "border-b-2 border-primary"
              )}>
              Reviews (10)
            </TabsTrigger>
          </TabsList>
          <div className="md:flex lg:px-0 px-4 hidden">
            <span className="font-bold basis-4/5">
              {activeTab !== "tab3" ? "Filters by" : "Reviews"}
            </span>
            <div className="flex gap-5 basis-1/5 items-center">
              <span className=" whitespace-nowrap">Sort by</span>
              <Select>
                <SelectTrigger>Recent</SelectTrigger>
              </Select>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:gap-10 mt-4">
            {activeTab !== "tab3" && <Filters />}

            {/* Main Content Area */}
            <div className="flex-grow">
              <TabsContent value="tab1">
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 pb-5 lg:px-0 px-5">
                  {Array.from({ length: 12 }).map((_, index) => (
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
              </TabsContent>

              <TabsContent value="tab2">
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 pb-5 lg:px-0 px-5">
                  {Array.from({ length: 12 }).map((_, index) => (
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
              </TabsContent>

              {/* Reviews Section */}
              <TabsContent value="tab3">
                {/* Full-width Reviews */}
                <div className="w-full lg:px-0 px-5">
                  <Reviews />
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;
