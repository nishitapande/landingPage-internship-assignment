import React, { useState } from "react";
import logo from "../utils/logo.png";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsIndustryDropdownOpen(false);

    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleIndustryDropdown = () => {
    setIsDropdownOpen(false);
    setIsIndustryDropdownOpen(!isIndustryDropdownOpen);
  };

  return (
    <nav className="bg-navblack border-gray-200">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">
        <a
          href="https://flowbite.com"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-8" alt="CleverBooks Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            CleverBooks
          </span>
        </a>
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex flex-row space-x-8">
            <li className="relative">
              <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                onClick={toggleDropdown}
                className="flex items-center justify-between py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-peach md:p-0 dark:text-white md:dark:hover:text-peach dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Product{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-peach dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pricing
              </a>
            </li>
            <li className="relative">
              <button
                id="industry-dropdown-button"
                data-collapse-toggle="industry-dropdown"
                onClick={toggleIndustryDropdown}
                className="flex items-center justify-between py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-peach md:p-0 dark:text-white md:dark:hover:text-peach dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Industry{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-peach md:p-0 dark:text-white md:dark:hover:text-peach dark:hover:bg-gray-700 dark:hover:text-peach md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Customer Stories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-peach md:p-0 dark:text-white md:dark:hover:text-peach dark:hover:bg-gray-700 dark:hover:text-peach md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-peach md:p-0 dark:text-white md:dark:hover:text-peach dark:hover:bg-gray-700 dark:hover:text-peach md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 py-2 px-4 rounded"
          >
            Login
          </a>
          <button className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full">
            Talk to us
          </button>
        </div>
      </div>
      {isDropdownOpen && (
        <div
          id="mega-menu-full-dropdown"
          className="border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y text-black mt-1"
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-black sm:grid-cols-2 md:px-6">
            <ul>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-lavender">
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-800">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-lavender">
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-800">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-lavender">
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-800">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-lavender">
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-800">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-lavender">
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-800">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-lavender">
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-800">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
      {isIndustryDropdownOpen && (
        <div
          id="mega-menu-full-dropdown"
          className="border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y text-black mt-1"
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-black sm:grid-cols-2 md:px-6">
            <ul>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-lavender">
                  <div className="font-semibold">Online Stores</div>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-lavender">
                  <div className="font-semibold">Segmentation</div>
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-lavender">
                  <div className="font-semibold">Marketing CRM</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
