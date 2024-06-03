import React from "react";
import heroImage from "../utils/features.png"; // Replace with your image path

const Hero = () => {
  return (
    <div>
      <section className=" text-white py-20 px-10 h-screen div">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pl-8">
            <h1
              className="text-5xl md:text-6xl tracking-wide font-semibold mb-9"
              style={{
                lineHeight: 1.5,
              }}
            >
              Every order fulfilled,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 py-2 px-4 ">
                on time.
              </span>
            </h1>
            <p className="text-lg mb-8">
              Eliminate overstocking and under-stocking with Crest. Built by
              supply-chain experts, it brings the same technology used by large
              global brands to power fast-growing startups. In short, we make
              supply meet demand, and then help you grow both.
            </p>
            <button className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 text-white px-6 py-3 rounded text-lg">
              Get Started
            </button>
          </div>
          <div className="lg:w-1/2 lg:pl-10 mt-10 lg:mt-0 h-full ">
            <img
              src={heroImage}
              alt="Hero"
              className="w-full rounded-lg h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
