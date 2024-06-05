import React from "react";
import heroImage from "../utils/features.png"; // Replace with your image path

const Hero = () => {
  return (
    <div>
      <section className=" text-white py-20 h-screen div overflow-x-hidden">
        <div className="container flex flex-col lg:flex-row items-center gap-2 justify-between">
          <div className=" ml-14 lg:w-1/2 lg:pl-8 ">
            <h1
              className="text-5xl md:text-6xl tracking-wide font-semibold mb-9"
              style={{
                lineHeight: 1.5,
              }}
            >
              Every order fulfilled,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 py-2 pl-4 ">
                on time.
              </span>
            </h1>
            <p
              className="text-lg mt-5 mb-3 font-normal"
              style={{
                lineHeight: "28px",
              }}
            >
              Eliminate overstocking and under-stocking with Crest. Built by
              supply-chain experts, it brings the same technology used by large
              global brands to power fast-growing startups. In short, we make
              supply meet demand, and then help you grow both.
            </p>
            <button class="relative inline-block bg-transparent border border-gradient rounded-full  px-6 py-2 text-lg mt-3">
              <span class="relative text-gradient bg-transparent">
                Get Started with CleverBooks
              </span>
            </button>
          </div>
          <div className="lg:w-1/2 lg: mt-10 lg:mt-0 h-full mr-0">
            <img
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg"
              alt="Hero"
              className="w-full rounded-lg h-full mr-0 pr-0 pl-20 translate-x-28"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
