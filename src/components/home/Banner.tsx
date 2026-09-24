
import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="my-6 mx-auto flex w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-[#222630] bg-[#1C1F26] px-5 py-8 sm:my-8 sm:px-8 sm:py-10 md:my-10 md:flex-row md:items-center md:justify-between md:px-10 md:py-12 lg:px-14 lg:py-16">
      
      {/* Content */}
      <div className="w-full md:w-1/2">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C2F800] sm:text-sm">
          WORKOUT LIBRARY
        </p>

        <h1 className="text-3xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
          Train with intent.
          <br />
          Log every set.
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-6 text-[#9CA3AF] sm:mt-5 sm:text-base sm:leading-7 lg:text-lg">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today&apos;s plan, and watch the week&apos;s work add up.
        </p>

        <button className="mt-6 rounded-md bg-[#C2F800] px-4 py-2 font-bold text-black sm:mt-7">
          BROWSE WORKOUTS
        </button>
      </div>

      {/* Banner Image */}
      <div className="mt-8 flex w-full justify-center md:mt-0 md:w-1/2 md:justify-end">
        <Image
          src={bannerImage}
          alt="Workout"
          priority
          className="h-auto   object-contain max-w-full "
        />
      </div>
    </section>
  );
};

export default Banner;

