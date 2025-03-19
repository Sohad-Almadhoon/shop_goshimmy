"use client";
import Link from "next/link";
import { BiBell, BiCart, BiMenu } from "react-icons/bi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SearchInput from "./SearchInput";
import { Button } from "../ui/button";

import { profileMenuItems } from "@/helpers/data";
import { DialogTitle } from "../ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { IoClose } from "react-icons/io5";

const Header = () => {
  return (
    <header className="lg:px-24 px-8 py-6">
      <div className="flex justify-between items-center">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <BiMenu className="text-primary w-8 h-8 cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="left" className="p-8">
              <DialogTitle className="sr-only">
                Mobile Navigation Menu
              </DialogTitle>
              <nav className="flex flex-col gap-4  font-semibold">
                <Link href="/about">New Arrivals</Link>
                <Link href="/about">Rehearsal Wear</Link>
                <Link href="/about">Costumes</Link>
                <Link href="/about">Shoes</Link>
                <Link href="/about">Accessories</Link>
                <Link href="/about">Shop all</Link>
                <hr className="border-b border-gray"/>
                <Link href="/membership">Ensemble Membership</Link>
                <Link href="/about">How It Works</Link>
                <Link href="/payment">
                  <Button className="w-full">Sell</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <div className="flex flex-col">
          <span className="text-primary text-3xl font-bold">Go Shimmy</span>
          <span className="text-primary text-xs font-medium">
            The Dancewear Marketplace
          </span>
        </div>

        {/* Search Input */}
        <div className="hidden lg:block">
          <SearchInput
            placeholder="Search"
            value=""
            onChange={() => console.log("search")}
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="relative">
                <BiBell className="cursor-pointer border-2 border-primary text-primary p-1 rounded-full w-8 h-8" />
                <span className="size-2 rounded-full bg-primary absolute top-0 right-0"></span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-md p-2 w-64">
              <div className="flex items-center justify-between border-b px-2 border-gray pb-2 text-primary text-sm">
                <span>Mark all as read</span>
                <span> View all messages</span>
              </div>
              <DropdownMenuItem className="flex justify-between items-center">
                {" "}
                New message from BreeHjaltalin...
                <IoClose className="text-primary cursor-pointer" />
              </DropdownMenuItem>{" "}
              <DropdownMenuItem className="flex justify-between items-center">
                {" "}
                New listing sold
                <IoClose className="text-primary cursor-pointer" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <img
                src="/images/profile.png"
                alt="Profile"
                className="cursor-pointer rounded-full w-8 h-8 object-cover"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white shadow-lg rounded-md p-3 w-48">
              <DropdownMenuItem className="font-bold">
                Jasmine.grammer
              </DropdownMenuItem>
              <DropdownMenuItem>View Profile</DropdownMenuItem>
              <hr className="my-1" />
              {profileMenuItems.map((item, index) => (
                <DropdownMenuItem key={index}>{item.label}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <BiCart className="border-2 border-primary text-primary p-1 rounded-full w-8 h-8" />
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-between items-center mt-3">
        <div className="flex gap-4 text-sm font-semibold">
          <Link href="/about">New Arrivals</Link>
          <Link href="/about">Rehearsal Wear</Link>
          <Link href="/about">Costumes</Link>
          <Link href="/about">Shoes</Link>
          <Link href="/about">Accessories</Link>
          <Link href="/about">Shop all</Link>
        </div>
        <div className="flex gap-4 text-sm font-semibold items-center">
          <Link href="/membership">Ensemble Membership</Link>
          <Link href="/about">How It Works</Link>
          <Link href="/payment">
            <Button className="px-8">Sell</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
