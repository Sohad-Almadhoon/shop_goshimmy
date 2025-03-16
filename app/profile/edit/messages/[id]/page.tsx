"use client";
import SearchInput from "@/components/shared/SearchInput";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { messages } from "@/helpers/mockData";
import { useParams } from "next/navigation";
import { BiTrash } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

const ChatPage = () => {
  const { id } = useParams();
  const message = messages[parseInt(Array.isArray(id) ? id[0] : id || "0")];

  return (
    <div>
      <div className="p-5 flex flex-col">
        <div className="flex justify-between mb-5">
          <span className="flex text-primary gap-1 items-center font-bold">
            <img
              src="/images/profile-img.png"
              alt=""
              className="size-10 object-cover rounded-full"
            />
            {message.username}
          </span>
          <BiTrash className="text-primary border-2 text-4xl p-1 rounded-full border-primary" />
        </div>
        <SearchInput
          onChange={() => {}}
          placeholder=" Search messages"
          value=""
        />
        <div className="flex-1 overflow-y-auto max-h-[500px] pb-24 mt-5">
          {message.chat.map((msg, index) => (
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
                    msg.sentByUser ? "bg-lightGray" : "bg-white justify-end"
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
            <Button> Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
