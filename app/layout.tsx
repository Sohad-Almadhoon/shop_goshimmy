import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400","600","500", "700" , "800"],
  display: "swap",
});

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
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
