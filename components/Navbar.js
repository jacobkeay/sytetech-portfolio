import { useState } from "react";

const Navbar = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="flex items-center">
            <img src="logo-dot-blue-sm.png" alt="SyteTech " />
            <a
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " title-lg font-bold leading-relaxed inline-block mr-4 ml-3 py-2 whitespace-no-wrap uppercase"
              }
              href="#"
            >
              SyteTech Web Solutions
            </a>
          </div>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " mx-3 my-4 lg:my-2 flex items-center text-xs uppercase font-bold"
                }
                href="#"
              >
                <i className="text-blue-400 hover:text-blue-200 mouse transition ease-in duration-200 fab fa-facebook-square text-lg leading-lg" />
                <span className="lg:hidden inline-block ml-2">Share</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " mx-3 my-4 lg:my-2 flex items-center text-xs uppercase font-bold"
                }
                href="#"
              >
                <i className="text-blue-400 hover:text-blue-200 mouse transition ease-in duration-200 fab fa-instagram text-lg leading-lg " />
                <span className="lg:hidden inline-block ml-2">Follow</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " mx-3 my-4 lg:my-2 flex items-center text-xs uppercase font-bold"
                }
                href="https://www.linkedin.com/in/jake-keay-a42970206/"
              >
                <i className="text-blue-400 hover:text-blue-200 mouse transition ease-in duration-200 fab fa-linkedin text-lg leading-lg" />
                <span className="lg:hidden inline-block ml-2">Connect</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
