import React from "react";
import ScrollButton from "./ScrollButton";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative pt-16 pb-32 flex content-center items-center justify-center div-hero-height shadow-xl"
    >
      <div className="absolute top-0 w-full h-full bg-top bg-cover bg-hero">
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-60 bg-black"
        ></span>
      </div>
      <div className="container relative mx-auto" data-aos="fade-in">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div>
              <h1 className="text-white font-semibold text-5xl">
                Time To <span className="text-blue-400">Level Up.</span>
              </h1>
              <p className="mt-4 py-5 text-lg text-white">
                The digital revolution is just getting started. Whether you want
                to launch a new app, get more leads for your business, or
                showcase a project, we've got you covered.
              </p>
              <ScrollButton itemName={"contact"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
