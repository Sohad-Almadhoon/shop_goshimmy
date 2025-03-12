import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { accordionItems } from "@/helpers/data";
import BrandSearch from "@/components/BrandSearch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Filters = () => {
  return (
    <div className="max-w-64 min-w-64 lg:block hidden">
      <div className="flex flex-col gap-4">
        <RadioGroup>
          {["Rehearsal Wear", "Costumes"].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <RadioGroupItem id={`radio-${index + 1}`} value={item} />
              <Label htmlFor={`radio-${index + 1}`}>{item}</Label>
            </div>
          ))}
        </RadioGroup>
        <hr />
      </div>
      <Accordion type="single" collapsible>
        {accordionItems.map(({ id, label, content, isColor, isBrands }) => (
          <AccordionItem value={id} key={id}>
            <AccordionTrigger>{label}</AccordionTrigger>
            <AccordionContent>
              {isBrands ? (
                <BrandSearch />
              ) : isColor ? (
                <RadioGroup className="grid grid-cols-4 gap-3">
                  {content.map((color) => (
                    <div
                      key={color}
                      className="flex items-center justify-center">
                      <RadioGroupItem
                        id={color}
                        value={color}
                        className="h-6 w-6"
                        style={{ backgroundColor: color }}
                      />
                    </div>
                  ))}
                </RadioGroup>
              ) : (
                <RadioGroup className="space-y-3">
                  {content.map((item) =>
                    typeof item === "string" ? (
                      <div key={item} className="flex items-center space-x-3">
                        <RadioGroupItem id={item} value={item} />
                        <Label htmlFor={item}>{item}</Label>
                      </div>
                    ) : (
                      <div
                        key={item.id}
                        className="flex items-center space-x-3">
                        <RadioGroupItem id={item.id} value={item.id} />
                        <Label htmlFor={item.id}>{item.label}</Label>
                      </div>
                    )
                  )}
                </RadioGroup>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Filters;

export const Filter = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <span className="font-bold">Filter By</span>
      <div className="flex items-center gap-6 justify-end">
        <span className="text-sm whitespace-nowrap font-semibold">Sort by</span>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Popular" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Popular</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
