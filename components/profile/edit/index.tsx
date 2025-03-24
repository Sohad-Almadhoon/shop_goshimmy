"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Account from "@/components/profile/account";

import Messages from "@/components/profile/messages/Messages";
import { twMerge } from "tailwind-merge";
import { profileTabs } from "@/helpers/constants";
import EditProfileForm from "@/components/forms/EditProfileForm";
import { useState } from "react";

const EditProfile = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");

  const handleSelectChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <Tabs
      value={selectedTab}
      onValueChange={handleSelectChange}
      defaultValue="tab1"
      className="flex justify-center flex-col mt-10 lg:mx-24 mx-3">
      <TabsList className="flex justify-center items-center gap-4">
        {profileTabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            onClick={() => setSelectedTab(tab.value)}
            className={twMerge(
              "transition-all duration-300 ease-in-out flex items-center",
              selectedTab === tab.value && "border-b-4 border-primary"
            )}>
            {tab.icon && <tab.icon />}
            {tab.label}
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
        <EditProfileForm />
      </TabsContent>
      <TabsContent value="tab4">
        <p>This is the content of Tab 3</p>
      </TabsContent>
    </Tabs>
  );
};

export default EditProfile;
