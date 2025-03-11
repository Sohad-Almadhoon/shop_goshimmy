import React from "react";
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
import ProfileInfo from "@/components/ProfileInfo";
import Filters from "@/components/Filters";

const ProfilePage = () => {
  return (
    <div className="relative">
      <ProfileInfo />
      <div className="px-36 max-w-screen-2xl w-full mx-auto">
        <Tabs defaultValue="tab1">
          <TabsList className="flex justify-center">
            <TabsTrigger value="tab1" className="underline">
              Current List
            </TabsTrigger>
            <TabsTrigger value="tab2">Sold Listings</TabsTrigger>
            <TabsTrigger value="tab3">Reviews (10)</TabsTrigger>
          </TabsList>

          <div className="flex gap-10 mt-4">
            {/* Sidebar Filters (Fixed Width) */}
            <div className="w-64 flex-shrink-0">
              {/* Render Filters only for tab1 and tab2 */}
              {["tab1", "tab2"].map((tab) => (
                <TabsContent key={tab} value={tab}>
                  <Filters />
                </TabsContent>
              ))}
            </div>

            {/* Main Content Area (Takes Remaining Space) */}
            <div className="flex-grow">
              {/* Product Listings for tab1 and tab2 */}
              {["tab1", "tab2"].map((tab) => (
                <TabsContent key={tab} value={tab}>
                  <div className="grid grid-cols-4 gap-5">
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
              ))}

              {/* Reviews Section */}
              <TabsContent value="tab3" forceMount>
                <div className="flex items-center justify-between mb-4 border-b-2 pb-2">
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
                <div className="w-full">
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
