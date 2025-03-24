"use client";
import { useFilters } from "@/contexts/FilterContext";
import React from "react";
import { IoClose } from "react-icons/io5";

const FilterList = () => {
  const { selectedFilters, removeFilter, clearFilters } = useFilters();
  if (!Object.keys(selectedFilters).length) return null;

  return (
    <div className="mb-4 flex flex-wrap gap-2 bg-gray-100 p-3 rounded-md">
      {Object.entries(selectedFilters).map(([key, value]) => (
        <div
          key={key}
          className="flex items-center bg-gray-300 px-3 py-2 rounded-xl bg-lightGray">
          <span className="mr-2 text-sm">{value.toUpperCase()}</span>
          <IoClose
            className="cursor-pointer"
            onClick={() => removeFilter(key)}
          />
        </div>
      ))}
      <button onClick={clearFilters} className="ml-3  text-primary underline">
        Clear All
      </button>
    </div>
  );
};

export default FilterList;
