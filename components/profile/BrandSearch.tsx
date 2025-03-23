"use client";
import React, { useState } from "react";
import {
  Command,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import SearchInput from "../shared/SearchInput";

const BrandSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [brands] = useState([
    "Ballet brand 1",
    "Ballet brand 2",
    "Ballet brand 3",
    "Ballet brand 4",
    "Ballet brand 5",
  ]);

  const filteredBrands = brands.filter((brand) =>
    brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Command>
      <SearchInput
        placeholder="Search brands"
        options={brands}
      />
      <CommandList className="rounded-md bg-white mt-2 shadow-md">
        <CommandEmpty>No results found.</CommandEmpty>
        {filteredBrands.length > 0 ? (
          <CommandGroup>
            <RadioGroup
              className="space-y-2"
              value={selectedBrand}
              onValueChange={setSelectedBrand}>
              {filteredBrands.map((item) => (
                <div key={item} className="flex items-center space-x-2 z-50">
                  <CommandItem
                    className={`flex items-center p-2 cursor-pointer ${
                      selectedBrand === item ? "bg-blue-100" : ""
                    }`}
                    onClick={() => setSelectedBrand(item)}>
                    <RadioGroupItem id={item} value={item} />
                    <Label htmlFor={item}>{item}</Label>
                  </CommandItem>
                </div>
              ))}
            </RadioGroup>
          </CommandGroup>
        ) : (
          <div>No matching brands</div>
        )}
      </CommandList>
    </Command>
  );
};

export default BrandSearch;
