import React from "react";

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col justify-center items-center text-center my-10">
        <h1 className="font-semibold text-4xl pt-10 pb-2">
          But don't just take my word for it.
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600 pt-4">
          Take a look at what my clients have to say. I've linked their websites
          too. Check them out!
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 mt-2 flex-auto">
              <h6 className="text-xl font-semibold">
                <i className="fas fa-quote-left"></i> SyteTech provided us with
                an excellent website. Insert more good stuff about them here.{" "}
                <i className="fas fa-quote-right"></i>
              </h6>
              <p className="mt-5 text-gray-600">York Student Think Tank</p>
              <a
                href="https://ystt.co.uk"
                target="_blank"
                className="mt-2 mb-4 text-blue-400"
              >
                ystt.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
