import React from "react";
import ScrollItem from "./ScrollItem";

const Gallery = () => {
  return (
    <section id="gallery" className="text-gray-600 body-font">
      <div className="container px-5 pt-12 mx-auto">
        <div className="flex flex-col justify-center items-center text-center my-10 pb-6">
          <h1 className="font-semibold text-black text-4xl pt-10 pb-2">
            Why choose us?
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600 pt-4">
            We want you to make your mark online, and we've got all the tools
            you need.
          </p>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="design-sm.jpg"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Web Design
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Your website is your storefront. It'll tell potential clients
              everything they need to know about you and your business. <br />
              We'll help you get their attention.
            </p>
            <ScrollItem itemName={"contact"} />
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="seo-sm.jpg"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              SEO
            </h2>
            <p className="text-base leading-relaxed mt-2">
              So you've got a website, but can anyone find it? Without SEO -{" "}
              <em>Search Engine Optimisation</em> - you'll miss out on leads.
              <br />
              Good SEO is vital for any business. We'll handle it for you.
            </p>
            <ScrollItem itemName={"contact"} />
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="media-sm.jpg"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Digital Marketing
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Limitless marketing potential at your fingertips. Spread your
              message far and wide, or target a niche with laser focus.
              <br />
              We'll put you in touch with your target audience.
            </p>
            <ScrollItem itemName={"contact"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
