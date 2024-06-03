import React from "react";
import heroImage from "../utils/features.png"; // Replace with your image path

const Hero = () => {
  return (
    <section className="bg-navblack text-white py-20 px-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to CleverBooks
          </h1>
          <p className="text-lg mb-8">
            Discover a world of knowledge with CleverBooks. Our platform
            provides you with the best tools and resources to excel in your
            studies and beyond.
          </p>
          <button className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 text-white px-6 py-3 rounded text-lg">
            Get Started
          </button>
        </div>
        <div className="lg:w-1/2 lg:pl-10 mt-10 lg:mt-0">
          <img src={heroImage} alt="Hero" className="w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
