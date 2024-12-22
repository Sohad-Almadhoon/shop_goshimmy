"use client";

import Link from "next/link";
import CustomInput from "./shared/CustomInput";

const Header = () => {
  return (
    <header className="px-24 py-12">
      <div className="flex justify-between items-center py-2">
        <div className="flex items-start flex-col ">
          <span className="text-[#5E6DF1] text-3xl font-bold">Go Shimmy</span>
          <span className="text-[#8A96FF] text-xs">The Dancewear Marketplace</span>
        </div>
        <div className="bg-[#EFF0F6]">
          <CustomInput type="text" placeholder="Search" />
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/images/profile.png"
            alt=""
            className="rounded-full w-12 h-12 object-cover"
          />
          bell cart
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center gap-3">
          <Link href="/about">New Arrivals</Link>
          <Link href="/about">Rehearsal Wear</Link>
          <Link href="/about">Costumes</Link>
          <Link href="/about">Shoes</Link>
          <Link href="/about">Accessories</Link>
          <Link href="/about">Shop all</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/about" className="text-primary">
            Ensemble Membership
          </Link>
          <Link href="/about" className="text-primary">
            How It Works
          </Link>
          <Link href="/about" className="bg-primary text-white p-1 px-8 rounded-2xl">
            Sell
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
