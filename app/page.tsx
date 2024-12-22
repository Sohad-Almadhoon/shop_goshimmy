"use client";

import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="py-16 text-white bg-dance-pattern bg-cover bg-center bg-no-repeat">
        <h3 className="ml-24 text-3xl font-bold max-w-lg">
          Shop the closets and costume collections of dancers everywhere.
        </h3>
        <p className="ml-24 mb-5 max-w-sm w-full text-xs text-[#FFFFFF] text-opacity-80 mt-4">
          Welcome to GoShimmy! Join a community of dancers, teachers, parents,
          studio owners, directors, & choreographers coming together to
          reimagine how the dance world shops. Buy or sell new, gently used, and
          one-of-a-kind costumes, rehearsal wear, and essentials.
        </p>
        <span className="ml-24  mt-12 cursor-pointer bg-primary text-white p-2 px-5 rounded-2xl">
          Shop now
        </span>
      </main>
    </div>
  );
}
