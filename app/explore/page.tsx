"use client";
import BreadcrumbExplore from "@/components/Breadcrumb";
import FilterList from "@/components/profile/FilterList";
import Filters from "@/components/profile/Filters";
import { Card } from "@/components/ui/card";
import { Select, SelectTrigger } from "@/components/ui/select";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const page = () => {
  // Sample data - Replace with actual filtered data
  const [filteredResults, setFilteredResults] = useState(
    new Array(8).fill(null)
  );

  return (
    <div className="lg:px-36 max-w-screen-2xl w-full mx-auto ">
      <div className="flex gap-8">
        <div className="min-w-64 shrink-0 max-w-64">
          <span className="font-bold mb-4 block">Filter by</span>
          <Filters />{" "}
        </div>
        <div className="flex-grow">
          <div className="flex justify-between mb-5 items-center">
            <BreadcrumbExplore />
            <div className="flex gap-5 basis-1/5 items-center">
              <span className="whitespace-nowrap">Sort by</span>
              <Select>
                <SelectTrigger>Recent</SelectTrigger>
              </Select>
            </div>
          </div>
          <div className="min-h-11">
            <FilterList />
          </div>

          {/* ✅ Show message when there are no search results */}
          {filteredResults.length === 0 ? (
            <div className="text-gray-500 py-10 flex flex-col items-center justify-center">
              <BiSearch className="text-7xl text-gray"/>
              <p className="text-xl font-semibold">
                Hmm! There are no results for that search.
              </p>
              <span> Double check your spelling or try a different word.</span>
            </div>
          ) : (
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 pb-5 lg:px-0 px-5">
              {filteredResults.map((_, index) => (
                <Card
                  key={index}
                  className="flex flex-col p-0 text-left overflow-hidden">
                  <img
                    src="/images/palle.jpg"
                    alt=""
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3 flex flex-col">
                    <span className="font-bold">Ballet shoes</span>
                    <span>Size: S</span>
                    <span>$15</span>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
