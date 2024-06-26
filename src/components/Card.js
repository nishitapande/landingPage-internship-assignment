import React from "react";
import { GoChecklist, BsHouse, IoBagOutline } from "react-icons/go";
const Card = ({ cardItem }) => {
  return (
    <div>
      <div className="max-w-72 p-6 bg-lavender border border-gray-200 rounded-lg h-64 mb-5 ">
        <svg width="0" height="0">
          <defs>
            <linearGradient
              id="iconGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "rgba(252,144,126,1)", stopOpacity: 1 }}
              />
              <stop
                offset="60%"
                style={{ stopColor: "rgba(159,110,237,1)", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(64,45,95,1)", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
        </svg>
        <GoChecklist
          style={{
            fill: "url(#iconGradient)",
            width: "50px",
            height: "50px",
            margin: "2px",
          }}
        />
        <a href="#">
          <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">
            {cardItem.title}
          </h2>
        </a>
        <p
          className="mb-3 font-normal text-black text-base"
          style={{
            lineHeight: "24px",
          }}
        >
          {cardItem.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
