import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <section className="lg:mx-36 mx-10 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  pb-12 ">
      <div className="flex flex-col">
        <h3 className="font-bold mb-3"> Shop Genres</h3>
        {[
          "Ballet",
          "Ballroom",
          " Belly Dance",
          "Character",
          "Cheerleading / Dance Team",
          "Contemporary / Lyrical / Modern",
          "Figure Skating",
          "Folk / Cultural Dance",
          " Hip Hop / Street Styles",
          "Holiday",
          "Jazz",
          "Tap",
        ].map((item) => (
          <Link href="/">{item}</Link>
        ))}
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold mb-3"> Shop Categories</h3>
        {[
          "Leotards",
          "Unitards",
          "Dresses ",
          "Two-Piece Sets & Suits",
          "Jackets& Coats",
          "Shirts & Tops",
          "Skirts & Tutus",
          "Pants & Leggings",
          "Shorts",
          "Warm-ups",
          "Tights",
          "Shoes",
          "Accessories",
        ].map((item) => (
          <Link href="/">{item}</Link>
        ))}
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold mb-3"> Support</h3>
        {[
          "FAQ",
          " How It Works",
          " Ensemble Membership",
          " Returns & Shipping",
          "How To Ship a Tutu",
          "GoShimmy Guarantee",
        ].map((item) => (
          <Link href="/">{item}</Link>
        ))}
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold mb-3"> Company</h3>
        {[
          "About Us",
          "Our Partnerships",
          "Terms of Service",
          "Privacy Policy",
          " Accessibility",
          "Contact Us",
        ].map((item) => (
          <Link href="/">{item}</Link>
        ))}
      </div>
    </section>
  );
}

export default Footer