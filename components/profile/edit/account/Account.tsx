import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../ui/tabs";
import { BiLike, BiPurchaseTag, BiSmile, BiSolidAnalyse } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import Purchase from "./Purchase";
import Sales from "./Sales";
import Listing from "./Listing";
import Likes from "./Likes";
import Settings from "./Settings";
import { SettingsIcon } from "lucide-react";
import {
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select,
  SelectContent,
} from "@/components/ui/select";

const Account = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");

  const handleSelectChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <div className="min-h-screen lg:pb-16 pb-4">
      <div className="block md:hidden p-4">
        <Select value={selectedTab} onValueChange={handleSelectChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select Tab" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tab1">My Purchases</SelectItem>
            <SelectItem value="tab2">My Sales</SelectItem>
            <SelectItem value="tab3">My Listings</SelectItem>
            <SelectItem value="tab4">My Likes</SelectItem>
            <SelectItem value="tab5">GoShimmy Bucks</SelectItem>
            <SelectItem value="tab6">Settings</SelectItem>
            <SelectItem value="tab7">Log out</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Desktop View: Tabs */}
      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="hidden md:flex min-h-screen bg-lightGray">
        <TabsList className="flex min-w-64 p-5 flex-col items-start *:flex *:gap-1 *:items-center">
          <TabsTrigger value="tab1">
            <BiPurchaseTag /> My Purchases
          </TabsTrigger>
          <TabsTrigger value="tab2">
            <BiSolidAnalyse /> My Sales
          </TabsTrigger>
          <TabsTrigger value="tab3">
            <BsPerson /> My Listings
          </TabsTrigger>
          <TabsTrigger value="tab4">
            <BiLike /> My Likes
          </TabsTrigger>
          <TabsTrigger value="tab5">
            <BiSmile /> GoShimmy Bucks
          </TabsTrigger>
          <TabsTrigger value="tab6">
            <SettingsIcon className="size-4" /> Settings
          </TabsTrigger>
          <TabsTrigger value="tab7">Log out</TabsTrigger>
        </TabsList>

        <div className="bg-white shadow-lg w-full">
          <TabsContent value="tab1" className="flex-3">
            <Purchase />
          </TabsContent>
          <TabsContent value="tab2" className="flex-3">
            <Sales />
          </TabsContent>
          <TabsContent value="tab3" className="flex-3">
            <Listing />
          </TabsContent>
          <TabsContent value="tab4" className="flex-3">
            <Likes />
          </TabsContent>
          <TabsContent value="tab5" className="flex-3">
            <span>GoShimmy Bucks</span>
          </TabsContent>
          <TabsContent value="tab6" className="flex-3">
            <Settings />
          </TabsContent>
        </div>
      </Tabs>

      {/* Mobile Content Rendering */}
      <div className="block md:hidden">
        {selectedTab === "tab1" && <Purchase />}
        {selectedTab === "tab2" && <Sales />}
        {selectedTab === "tab3" && <Listing />}
        {selectedTab === "tab4" && <Likes />}
        {selectedTab === "tab5" && <div>GoShimmy Bucks</div>}{" "}
        {/* Add your content here */}
        {selectedTab === "tab6" && <Settings />}
      </div>
    </div>
  );
};

export default Account;
