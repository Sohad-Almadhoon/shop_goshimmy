import SearchInput from "@/components/shared/SearchInput";
import React from "react";

const Searchbar = ({ title }: { title: string }) => {
  return (
    <div className="flex lg:justify-between lg:flex-row lg:items-center flex-col-reverse gap-4 lg:pb-10 pb-4">
      <span className="font-bold"> {title}</span>
      <SearchInput
        className="lg:w-52 w-full"
        placeholder=" Search items"
        onChange={() => {}}
        value=""
      />
    </div>
  );
};

export default Searchbar;
