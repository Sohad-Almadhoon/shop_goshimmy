import SearchInput from "@/components/shared/SearchInput";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { messages } from "@/helpers/mockData";
import React from "react";
import { BiTrash } from "react-icons/bi";

const Messages = () => {
  return (
    <div className="min-h-screen">
      <Tabs className="flex">
        <TabsList className="flex min-w-64 min-h-screen bg-lightGray flex-col items-start *:flex *:gap-1 *:items-center p-5">
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
            <div className="p-5">
              <div className="flex justify-between">
                <span className="flex text-primary gap-1 items-center font-bold">
                  <img
                    src="/images/palle.jpg"
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
              <div>
                
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
