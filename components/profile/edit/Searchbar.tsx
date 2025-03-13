import SearchInput from "@/components/shared/SearchInput";
import React from "react";

const Searchbar = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-between items-center pb-10">
      <span className="font-bold"> {title}</span>
      <SearchInput
        className="w-52"
        placeholder=" Search items"
        onChange={() => {}}
        value=""
      />
    </div>
  );
};

export default Searchbar;
