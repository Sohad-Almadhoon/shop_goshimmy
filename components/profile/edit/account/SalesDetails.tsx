import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react'
import { BiLeftArrowAlt } from 'react-icons/bi';

const SalesDetails = () => {
  return (
    <div className="max-w-[550px] mx-auto pb-5 p-5">
      <Link
        href="/profile/edit"
        className="text-primary flex items-center gap-1 mb-2 text-sm font-bold">
        <BiLeftArrowAlt /> Back to My Sales
      </Link>
      <Card className=" h-fit ">
        <CardContent className="p-5">
          <div className="flex gap-5">
            <img
              src="/images/palle.jpg"
              alt=""
              className="size-32 rounded-lg"
            />
            <div className="flex flex-col flex-1">
              <div className="flex justify-between">
                {" "}
                <div>
                  {" "}
                  <p className="font-bold"> Ensemble Membership</p>
                  <div className="flex gap-5">
                    <span className="font-bold flex-1">Size</span>
                    <span className="flex-1">7/8</span>
                  </div>
                  <div className="flex gap-5">
                    <span className="font-bold flex-1">Tagged</span>
                    <span className="flex-1">Girls</span>
                  </div>
                  <div className="flex gap-5">
                    <span className="font-bold flex-1">Category</span>
                    <span className="flex-1">Leotard</span>
                  </div>
                  <div className="flex gap-5">
                    <span className="font-bold flex-1">Style</span>
                    <span className="flex-1">Halter</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span> 12/14/2012</span>
                  <span> #1123faasdfv</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <span className="font-bold mb-2 block"> Sold by</span>
            <div className="flex items-center gap-2">
              <img
                src="/images/palle.jpg"
                alt=""
                className="size-8 rounded-full"
              />
              <span className="text-primary font-bold"> Seller profile</span>
            </div>
          </div>
          <hr className="border-b border-gray mt-5" />
          <div className="mt-5">
            <span className="font-bold mb-2 block">Shipping address</span>
            <div className="flex items-center gap-2">
              <img
                src="/images/palle.jpg"
                alt=""
                className="size-8 rounded-full"
              />
              <span className="text-primary font-bold">
                {" "}
                Different Shop Goods
              </span>
            </div>
            <div className="flex flex-col mt-5">
              {" "}
              <span> 123 Main st</span>
              <span> Roseville, CA 12345</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold"> Card used</span>
              <span> ************1234</span>
            </div>
          </div>
          <hr className="border-b border-gray mt-5" />
          <div className="mt-5  max-w-sm">
            {" "}
            <div className="flex">
              <span className="flex-1">Price</span>
              <span className="flex-1"> $15.00</span>
            </div>
            <div className="flex">
              <span className="flex-1">Shipping</span>
              <span className="flex-1"> $5.00</span>
            </div>
            <div className="flex">
              <span className="flex-1">Tax</span>
              <span className="flex-1"> $5.00</span>
            </div>
            <div className="flex font-bold">
              <span className="flex-1">Total</span>
              <span className="flex-1"> $25.00</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SalesDetails