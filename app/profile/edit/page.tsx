"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { BiUpload } from "react-icons/bi";
import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  username: string;
  bio: string;
  instagram: string;
  tiktok: string;
}

const EditProfile = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
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
            <BiUpload className="text-primary" />
            <span className="text-primary text-sm">Upload new photo</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div className="mt-4">
              <label htmlFor="username" className="block text-sm font-medium">
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
              <label htmlFor="bio" className="block text-sm font-medium">
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
              <label htmlFor="instagram" className="block text-sm font-medium">
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
              <label htmlFor="tiktok" className="block text-sm font-medium">
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
              <Button type="submit" className="w-full">
                Save
              </Button>
              <Button type="button" variant="outline" className="w-full">
                Discard
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default EditProfile;
