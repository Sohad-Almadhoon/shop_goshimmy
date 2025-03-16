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
import ProfileInfo from "@/components/profile/ProfileInfo";
import Filters from "@/components/profile/Filters";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="relative">
      <ProfileInfo />
      <div className="lg:px-36 max-w-screen-2xl w-full mx-auto">
        <Tabs defaultValue="tab1" onValueChange={setActiveTab}>
          <TabsList className="flex justify-center">
            <TabsTrigger value="tab1">Current List</TabsTrigger>
            <TabsTrigger value="tab2">Sold Listings</TabsTrigger>
            <TabsTrigger value="tab3">Reviews (10)</TabsTrigger>
          </TabsList>

          <div className="flex lg:flex-row flex-col lg:gap-10 mt-4">
            {/* Sidebar Filters - Show only in tab1 and tab2 */}
            {activeTab !== "tab3" && (
              <div className="w-64 flex-shrink-0">
                <Filters />
              </div>
            )}

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
                <div className="flex items-center justify-between mb-4 border-gray border-b-2 pb-2 lg:px-0 px-5">
                  <span className="font-bold">Reviews</span>
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
                </div>
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
