import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { BiLike, BiPurchaseTag, BiSmile, BiSolidAnalyse } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import Purchase from "./Purchase";
import Sales from "./Sales";
import Listing from "./Listing";
import Likes from "./Likes";
import Settings from "./Settings";
import { SettingsIcon } from "lucide-react";

const Account = () => {
  return (
    <div className="min-h-screen pb-16">
      <Tabs defaultValue="tab1" className=" min-h-screen bg-lightGray flex">
        <TabsList className="flex  min-w-64 p-5 flex-col items-start *:flex *:items-center *:gap-2">
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
            <BiSmile />
            GoShimmy Bucks
          </TabsTrigger>
          <TabsTrigger value="tab6">
            <SettingsIcon className="size-4" /> Settings
          </TabsTrigger>
          <TabsTrigger value="tab7"> Log out</TabsTrigger>
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
          <TabsContent value="tab6" className="flex-3">
            <Settings />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Account;
