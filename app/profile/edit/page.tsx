"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { BiUpload } from "react-icons/bi";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Account from "@/components/profile/edit/account/Account";
import { BsEye } from "react-icons/bs";
import Messages from "@/components/profile/edit/messages/Messages";
import { twMerge } from "tailwind-merge";

interface FormData {
  username: string;
  bio: string;
  instagram: string;
  tiktok: string;
}

const EditProfile = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [selectedTab, setSelectedTab] = useState("tab1");

  const handleSelectChange = (value: string) => {
    setSelectedTab(value);
  };
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Tabs
      value={selectedTab}
      onValueChange={handleSelectChange}
      defaultValue="tab1"
      className="flex justify-center flex-col mt-10 lg:mx-24 mx-3">
      <TabsList className="flex justify-center items-center gap-4">
        {[
          { value: "tab1", label: "My Account" },
          { value: "tab2", label: "My Messages" },
          { value: "tab3", label: "Edit Profile" },
          {
            value: "tab4",
            label: "View Public Profile",
            icon: <BsEye className="mr-1" />,
          },
        ].map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            onClick={() => setSelectedTab(tab.value)}
            className={twMerge(
              "transition-all duration-300 ease-in-out flex items-center",
              selectedTab === tab.value &&
                "border-b-4 border-primary"
            )}>
            {tab.icon} {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="tab1">
        <Account />
      </TabsContent>
      <TabsContent value="tab2">
        <Messages />
      </TabsContent>
      <TabsContent value="tab3">
        <div className="flex justify-center items-center my-5 flex-1 mx-24">
          <Card className="text-left p-6 self-start flex-1 flex flex-col items-start">
            <div>
              {" "}
              <span className="font-bold text-xl">Edit Profile</span>
              <div className="flex items-center gap-2 mt-6">
                <img
                  src="/images/profile-img.png"
                  alt="Profile"
                  className=" w-20 h-20 rounded-full"
                />
                <BiUpload className="text-primary font-semibold" />
                <span className="text-primary text-sm font-semibold">
                  Upload new photo
                </span>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                <div className="mt-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-semibold">
                    Username
                  </label>
                  <Input
                    {...register("username")}
                    id="username"
                    placeholder="Username"
                    className="mt-2"
                  />
                </div>

                <div className="mt-4">
                  <label htmlFor="bio" className="block text-sm font-semibold">
                    Bio
                  </label>
                  <Textarea
                    {...register("bio")}
                    id="bio"
                    placeholder="Tell other Buyers and Sellers a bit about you and your shop!"
                    className="mt-2 w-[376px] min-h-[150px]"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="instagram"
                    className="block text-sm font-semibold">
                    Instagram
                  </label>
                  <Input
                    {...register("instagram")}
                    id="instagram"
                    placeholder="@JaneDoe"
                    className="mt-2"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="tiktok"
                    className="block text-sm font-semibold">
                    TikTok
                  </label>
                  <Input
                    {...register("tiktok")}
                    id="tiktok"
                    placeholder="@JaneDoe"
                    className="mt-2"
                  />
                </div>

                <div className="flex gap-2 mt-6 justify-start">
                  <Button type="submit">Save</Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-gray">
                    Discard
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="tab4">
        <p>This is the content of Tab 3</p>
      </TabsContent>
    </Tabs>
  );
};

export default EditProfile;
