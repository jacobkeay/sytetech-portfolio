import React from "react";

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col justify-center items-center text-center my-10">
        <h1 className="font-semibold text-4xl pt-10 pb-2">
          But don't just take my word for it.
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600 pt-4">
          Take a look at what my clients have to say. I've linked their websites
          too. Check them out!
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="lg:pt-12 pt-6 w-full md:w-6/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 mt-2 flex-auto">
              <h6 className="text-xl font-semibold">
                <i className="fas fa-quote-left"></i> Working with Jake has been
                a great pleasure. He not only finishes work on time, but is
                quick with fixes, doing most of these in his own time and way
                before we expected him to. He goes above and beyond and I would
                recommend him to anyone wanting not only a beautiful and
                functional website, but a nice and kind person to walk you
                through it and teach you to maintain it.{" "}
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
