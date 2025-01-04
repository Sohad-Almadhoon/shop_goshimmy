import React from "react";
import CustomButton from "../components/shared/CustomButton";
import { BsInstagram, BsPencilFill, BsStarFill, BsTiktok } from "react-icons/bs";
import Card from "../components/shared/Card";
import CustomSelect from "../components/shared/CustomSelect";
import { BiHeart, BiMessage } from "react-icons/bi";

const ProfilePage = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <img
          src="/images/profile-img.png"
          alt="profile-img"
          className="w-32 rounded-full object-cover"
        />
        <span className="font-bold mt-3">First and Last Name</span>
        {false ? (
          <>
            <span className="text-secondary text-sm mb-5">
              12497 following | 862 followers
            </span>
            <CustomButton
              variant="outline"
              className="flex items-center gap-2 text-sm font-bold px-2 text-primary border-secondary border">
              <BsPencilFill /> <span>Edit Profile</span>
            </CustomButton>
          </>
        ) : (
          <div className="flex gap-3 items-center mt-3">
            <CustomButton
              variant="outline"
              className="flex items-center gap-2 text-sm font-bold px-2 text-primary border-secondary border">
              <BiMessage /> <span>Message </span>
            </CustomButton>
            <CustomButton
              variant="outline"
              className="flex items-center gap-2 text-sm font-bold px-2 text-primary border-secondary border">
              <BiHeart /> <span>Follow</span>
            </CustomButton>
            <CustomButton variant="outline" className="p-2 text-secondary border-secondary border">
              <BsInstagram />
            </CustomButton>
            <CustomButton variant="outline" className="p-2 text-secondary border-secondary border">
              {" "}
              <BsTiktok />
            </CustomButton>
          </div>
        )}
        <div className="flex mt-3 items-center gap-2">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <BsStarFill key={index} className="size-7 text-success" />
          ))}{" "}
          <span>(10)</span>
        </div>
        <p className=" text-secondary_bold text-sm my-3">
          Hey there! Shop my collection of pre-loved items :) Fast shipping,
          message me with any questions
        </p>
      </div>
      <div className="px-24">
        <div className="flex justify-between items-center mb-5">
          {" "}
          <span className="font-bold">Filter by</span>
          <div className="flex items-center gap-6">
            <span className="text-sm whitespace-nowrap">Sort by</span>
            <CustomSelect>
              <option value="Popular">Popular</option>
            </CustomSelect>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1">filters</div>
          <div className="grid grid-cols-4 gap-5 flex-3">
            {Array.from({ length: 12 }).map((_, index) => (
              <Card
                key={index}
                className="flex flex-col p-0 text-left overflow-hidden">
                <img
                  src="/images/palle.jpg"
                  alt=""
                  className="w-full object-cover"
                />
                <div className="p-3 flex-col flex">
                  <span className="font-bold"> Ballet shoes</span>
                  <span>Size: S</span>
                  <span>$15</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
