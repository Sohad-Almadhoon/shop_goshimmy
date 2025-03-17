//@ts-nocheck
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { IoClose } from "react-icons/io5";

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});

  const toggleFilters = () => setIsOpen(!isOpen);
  const clearFilters = () => setSelectedFilters({});

  return (
    <>
      {/* Small screen Filters Button */}
      <div className="lg:hidden flex justify-end mb-4">
        <Button
          onClick={toggleFilters}
          variant="outline"
          className="text-base font-bold">
          Filters (3)
        </Button>
      </div>

      {/* Overlay for Filters */}
      {isOpen && (
        <div className="bg-white p-6 rounded-lg z-50 fixed inset-0 top-20">
          <button onClick={toggleFilters} className="absolute top-2 right-2">
            <IoClose className="text-2xl" />
          </button>
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold">Filters by(3)</h2>
            <div onClick={clearFilters} className="text-primary">
              Clear all
            </div>
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
          <div className="flex justify-between mt-4">
            <Button onClick={toggleFilters}>Apply</Button>
          </div>
        </div>
      )}

      {/* Desktop Filters */}
      <div className="max-w-64 min-w-64 lg:block hidden">
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
    </>
  );
};

export default Filters;
