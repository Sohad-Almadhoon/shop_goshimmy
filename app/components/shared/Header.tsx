import Link from "next/link";
import CustomInput from "./CustomInput";
import { BiBell, BiCart, BiSearch } from "react-icons/bi";
const Header = () => {
  return (
    <header className="lg:px-24 px-8 py-8 lg:py-3">
      <div className="flex justify-between lg:items-center lg:flex-row flex-col lg:gap-12 gap-3 py-2">
        <div className="flex lg:items-start items-center flex-col">
          <span className="text-primary text-3xl font-bold">Go Shimmy</span>
          <span className="text-primary_light text-xs">
            The Dancewear Marketplace
          </span>
        </div>

        <div className="bg-[#EFF0F6] rounded-lg relative flex justify-center items-center">
          <BiSearch className="absolute left-5 transform -translate-y-1/2 top-1/2" />
          <CustomInput type="text" placeholder="Search" />
        </div>
        <div className="flex items-center gap-2 justify-end">
          <img
            src="/images/profile.png"
            alt=""
            className="rounded-full w-8 h-8 object-cover"
          />
          <BiBell className="border border-primary text-primary p-1 rounded-full w-8 h-8"/>
          <BiCart className="border border-primary text-primary p-1 rounded-full w-8 h-8"/>
        </div>
      </div>
      <hr />
      <div className="flex lg:flex-row lg:justify-between flex-col mt-2">
        <div className="flex items-start font-semibold  lg:flex-row flex-col gap-3 lg:text-inherit text-sm  mb-3 lg:m-0 ">
          <Link href="/about">New Arrivals</Link>
          <Link href="/about">Rehearsal Wear</Link>
          <Link href="/about">Costumes</Link>
          <Link href="/about">Shoes</Link>
          <Link href="/about">Accessories</Link>
          <Link href="/about">Shop all</Link>
        </div>
        <hr className="my-4 lg:hidden block"/>
        <div className="flex  lg:flex-row font-semibold lg:items-center items-start flex-col gap-3 lg:text-inherit text-sm">
          <Link href="/membership" className="text-primary">
            Ensemble Membership
          </Link>
          <Link href="/about" className="text-primary">
            How It Works
          </Link>
          <Link
            href="/payment"
            className="bg-primary lg:w-fit w-full text-white text-center p-2 px-8 rounded-2xl">
            Sell
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
