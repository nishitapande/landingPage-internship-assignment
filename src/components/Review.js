import React, { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import avator from "../utils/avator.jpg";
import samosaimg from "../utils/samosa.jpg";
const ReviewsSection = () => {
  const cards = [
    {
      id: 0,
      name: "Sushant",
      designation: "Co-founder,Samosa Party",
      description:
        "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
      img: avator,
      img1: samosaimg,
    },
    {
      id: 1,
      name: "Sushant",
      designation: "Co-founder,Samosa Party",
      description:
        "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
      img: avator,
      img1: samosaimg,
    },
  ];
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className="carousel-container relative my-10">
      <div className="relative mx-20">
        <button
          onClick={previous}
          className="absolute left-0 top-1/2 transform -translate-y-1/2  z-10"
        >
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
          <IoIosArrowDropleft
            style={{
              fill: "url(#iconGradient)",
              width: "50px",
              height: "50px",
              margin: "2px",
            }}
          />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2  z-10"
        >
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
          <IoIosArrowDropright
            style={{
              fill: "url(#iconGradient)",
              width: "50px",
              height: "50px",
              margin: "2px",
            }}
          />
        </button>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {cards.map((card, index) => {
          return (
            <div className="p-4" key={index}>
              <div className="bg-white p-6 h-2/4 rounded-3xl shadow-lg w-3/4 mx-auto flex items-center justify-evenly">
                <div className="w-4/5">
                  <div className="">
                    <p className="w-4/5">{card.description}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mt-10">
                      <img
                        className="w-12 h-12 rounded-full"
                        src={card.img}
                        alt=""
                      />
                      <div className="font-medium text-black">
                        <p> {card.name} </p>
                        <p className="text-gray-700">{card.designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-2/4 bg-red-900 h-72">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={card.img1}
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ReviewsSection;
