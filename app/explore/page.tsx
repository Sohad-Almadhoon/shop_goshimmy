"use client";
import BreadcrumbExplore from "@/components/explore/Breadcrumb";
import FilterList from "@/components/shared/FilterList";
import Filters from "@/components/shared/Filters";
import { Card } from "@/components/ui/card";
import { Select, SelectTrigger } from "@/components/ui/select";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const page = () => {
  const [filteredResults, setFilteredResults] = useState(
    new Array(8).fill(null)
  );
  return (
    <div className="lg:px-36 max-w-screen-2xl w-full mx-auto">
      <div className="flex lg:flex-row flex-col gap-8">
        <div className="lg:min-w-64 shrink-0 lg:max-w-64">
          <span className="font-bold mb-4 hidden md:block">Filter by</span>
          <Filters />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between mb-5 items-center px-5">
            <BreadcrumbExplore />
            <div className="md:flex hidden gap-5 basis-1/5 items-center">
              <span className="whitespace-nowrap">Sort by</span>
              <Select>
                <SelectTrigger>Recent</SelectTrigger>
              </Select>
            </div>
          </div>
          <div className="md:min-h-11 hidden">
            <FilterList />
          </div>

          {filteredResults.length === 0 ? (
            <div className="text-gray-500 py-10 flex flex-col items-center justify-center">
              <BiSearch className="text-7xl text-gray" />
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
