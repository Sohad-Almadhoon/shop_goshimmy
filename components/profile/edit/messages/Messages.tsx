import SearchInput from "@/components/shared/SearchInput";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { messages } from "@/helpers/mockData";
import React from "react";
import { BiTrash } from "react-icons/bi";

const Messages = () => {
  return (
    <div className="min-h-screen">
      <Tabs className="flex">
        <TabsList defaultValue="tab1" className="flex min-w-64 min-h-screen bg-lightGray flex-col items-start *:flex *:gap-1 *:items-center p-5">
          {messages.map((msg, index) => (
            <TabsTrigger value="tab1" key={index}>
              <div className="flex gap-3 items-center">
                <img
                  src={msg.img}
                  alt=""
                  className="size-10 object-cover rounded-full"
                />
                <div className="flex flex-col items-start gap-2 text-sm">
                  <span className="font-bold">{msg.username}</span>
                  <span className="text-bodyLight">{msg.content}</span>
                </div>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="bg-white shadow-lg w-full">
          <TabsContent value="tab1" className="flex-3">
            <div className="p-5 flex flex-col">
              <div className="flex justify-between">
                <span className="flex text-primary gap-1 items-center font-bold">
                  <img
                    src="/images/profile-img.png"
                    alt=""
                    className="size-10 object-cover rounded-full"
                  />
                  Jane Doe
                </span>
                <div className="flex items-center gap-2">
                  {" "}
                  <SearchInput
                    onChange={() => {}}
                    placeholder=" Search messages"
                    value=""
                  />
                  <BiTrash className="text-primary border-2 text-4xl p-1 rounded-full border-primary" />
                </div>
              </div>
              <div className="flex-1 overflow-y-auto max-h-[500px] pb-24">
                <div className="flex gap-2 mt-4">
                  <img
                    src="/images/profile-img.png"
                    alt=""
                    className="size-10 object-cover rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="border border-gray rounded-lg p-3 w-1/2 shadow-xl bg-lightGray">
                      Buyers will receive a refund if their order was not
                      shipped or if it did not arrive at its destination, but
                      the refund must be requested within 90 days of purchase.
                    </p>
                    <span> 12/14/12 12:00PM</span>
                  </div>
                </div>
                <div className="flex items-end flex-col mt-6">
                  <p className="border border-gray rounded-lg p-3 w-1/2  shadow-xl">
                    Buyers will receive a refund if their order was not shipped
                    or if it did not arrive at its destination, but the refund
                    must be requested within 90 days of purchase.
                  </p>
                  <span className="w-1/2"> 12/14/12 12:00PM</span>
                </div>
                <div className="flex gap-2 mt-4">
                  <img
                    src="/images/profile-img.png"
                    alt=""
                    className="size-10 object-cover rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="border border-gray rounded-lg p-3 w-1/2 shadow-xl bg-lightGray">
                      Buyers will receive a refund if their order was not
                      shipped or if it did not arrive at its destination, but
                      the refund must be requested within 90 days of purchase.
                    </p>
                    <span> 12/14/12 12:00PM</span>
                  </div>
                </div>
                <div className="flex items-end flex-col mt-6">
                  <p className="border border-gray rounded-lg p-3 w-1/2  shadow-xl">
                    Buyers will receive a refund if their order was not shipped
                    or if it did not arrive at its destination, but the refund
                    must be requested within 90 days of purchase.
                  </p>
                  <span className="w-1/2"> 12/14/12 12:00PM</span>
                </div>
              </div>
              <div className="flex-1">
                <Textarea placeholder=" Share a reply"></Textarea>
                <div className="flex justify-end mt-4">
                  <Button> Send
</Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab2" className="flex-3">
            Msg2
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Messages;
