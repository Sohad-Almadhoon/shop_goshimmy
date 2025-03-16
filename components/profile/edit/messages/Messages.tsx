import SearchInput from "@/components/shared/SearchInput";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { messages } from "@/helpers/mockData";
import Link from "next/link";
import React from "react";
import { BiTrash } from "react-icons/bi";
import { HiArrowRight } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

const Messages = () => {
  return (
    <div className="min-h-screen">
      <Tabs className="lg:flex hidden">
        <TabsList className="flex min-w-64 min-h-screen bg-lightGray flex-col items-start *:flex *:gap-1 *:items-center p-5">
          {messages.map((msg, index) => (
            <TabsTrigger value={`tab${index + 1}`} key={index}>
              <div className="flex gap-3 items-center">
                <img
                  src={msg.img}
                  alt=""
                  className="size-10 object-cover rounded-full"
                />
                <div className="flex flex-col items-start gap-2 text-sm">
                  <span className="font-bold">{msg.username}</span>
                  <span className="text-bodyLight">
                    {" "}
                    {msg.content.length > 100
                      ? msg.content.substring(0, 70)
                      : msg.content}
                    ...
                  </span>
                </div>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="bg-white shadow-lg w-full">
          {messages.map((item, index) => (
            <TabsContent
              value={`tab${index + 1}`}
              className="flex-3"
              key={index}>
              <div className="p-5 flex flex-col">
                <div className="flex justify-between">
                  <span className="flex text-primary gap-1 items-center font-bold">
                    <img
                      src={item.img}
                      alt=""
                      className="size-10 object-cover rounded-full"
                    />
                    {item.username}
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
                <div className="flex-1 overflow-y-auto max-h-[500px] pb-24 mt-5">
                  {item.chat.map((msg, index) => (
                    <div
                      className={twMerge(
                        "flex gap-2 mt-4",
                        !msg.sentByUser && "flex-row-reverse"
                      )}
                      key={index}>
                      {msg.sentByUser && (
                        <img
                          src={msg.img}
                          alt=""
                          className="size-10 object-cover rounded-full"
                        />
                      )}
                      <div className="flex flex-col">
                        <p
                          className={twMerge(
                            "border border-gray rounded-lg p-3 x shadow-xl",
                            msg.sentByUser
                              ? "bg-lightGray"
                              : "bg-white justify-end"
                          )}>
                          {msg.content}
                        </p>
                        <span>{msg.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex-1">
                  <Textarea placeholder=" Share a reply"></Textarea>
                  <div className="flex justify-end mt-4">
                    <Button>Send</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
      <div className="lg:hidden flex flex-col gap-4 px-5">
        {messages.map((item, index) => (
          <Link
            href={`/profile/edit/messages/${index}`}
            className="bg-lightGray rounded-lg p-5 flex gap-5 items-center"
            key={index}>
            <img src={item.img} alt="" className="size-11 rounded-full" />
            <div>
              <span className="font-bold">{item.username}</span>
              <p className="flex-1">
                {item.content.length > 100
                  ? item.content.substring(0, 70)
                  : item.content}
                ...
              </p>
            </div>
            <HiArrowRight className="flex-1" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Messages;
