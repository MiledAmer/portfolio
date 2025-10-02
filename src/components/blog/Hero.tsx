import React from "react";
import HomeIllustration from "./HomeIllustration";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-12 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7 xl:col-span-8">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            Helping you achieve success and tick more boxes
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            Here at flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        
        </div>
        <HomeIllustration />
      </div>
    </section>
  );
};

export default Hero;
