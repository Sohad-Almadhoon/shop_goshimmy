import {
  BsInstagram,
  BsPencilFill,
  BsStarFill,
  BsTiktok,
} from "react-icons/bs";
import { BiMessage } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import Following from "./Following";
import Link from "next/link";
const ProfileInfo = () => {

  return (
    <div className="flex justify-center items-center flex-col">
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
          <Link href="/profile/edit">
            {" "}
            <Button
              variant="outline"
              className="flex items-center gap-2 text-sm font-bold px-6 border-gray ">
              <BsPencilFill /> <span>Edit Profile</span>
            </Button>
          </Link>
        </>
      ) : (
        <div className="flex gap-3 items-center mt-3">
          <Button
            variant="outline"
            className="flex items-center gap-2 text-sm font-bold px-2 text-primary border-secondary border">
            <BiMessage /> <span>Message </span>
          </Button>
          <Following />
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
      <p className="text-center px-5 text-sm my-3">
        Hey there! Shop my collection of pre-loved items :) Fast shipping,
        message me with any questions
      </p>
    </div>
  );
};

export default ProfileInfo;
