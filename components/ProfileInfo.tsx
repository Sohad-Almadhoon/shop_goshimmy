"use client";
import {
  BsInstagram,
  BsPencilFill,
  BsStarFill,
  BsTiktok,
} from "react-icons/bs";
import { BiHeart, BiMessage } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Following from "./Following";
const ProfileInfo = () => {
  const [openFollow, setOpenFollow] = useState(false);
  const handleFollow = () => setOpenFollow(!openFollow);
  console.log(openFollow)
  return (
    <div className="flex justify-center items-center flex-col">
      {openFollow && <Following />}
      <img
        src="/images/profile-img.png"
        alt="profile-img"
        className="w-32 rounded-full object-cover"
      />
      <span className="font-semibold mt-3">First and Last Name</span>
      {false ? (
        <>
          <span className="text-secondary text-sm mb-5">
            12497 following | 862 followers
          </span>
          <Button
            variant="outline"
            className="flex items-center gap-2 text-sm font-bold px-2 text-primary border-secondary border">
            <BsPencilFill /> <span>Edit Profile</span>
          </Button>
        </>
      ) : (
        <div className="flex gap-3 items-center mt-3">
          <Button
            variant="outline"
            className="flex items-center gap-2 text-sm font-bold px-2 text-primary border-secondary border">
            <BiMessage /> <span>Message </span>
          </Button>
          <Button
              variant="outline"
              onClick={handleFollow}
            className="flex items-center gap-2 text-sm font-bold px-2 text-primary border-secondary border">
            <BiHeart /> <span>Follow</span>
          </Button>
          <Button
            variant="outline"
            className="p-2 rounded-full text-secondary_bold">
            <BsInstagram />
          </Button>
          <Button
            variant="outline"
            className="p-2 rounded-full text-secondary_bold">
            {" "}
            <BsTiktok />
          </Button>
        </div>
      )}
      <div className="flex mt-3 items-center gap-2">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <BsStarFill key={index} className="size-6 text-success" />
          ))}
        <span>(10)</span>
      </div>
      <p className=" text-secondary_bold text-sm my-3">
        Hey there! Shop my collection of pre-loved items :) Fast shipping,
        message me with any questions
      </p>
    </div>
  );
};

export default ProfileInfo;
