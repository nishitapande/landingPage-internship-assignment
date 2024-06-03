import React, { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

const Carousel = ({ cards }) => {
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
    <div className="carousel-container relative">
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
        <Slider ref={sliderRef} {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="p-4">
              <div className="bg-white p-6 h-2/4 rounded-3xl shadow-lg w-3/4 mx-auto flex items-center justify-evenly">
                <img
                  className="h-72 rounded w-3/5 object-cover object-center mb-6"
                  src={card.image}
                  alt="content"
                />
                <div className="ml-6">
                  <h2 className="text-lg text-gray-900 text-3xl font-medium title-font mb-4">
                    {card.title}
                  </h2>
                  <p className="leading-relaxed text-sm">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
