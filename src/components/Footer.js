import React from "react";
import logo from "../utils/logo.png";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-top gap-2 my-10">
        <div className="flex flex-col  mb-4 md:mb-0 w-2/5 ml-2 ">
          <div className="flex  items-center">
            <img src={logo} alt="Company Logo" className="h-20 " />
            <span className="text-4xl font-semibold ">CleverBooks</span>
          </div>
          <p className=" mt-10 ml-4 text-gray-300 text-sm w-4/5">
            CleverBooks is an AI-powered supply chain software that provides
            companies tools for demand forecasting, inventory planning and more.
            This helps them have the right amount of stock, optimise space and
            fulfil every order.
          </p>
        </div>
        <div className="flex flex-col md:flex-row text-center md:text-left ml-5 ">
          <div className="md:flex flex-col justify-start mx-14">
            <p className="mb-3">Explore</p>

            <a href="#product" className=" text-gray-300 text-sm my-1 md:my-3">
              Product
            </a>
            <a href="#about" className="text-gray-300 text-sm my-1 md:my-3">
              Pricing
            </a>
            <a href="#services" className="text-gray-300 text-sm my-1 md:my-3">
              Services
            </a>
            <a href="#contact" className="text-gray-300 text-sm my-1 md:my-3">
              Career
            </a>
          </div>
          <div className="md:flex flex-col justify-start mx-14">
            <p className="mb-3">About</p>
            <a href="#about" className=" text-gray-300 text-sm  my-1 md:my-3">
              About
            </a>
            <a href="#about" className="text-gray-300 text-sm  my-1 md:my-3">
              Blogs
            </a>
          </div>
        </div>
        <div className="text-center md:flex flex-col items-center  w-1/3">
          <div className="md:text-left">
            <p className="text-white text-base mb-5">Contact CleverBooks</p>
            <div className="text-gray-300 text-sm ">
              <a href="mailto:sales@getcleverbokks.ai" className="">
                sales@getcleverbook.ai
              </a>
              <div className="mt-5">
                <p>Registered Office: </p>
                <p className="">123 Street Name, City, State</p>
                <p className="mt-5">Contact Number:</p>
                <p className="">(123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
