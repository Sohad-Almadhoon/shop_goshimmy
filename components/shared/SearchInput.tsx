import { twMerge } from "tailwind-merge";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command"; // Assuming you're using Shadcn's Command UI
import { useEffect, useState } from "react";

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
  const [open, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="w-full">
      <Command>
        <div className="flex items-center bg-lightGray rounded-lg px-6 transition-all">
          <CommandInput
            placeholder={placeholder}
            value={value}
            onValueChange={(value) => {
              setValue(value);
              if (value) setIsOpen(true);
              // else
              //    setIsOpen(false);
            }}
            className={twMerge(
              "w-full focus:outline-none",
              className
            )}
          />
        </div>
        {open && ( // Only show the list if there are filtered options
          <CommandList className="bg-lightGray mt-2">
            {options.map((option) => (
              <CommandItem
                key={option}
                className="cursor-pointer px-3 py-2 text-dark">
                {option}
              </CommandItem>
            ))}
          </CommandList>
        )}
      </Command>
    </div>
  );
}
