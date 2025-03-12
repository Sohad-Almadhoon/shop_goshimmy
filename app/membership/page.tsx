import React from "react";
import { membership, membershipPhotoList } from "../../helpers/data";
import { BiCheck } from "react-icons/bi";

const MembershipPage = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 grid-cols-2">
        {["section2", "section3", "section5", "section6"].map((item) => (
          <div className="">
            <img src={`/images/${item}.png`} alt="img" className="h-full" />
          </div>
        ))}
      </div>
      <h2
        className="font-bold text-3xl text-center my-4"
        style={{
          textShadow: "#444",
        }}>
        {" "}
        Ensemble Membership Benefits
      </h2>
      <section className="lg:mx-56 mx-12 lg:gap-0  gap-5 flex my-12 lg:flex-row flex-col">
        <ul className="flex flex-col gap-3 list-disc flex-1">
          {membership.map((item) => (
            <li className="flex">
              <BiCheck className="text-primary w-10 h-7" />
              <div className="flex flex-col">
                {" "}
                <span className="font-bold">{item.title}</span>
                <span className="max-w-md text-sm font-semibold text-opacity-60">
                  {item.description}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <div className="bg-[#EFF0F6] max-w-md rounded-2xl flex-1 h-fit p-16 gap-3 flex flex-col justify-center items-center">
          <span className="text-2xl"> Membership fee</span>
          <p>
            <span className="text-primary text-3xl font-bold">$11</span>{" "}
            <sup className="text-lg ml-2">a month</sup>
          </p>
          <span className="bg-primary text-white p-2 px-6 rounded-2xl">
            {" "}
            Join Ensemble
          </span>
        </div>
      </section>
      <section className="font-medium text-opacity-70 bg-gray-50">
        <div className="lg:mx-56 mx-12 lg:mb-32 mb-5 py-20">
          <div className="flex items-center justify-center flex-col">
            <h3 className="text-3xl font-bold">Get Creative</h3>
            <span className="max-w-2xl text-center my-5">
              There are so many ways dance studios utilize GoShimmy Ensemble
              membership to make running their sutdio easier and more profitable
            </span>
          </div>
          <div className="flex lg:gap-4 lg:flex-row flex-col items-center gap-7 ">
            {membershipPhotoList.map((item) => (
              <div className="flex-1">
                <img
                  src={`/images/${item.img}.png`}
                  alt="img"
                  className="h-48 lg:w-72 w-full object-cover rounded-2xl"
                />
                <p className="text-sm mt-3 max-w-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm  mt-8 text-gray-600">
            {" "}
            We would love to hear how Ensemble Membership is benefitting your
            studio!
          </p>
          <p className="text-center text-gray-600">
            {" "}
            Send us a note at
            <span className="text-primary ml-2">ensemble@goshimmy.com</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;
