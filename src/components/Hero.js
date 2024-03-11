import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "./assests/logo.png";
import landingpage1 from "./assests/dell14.jpg";
import landingpage2 from "./assests/dell2.jpeg";
import landingpage3 from "./assests/dellk.jpg";

const SingleImage = ({ href, imgSrc, Alt }) => {
  return (
    <>
      <a
        href={href}
        className="mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]"
      >
        <img src={imgSrc} alt={Alt} className="w-full h-10" />
      </a>
    </>
  );
};

function Hero() {
  const [state, setState] = useState(false);

  // Replace "your-path-here" with the appropriate paths
  const navigation = [
    { title: "Home", path: "home" },
    { title: "About", path: "about" },
    { title: "Core Values", path: "values" },
    { title: "Event", path: "event" },
    { title: "Gallery", path: "gallery" },
    { title: "Portfolio", path: "portfolio" },
    { title: "Contact", path: "contact" },
  ];

  return (
    <>
      <nav className="relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
        <div className="flex justify-between">
          <a href="/">
            <img src={logo} width={120} height={50} alt="School logo" />
          </a>
          <button
            className="text-gray-500 outline-none md:hidden"
            onClick={() => setState(!state)}
          >
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${
            state
              ? "absolute inset-x-0 px-4 border-b bg-white md:border-none md:static"
              : "hidden"
          }`}
        >
          <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
            {navigation.map((item, idx) => (
              <li
                className="text-gray-700 text-xl hover:text-green-600 cursor-pointer"
                key={idx}
              >
                {/* Use Link from react-scroll instead of a regular anchor tag */}
                <Link
                  activeClass="active"
                  to={item.path}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer" // Add cursor-pointer class here
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </div>
          <li className="order-2 py-5 md:py-0">
            <a
              href="https://dellmodel.vacanstores.com/login" target="_blank" rel="noreferrer"
              className="py-2 px-5 rounded-lg font-medium text-white text-center bg-green-600 hover:bg-green-500 active:bg-green-700 duration-150 block md:py-3 md:inline"
            >
             Secondary Portal Access
            </a>
          </li>
        </ul>
      </nav>
      <section className="py-28">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-sm text-green-600 font-medium">
              Over 3000+ Alumni and High Flying Students
            </h1>
            <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
              Dell Int'l, a Citadel of Academic Excellence
            </h2>
            <p>Where we believe every child is born intelligent</p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a
                href="https://dellprimary.vacanstores.com/login" target="_blank"
                rel="noreferrer"
                className="block py-2 px-4 text-center text-white font-medium bg-green-600 duration-150 hover:bg-green-500 active:bg-green-700 rounded-lg shadow-lg hover:shadow-none"
              >
               Primary Portal Access
              </a>
              <a
                href="https://portal1.dellinternationalschools.com/" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-green-600 font-medium duration-150 active:text-gray-900"
              >
                <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 5.293a1 1 0 011.414 0L10 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                </a>
                Old Portal
              </a>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="-mx-2 flex flex-wrap sm:-mx-4 overflow-hidden rounded-md group-hover:opacity-75">
              <div className="w-1/2 px-2 sm:px-4">
                <div className="mb-4 h-[256px] sm:mb-8 sm:h-[442px] lg:h-[332px] xl:h-[442px]">
                  <img
                    src={landingpage1}
                    alt="hero"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="w-1/2 px-2 sm:px-4">
                <div className="mb-4 h-[120px] sm:mb-8 sm:h-[205px] lg:h-[150px] xl:h-[205px]">
                  <img
                    src={landingpage2}
                    alt="hero"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mb-4 h-[120px] sm:mb-8 sm:h-[205px] lg:h-[150px] xl:h-[205px]">
                  <img
                    src={landingpage3}
                    alt="hero"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
