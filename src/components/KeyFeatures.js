import React from "react";
import Carousel from "./Carousel";
import img1 from "../utils//features.png";
const KeyFeatures = () => {
  const cardData = [
    {
      image: img1,
      title: "Keep domain expertise",
      description:
        "Out team members have years of expereince leading supply chains for business ranging from $10M to $10B",
    },
    {
      image: img1,
      title: "A focus on KPIs that matter",
      description:
        "Our tools help you make decisions to grow your business. Everthing works towards improving cash flow and availability ",
    },
    {
      image: img1,
      title: "Ease of use, for everyone",
      description:
        "With an intutive interface and empathetic design, CleverBooks requires only minimal training( or begineer level knowlege os supply chain) to use",
    },
    {
      image: img1,
      title: "Purpose-built & ever improving tech",
      description:
        "Our demand forecasting engine has been meticulously-built, while our ML engine contantly trains on years of data and is ever evolving ",
    },
  ];
  return (
    <div className=" bg-lavender">
      <div className=" bg-lavender pb-20">
        <h2 className="text-4xl text-semibold text-center pt-12 mb-20">
          <strong>Get CleverBooks and get..</strong>
        </h2>
        <Carousel cards={cardData} />
      </div>
    </div>
  );
};

export default KeyFeatures;
