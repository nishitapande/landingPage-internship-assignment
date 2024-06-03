import React from "react";
import "./cta.css";
const Cta = () => {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="moving-gradient w-5/6 h-4/6 flex flex-col  items-center rounded-2xl">
        <h2 className="text-white text-5xl mt-24 font-semibold">
          You can grow faster than you think!
        </h2>
        <p className="text-white text-sm w-6/12 mt-16 text-center">
          Plan with Crest to fulfil your demand today, and dreams tomorrow. We
          bring the methods and technologies of large global companies to help
          brands of all sizes scale.
        </p>
        <button className="bg-black text-white rounded-full py-2 px-4 mt-10">
          Get Started with CleverBooks
        </button>
      </div>
    </div>
  );
};

export default Cta;
