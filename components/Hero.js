import React from "react";

const Hero = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center div-hero-height">
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
              <p className="mt-4 text-lg text-white">
                The digital revolution is just getting started. Whether you want
                to launch a new app, get more leads for your business, or
                showcase a project, we've got you covered.
              </p>
              <a
                href="#"
                className="bg-transparent hover:bg-blue-400 text-blue-400 font-semibold hover:text-white p-4 border border-blue-400 hover:border-transparent rounded inline-block mt-5 cursor-pointer mouse transition ease-in duration-200"
              >
                <i className="fas fa-arrow-right"></i> Book a Free Discovery
                Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
