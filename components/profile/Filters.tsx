//@ts-nocheck
"use client"
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { accordionItems } from "@/helpers/data";
import BrandSearch from "@/components/profile/BrandSearch";
import { Button } from "@/components/ui/button";
import { IoClose } from "react-icons/io5";
import FilterList from "./FilterList";
import { useFilters } from "@/contexts/FilterContext";

const Filters = () => {
  const { selectedFilters, handleFilterChange, clearFilters } = useFilters();
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilters = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Mobile Filters Button */}
      <div className="lg:hidden flex justify-end mb-4">
        <Button
          onClick={toggleFilters}
          variant="outline"
          className="text-base font-bold">
          Filters ({Object.keys(selectedFilters).length})
        </Button>

        {isOpen && (
          <div className="p-5 absolute inset-0 z-50 bg-white min-h-screen">
            <div className="flex items-center gap-3 mb-4">
              <div className="absolute top-3 right-3" onClick={toggleFilters}>
                <IoClose className="text-xl cursor-pointer" />
              </div>
              <h2 className="text-lg font-bold">
                Filters ({Object.keys(selectedFilters).length})
              </h2>
              <div
                onClick={clearFilters}
                className="text-primary cursor-pointer">
                Clear all
              </div>
            </div>
            <Accordion type="multiple" className="space-y-4">
              {accordionItems.map(
                ({ id, label, content, isColor, isBrands }) => (
                  <AccordionItem key={id} value={label}>
                    <AccordionTrigger className="font-bold">
                      {label}
                    </AccordionTrigger>
                    <AccordionContent>
                      {isBrands ? (
                        <BrandSearch />
                      ) : isColor ? (
                        <RadioGroup
                          className="grid grid-cols-4 gap-3"
                          onValueChange={(value) =>
                            handleFilterChange(label, value)
                          }>
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
                        <RadioGroup
                          className="space-y-3"
                          onValueChange={(value) =>
                            handleFilterChange(label, value)
                          }>
                          {content.map((item) => (
                            <div
                              key={item.id || item}
                              className="flex items-center space-x-3">
                              <RadioGroupItem
                                id={item.id || item}
                                value={item.id || item}
                              />
                              <Label htmlFor={item.id || item}>
                                {item.label || item}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                )
              )}
            </Accordion>
            <div className="flex justify-between mt-4">
              <Button onClick={toggleFilters}>Apply</Button>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Filters */}
      <div className="lg:block hidden">
        <Accordion type="multiple" className="space-y-4">
          {accordionItems.map(({ id, label, content, isColor, isBrands }) => (
            <AccordionItem key={id} value={label}>
              <AccordionTrigger className="font-bold">{label}</AccordionTrigger>
              <AccordionContent>
                {isBrands ? (
                  <BrandSearch />
                ) : isColor ? (
                  <RadioGroup
                    className="grid grid-cols-4 gap-3"
                    onValueChange={(value) => handleFilterChange(label, value)}>
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
                  <RadioGroup
                    className="space-y-3"
                    onValueChange={(value) => handleFilterChange(label, value)}>
                    {content.map((item) => (
                      <div
                        key={item.id || item}
                        className="flex items-center space-x-3">
                        <RadioGroupItem
                          id={item.id || item}
                          value={item.id || item}
                        />
                        <Label htmlFor={item.id || item}>
                          {item.label || item}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Filters;
