import React from "react";
import Slider from "react-slick";

const Companies = () => {
  const logos = [
    {
      id: 0,
      img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cae6da5aab64f973a_P-TAL.svg",
    },
    {
      id: 1,
      img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abd73c0bc5eae6cf1aa65e_samosa%20party%20logo.svg",
    },
    {
      id: 2,
      img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aaac27309c4dfd77888_pilgrim%201.svg",
    },
    {
      id: 3,
      img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aabb032484e3993df3d_wow.svg",
    },
    {
      id: 4,
      img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb50ec11a19b72a44bdd_happilo.svg",
    },
    {
      id: 5,
      img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/6526695834fd99c7f319053a_MANOHAR.svg",
    },
    {
      id: 6,
      img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958d1b6be6bd4e44c51_sylvi.svg",
    },
    {
      id: 7,
      img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ec91cc7a39f32fdd8_drip%20project.svg",
    },
    {
      id: 8,
      img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ebeab55128d85b2a8_zavya.svg",
    },
    {
      id: 9,
      img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958030e4b24786a6907_tahiliya.svg",
    },
    {
      id: 10,
      img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cdc92e571f2b995d1_bakers%20dozen.svg",
    },
    {
      id: 11,
      img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c2b88fe75cb4e9e62_BLUE%20TRIBE.svg",
    },
    {
      id: 12,
      img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77ce4473d4ee696e286_TAILOR%20AND%20CIRCUS.svg",
    },
    {
      id: 13,
      img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c7ce8d5a488d39c51_maisha.svg",
    },
    {
      id: 14,
      img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c88f37016d6cd94f5_mosaic.svg",
    },
    {
      id: 15,
      img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958f53ea35cd012178e_DILIP%20SONIGARA.svg",
    },
    {
      id: 16,
      img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb510685690c8d8b1bdc_rr%20cable.svg",
    },
  ];
  var settings = {
    dots: false,
    arrows: false,
    infinite: true, // Set to true to keep the slider moving continuously
    autoplay: true,
    speed: 8000,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  return (
    <div className="slider-container mb-8">
      <Slider {...settings}>
        {logos.map((logo, index) => {
          return (
            <div
              className=""
              style={{
                padding: 0,
              }}
            >
              <img
                key={index}
                src={logo.img}
                style={{
                  width: "180px",
                  height: "90px",
                  padding: "0 30px",
                }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Companies;
