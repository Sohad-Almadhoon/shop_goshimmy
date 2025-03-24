import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import { FiltersProvider } from "@/contexts/FilterContext";


export const metadata: Metadata = {
  title: "Go shoppy",
  description: "Go Shop with shoppy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FiltersProvider>
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </FiltersProvider>
  );
}
