import { footerItems } from "@/app/helpers/data";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const Footer = () => {
  return (
    <>
      <hr className="lg:mx-36 mb-5" />
      <section className="hidden lg:grid lg:mx-36 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 pb-12">
        <div className="flex flex-col">
          <h3 className="font-bold mb-3">Shop Genres</h3>
          {footerItems[0].map((item, index) => (
            <Link key={index} href="/" className="mb-2 hover:underline">
              {item}
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold mb-3">Shop Categories</h3>
          {footerItems[1].map((item, index) => (
            <Link key={index} href="/" className="mb-2 hover:underline">
              {item}
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold mb-3">Support</h3>
          {footerItems[2].map((item, index) => (
            <Link key={index} href="/" className="mb-2 hover:underline">
              {item}
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold mb-3">Company</h3>
          {footerItems[3].map((item, index) => (
            <Link key={index} href="/" className="mb-2 hover:underline">
              {item}
            </Link>
          ))}
        </div>
      </section>

      {/* Accordion for small and medium devices */}
      <section className="lg:hidden mx-10 pb-12">
        <Accordion type="multiple" className="[&>div]:border-none">
          <AccordionItem value="genres">
            <AccordionTrigger className="font-bold text-lg">
              Shop Genres
            </AccordionTrigger>
            <AccordionContent>
              {footerItems[0].map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="block mb-2 hover:underline">
                  {item}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="categories">
            <AccordionTrigger className="font-bold text-lg">
              Shop Categories
            </AccordionTrigger>
            <AccordionContent>
              {footerItems[1].map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="block mb-2 hover:underline">
                  {item}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="support">
            <AccordionTrigger className="font-bold text-lg">
              Support
            </AccordionTrigger>
            <AccordionContent>
              {footerItems[2].map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="block mb-2 hover:underline">
                  {item}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="company">
            <AccordionTrigger className="font-bold text-lg">
              Company
            </AccordionTrigger>
            <AccordionContent>
              {footerItems[3].map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="block mb-2 hover:underline">
                  {item}
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
};

export default Footer;
