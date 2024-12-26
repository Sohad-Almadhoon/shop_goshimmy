import Image from "next/image";
import Header from "./components/shared/Header";

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
      <section className="lg:mx-24 mx-5 my-10">
        <h3 className="mb-3 font-medium text-xl">Shop by genre</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            "Ballet",
            "Hip hop",
            "Contemporary",
            "Ballroom",
            "Character",
            "Tap",
          ].map((title, index) => (
            <div>
              <img
                src={`/images/main-${index + 1}.png`}
                alt={`img-${index + 1}`}
                className="lg:w-52 w-full h-56 rounded-xl object-cover "
              />
              <span className="mt-4 text-sm">{title}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="lg:mx-24 mx-5 my-10">
        <h3 className="mb-3 font-medium text-xl">Shop newly listed</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {["James", "Annie", "Phill", "James", "Annie", "Phill"].map(
            (title, index) => (
              <div>
                <img
                  src="/images/palle.jpg"
                  alt={`img-${index + 1}`}
                  className="lg:w-52 w-full h-56 rounded-xl object-cover"
                />
                <h4 className="mt-5">Item {index + 1}</h4>
                <span className="mt-4 text-sm text-gray-400">By {title}</span>
              </div>
            )
          )}
        </div>
      </section>
      <section className="flex lg:flex-row flex-col">
        <div className="bg-primary_bold text-white flex-1 lg:pl-24 lg:py-0 p-10 flex justify-center flex-col">
          <h4 className="text-2xl font-bold mb-3">Ensemble Membership</h4>
          <p className="text-[#FCFCFC] text-sm max-w-md w-full leading-relaxed">
            Calling all dance studio owners, directors, and choreographers!
            Ensemble is a program designed specifically for you to be able to
            buy or sell multiple pieces of the same costume.
            <span className="my-2 block">
              {" "}
              By joining the GoShimmy Ensemble, you receive exclusive access to
              listings and bulk pricing of group costumes and rehearsal wear,
              along with a virtual course teaching you how to create your own
              profitable costume database.
            </span>
            Expand your business while helping to build a more sustainable
            world.
          </p>
          <span className="bg-white px-5 py-1 rounded-2xl text-black w-fit mt-5 cursor-pointer">
            Learn more
          </span>
        </div>

        <div className="flex-1">
          <img src="/images/section2.png" className="object-cover" />
        </div>
      </section>
      <section className="flex lg:flex-row flex-col lg:mx-24 mx-10 my-12 gap-12">
        <div className="flex-1">
          <img
            src="/images/section3.png"
            alt=""
            className="h-80 w-full rounded-2xl object-cover"
          />
          <p className="text-primary font-bold mt-3">Shop Costumes</p>
        </div>
        <div className="flex-1">
          <img
            src="/images/section31.png"
            alt=""
            className="h-80 w-full rounded-2xl object-cover"
          />
          <p className="text-primary  font-bold mt-3">Shop Rehearsal Wear</p>
        </div>
      </section>
      <section className="flex px-24">
        <div className="flex-1 mx-auto flex justify-center items-center">
          <img
            src="/images/section5.png"
            alt=""
            className="rounded-full size-80 object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="font-bold"> By dancers, for dancers:</h3>
          <p className="max-w-md text-sm my-5">
            {" "}
            “Over the years, I have begun to understand the collective strength
            and power the dance community has to make a difference in the world.
            We are a community of passionate teachers, mentors, students,
            colleagues, creators, and friends. I believe we have the power to
            make a positive impact on our environment and our future. GoShimmy
            is a platform that allows us, as a dance community, to connect,
            re-use, and give back.
          </p>
          <h4 className="text-sm font-bold"> Jen Bradford</h4>
          <span className="text-sm font-bold"> Founder & CEO</span>
        </div>
      </section>
    </div>
  );
}
