import React from "react";
import Card from "./Card";
import { GoChecklist, BsHouse, IoBagOutline } from "react-icons/go";

const MainFeatures = () => {
  const cardDeatils = [
    {
      id: 0,
      title: "What to order",
      description:
        "Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.",
    },
    {
      id: 1,
      title: "When to order",
      description:
        "Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.",
    },
    {
      id: 2,
      title: "How much to stock",
      description:
        "Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.",
    },
    {
      id: 3,
      title: "Where to place",
      description:
        "Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.",
    },
  ];
  return (
    <div className="container mx-14 my-14">
      <div className="flex flex-col items-center justify-center">
        <h2
          className="font-semibold text-navblack text-center text-4xl tracking-wider my-24 mb-20"
          style={{
            fontFamily: "Proxima nova, sans-serif",
            lineHeight: "48px",
          }}
        >
          {" "}
          <strong>Four key questions answered by CleverBooks </strong>{" "}
        </h2>
        <div className="flex px-10 justify-center items-center gap-6 mb-5">
          {cardDeatils.map((cardItem) => (
            <Card cardItem={cardItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainFeatures;
