import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../ui/tabs";
import Purchase from "./Purchase";
import Sales from "./Sales";
import Listing from "./Listing";
import Likes from "./Likes";
import Settings from "./Settings";

import {
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select,
  SelectContent,
} from "@/components/ui/select";
import { twMerge } from "tailwind-merge";
import { tabs } from "@/helpers/mockData";

const Account = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");

  const handleSelectChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <div className="min-h-screen lg:pb-16 pb-4">
      {/* Mobile View: Dropdown */}
      <div className="block md:hidden p-4">
        <Select value={selectedTab} onValueChange={handleSelectChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select Tab" />
          </SelectTrigger>
          <SelectContent className="bg-white shadow-md rounded-md">
            {tabs.map((tab) => (
              <SelectItem key={tab.value} value={tab.value}>
                <div className="flex items-center gap-1 p-2">
                  {" "}
                  {tab.icon && (
                    <span className="mr-2">
                      <tab.icon />
                    </span>
                  )}
                  {tab.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Desktop View: Tabs */}
      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="hidden md:flex min-h-screen bg-lightGray shadow-lg rounded-l-lg">
        <TabsList className="flex flex-col items-start pt-5">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={twMerge(
                selectedTab === tab.value &&
                  "bg-white transition-all duration-300",
                "w-full flex justify-start gap-1 px-3 py-2 text-lg hover:bg-white/70 cursor-pointer"
              )}>
              {tab.icon && (
                <span className="mr-2">
                  <tab.icon />
                </span>
              )}
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Tab Content */}
        <div className="bg-white shadow-lg w-full p-4">
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              {tab.value === "tab1" && <Purchase />}
              {tab.value === "tab2" && <Sales />}
              {tab.value === "tab3" && <Listing />}
              {tab.value === "tab4" && <Likes />}
              {tab.value === "tab5" && <div>GoShimmy Bucks</div>}
              {tab.value === "tab6" && <Settings />}
            </TabsContent>
          ))}
        </div>
      </Tabs>

      {/* Mobile Content Rendering */}
      <div className="block md:hidden">
        {selectedTab === "tab1" && <Purchase />}
        {selectedTab === "tab2" && <Sales />}
        {selectedTab === "tab3" && <Listing />}
        {selectedTab === "tab4" && <Likes />}
        {selectedTab === "tab5" && <div>GoShimmy Bucks</div>}
        {selectedTab === "tab6" && <Settings />}
      </div>
    </div>
  );
};

export default Account;
