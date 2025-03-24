import { twMerge } from "tailwind-merge";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
} from "@/components/ui/command"; // Assuming you're using Shadcn's Command UI
import { useState } from "react";

interface SearchInputProps {
  placeholder: string;
  className?: string;
  options: string[]; // Optional list of search suggestions
}

export default function SearchInput({
  placeholder,
  className,
  options,
}: SearchInputProps) {
  const [value, setValue] = useState("");

  return (
    <div className="w-full">
      <Command>
        <div className="flex items-center bg-lightGray rounded-lg px-6 transition-all">
          <CommandInput
            inputMode="text"
            placeholder={placeholder}
            onValueChange={(e) => setValue(e)}
            className={twMerge("w-full focus:outline-none", className)}
          />
        </div>
        <CommandList className="bg-lightGray mt-2">
          {value != "" && (
            <>
              <CommandEmpty>No results found</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option}
                    className="cursor-pointer px-3 py-2 text-dark">
                    {option}
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}
        </CommandList>
      </Command>
    </div>
  );
}
