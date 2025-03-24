"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BiUpload } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { IEditProfile } from "@/types";
import { Label } from "../ui/label";

const EditProfileForm = () => {
  const { register, handleSubmit } = useForm<IEditProfile>();
  const onSubmit = (data: IEditProfile) => {
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
            <BiUpload className="text-primary font-semibold" />
            <span className="text-primary text-sm font-semibold">
              Upload new photo
            </span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div className="mt-4">
              <Label htmlFor="username" className="block text-sm font-semibold">
                Username
              </Label>
              <Input
                {...register("username")}
                id="username"
                placeholder="Username"
                className="mt-2"
              />
            </div>

            <div className="mt-4">
              <Label htmlFor="bio" className="block text-sm font-semibold">
                Bio
              </Label>
              <Textarea
                {...register("bio")}
                id="bio"
                placeholder="Tell other Buyers and Sellers a bit about you and your shop!"
                className="mt-2 w-[376px] min-h-[150px]"
              />
            </div>

            <div className="mt-4">
              <Label
                htmlFor="instagram"
                className="block text-sm font-semibold">
                Instagram
              </Label>
              <Input
                {...register("instagram")}
                id="instagram"
                placeholder="@JaneDoe"
                className="mt-2"
              />
            </div>

            <div className="mt-4">
              <Label htmlFor="tiktok" className="block text-sm font-semibold">
                TikTok
              </Label>
              <Input
                {...register("tiktok")}
                id="tiktok"
                placeholder="@JaneDoe"
                className="mt-2"
              />
            </div>

            <div className="flex gap-2 mt-6 justify-start">
              <Button type="submit">Save</Button>
              <Button type="button" variant="outline" className="border-gray">
                Discard
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default EditProfileForm;
