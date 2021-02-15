import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import SuccessPopup from "./SuccessPopup";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [displaySuccess, setDisplaySuccess] = useState(false);

  const sendEmail = async e => {
    e.preventDefault();
    setLoading(true);

    const res = await emailjs.sendForm(
      "service_ntj0wtd",
      "template_ci7m2ch",
      e.target,
      "user_3Etx9OY4qzJzn1mP5JhAM"
    );
    console.log(res);
    e.target.reset();
    setLoading(false);
    setDisplaySuccess(true);
    setTimeout(() => {
      setDisplaySuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="pt-12 text-gray-600 body-font relative">
      <form onSubmit={sendEmail} className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Get in touch!
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Need a new website? Ecommerce platform? Got a brilliant idea for a
            new app? We can help.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full text-center">
              <button
                type="submit"
                className={`mx-auto text-white bg-blue-400 border-0 py-2 px-8 focus:outline-none hover:bg-blue-500 transition ease-in duration-200 rounded text-lg ${
                  loading ? "cursor-not-allowed" : null
                }`}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
            {displaySuccess ? <SuccessPopup /> : null}
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-400 text-center">
              <a className="">jake.keay@sytetech.co.uk | +44 1684 363773</a>
              <p className="leading-normal my-5">
                SyteTech Web Solutions
                <br />
                PO Box 374
                <br />
                Malvern
                <br />
                WR14 9JJ
              </p>
              <div className="flex justify-center align-center">
                <a
                  className=" mx-3 my-4 lg:my-2 flex items-center"
                  href="#pablo"
                >
                  <i className="text-blue-400 hover:text-blue-500 mouse transition ease-in duration-200 fab fa-facebook-square text-x leading-lg" />
                </a>

                <a
                  className=" mx-3 my-4 lg:my-2 flex items-center"
                  href="#pablo"
                >
                  <i className="text-blue-400 hover:text-blue-500 mouse transition ease-in duration-200 fab fa-instagram text-x leading-lg " />
                </a>

                <a
                  className=" mx-3 my-4 lg:my-2 flex items-center"
                  href="#pablo"
                >
                  <i className="text-blue-400 hover:text-blue-500 mouse transition ease-in duration-200 fab fa-linkedin text-x leading-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
