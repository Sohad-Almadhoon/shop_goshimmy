import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { BiLike, BiPurchaseTag, BiSmile } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { Settings } from "lucide-react";
import { Input } from "../ui/input";

const Account = () => {
  return (
    <div className="min-h-screen pb-5">
      <Tabs defaultValue="tab1" className=" min-h-screen bg-lightGray flex">
        <TabsList className="flex  min-w-64 p-5 flex-col items-start *:flex *:items-center *:gap-2">
          <TabsTrigger value="tab1">
            <BiPurchaseTag /> My Purchases
          </TabsTrigger>
          <TabsTrigger value="tab2">
            <BsPerson /> My Listings
          </TabsTrigger>
          <TabsTrigger value="tab3">
            <BiLike /> My Likes
          </TabsTrigger>
          <TabsTrigger value="tab3">
            <BiSmile />
            GoShimmy Bucks
          </TabsTrigger>
          <TabsTrigger value="tab3">
            <Settings className="size-4" /> Settings
          </TabsTrigger>
          <TabsTrigger value="tab3"> Log out</TabsTrigger>
        </TabsList>
        <div className="bg-white shadow-lg w-full">
          <TabsContent value="tab1" className="flex-3">
            <div className="flex justify-between items-center px-5">
              <span className="font-bold"> My Purchases</span>
              <Input className="w-60"/>
            </div>
            <div className="grid grid-cols-6 p-4 *:flex *:flex-col *:gap-3">
              <div>
                <span className="font-bold border-b pb-3">Item</span>
                <span className="text-primary"> Ballet shoes</span>
                <span className="text-primary"> Ballet shoes</span>
              </div>
              <div>
                <span className="font-bold border-b pb-3">Seller</span>
                <span className="text-primary"> Seller name</span>
                <span className="text-primary"> Seller name</span>
              </div>
              <div>
                <span className="font-bold border-b pb-3"> Order Number</span>
                <span className="text-primary"> asd123</span>
                <span className="text-primary"> asdasd2213</span>
              </div>
              <div>
                <span className="font-bold border-b pb-3">Price</span>
                <span> $16.00</span>
                <span> $15.22</span>
              </div>
              <div>
                <span className="font-bold border-b pb-3">Status</span>
                <span> Ordered</span>
                <span> Delivered</span>
              </div>
              <div>
                <span className="font-bold border-b pb-3">Reviews</span>
                <span className="text-primary"> Leave a review</span>
                <span className="text-primary"> Leave a review</span>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Account;
