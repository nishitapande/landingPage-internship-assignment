import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import img1 from "../utils/samosalogo.png";
import avator from "../utils/avator.jpg";

const Review = () => {
  const cards = [
    {
      id: 0,
      name: "Diksha Pande",
      profile: avator,
      designation: "Co-founder,Samosa Party",

      description:
        "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
      companyLogo: img1,
      reviewPic:
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddc11c29c3652662f0739_samosa%20party%20image.webp",
      mainText: [
        {
          id: 0,
          mainpara: "upto 95%",
          subpara: "Demand Fulfilment",
        },
        {
          id: 1,
          mainpara: "< 3%",
          subpara: "Daily Stock-out",
        },
      ],
      link: "https://www.getcrest.ai/customer-stories/crest-helps-samosa-party-fulfil-95-of-their-customer-demand",
    },
    {
      id: 1,
      name: "Nishita Pande",
      profile: avator,

      designation: "Co-founder,Samosa Party",
      description:
        "brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
      companyLogo: img1,
      reviewPic:
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664c90f75b0f0e735016706b_P-tal-p-500.webp",
      mainText: [
        {
          id: 0,
          mainpara: "Automated Invoice Reconciliation",
        },
        {
          id: 1,
          mainpara: "Channel wise Sales Classification",
        },
      ],
    },
  ];

  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [profilePic, setProfilePic] = useState({});
  const [companyLogo, setCompanyLogo] = useState({});
  const [reviewPic, setReviewPic] = useState("");
  const [mainText, setMainText] = useState([]);
  const [link, setLink] = useState("");
  useEffect(() => {
    const card = cards.find((card) => card.id === id);
    if (card) {
      setId(card.id);
      setDesc(card.description);
      setName(card.name);
      setDesignation(card.designation);
      setProfilePic(card.profile);
      setCompanyLogo(card.companyLogo);
      setReviewPic(card.reviewPic);
      setMainText(card.mainText);
      setLink(card.link);
    }
  }, [id]);
  const next = () => {
    if (id < cards.length - 1) {
      setId(id + 1);
    } else {
      setId(0);
    }
  };

  const previous = () => {
    if (id > 0) {
      setId(id - 1);
    } else {
      setId(cards.length - 1);
    }
  };
  return (
    <div className="h-screen">
      <div className="w-full mx-auto ">
        <div className=" mx-auto w-5/6 items-center justify-center">
          <div className="flex  items-start justify-between gap-10">
            <div className=" w-4/6 ">
              {/* PARA WALA DIV */}
              <div>
                <p className="text-lg font-normal text-navblack pb-6">{desc}</p>
              </div>
              <div className="flex justify-between items-center mb-8 ">
                <div>
                  {/* AVATOR*/}
                  <div>
                    <div className="flex items-center gap-4 mt-5">
                      <img
                        className="w-14 h-14 rounded-full "
                        src={profilePic}
                        alt={`${name} profile pic`}
                      />
                      <div className="font-semibold text-lg flex flex-col justify-center">
                        <div>{name}</div>
                        <div className="text-base text-gray-800  font-normal">
                          {designation}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* buttons */}
                  <div className="mt-6 ">
                    <button onClick={previous}>
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
                              style={{
                                stopColor: "rgba(252,144,126,1)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="60%"
                              style={{
                                stopColor: "rgba(159,110,237,1)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="100%"
                              style={{
                                stopColor: "rgba(64,45,95,1)",
                                stopOpacity: 1,
                              }}
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                      <IoIosArrowDropleft
                        style={{
                          fill: "url(#iconGradient)",
                          width: "40px",
                          height: "40px",
                          margin: "2px",
                        }}
                      />
                    </button>
                    <button onClick={next}>
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
                              style={{
                                stopColor: "rgba(252,144,126,1)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="60%"
                              style={{
                                stopColor: "rgba(159,110,237,1)",
                                stopOpacity: 1,
                              }}
                            />
                            <stop
                              offset="100%"
                              style={{
                                stopColor: "rgba(64,45,95,1)",
                                stopOpacity: 1,
                              }}
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                      <IoIosArrowDropright
                        style={{
                          fill: "url(#iconGradient)",
                          width: "40px",
                          height: "40px",
                          margin: "2px",
                        }}
                      />
                    </button>
                  </div>
                </div>
                <div>
                  {/* Company logo */}
                  <div>
                    <img
                      src={companyLogo}
                      style={{
                        width: "120px",
                        height: "70px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex gap-3 h-20">
                  {mainText.map((item, index) => {
                    return (
                      <div
                        className="border  text-center rounded-2xl w-56 bg-lavender h-28 "
                        style={{
                          padding: "15px 24px",

                          lineHeight: "28px",
                        }}
                      >
                        <div
                          className="container"
                          style={{
                            margin: "auto",
                          }}
                        >
                          <p
                            className="text-gradient text-center items-center"
                            style={{
                              fontSize: "24px",
                            }}
                          >
                            {item.mainpara}
                          </p>
                          {item.subpara && (
                            <span className="text-lg"> {item.subpara}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {link && (
                  <a href={link}>
                    <div className="border  rounded-lg w-56 bg-lavender ">
                      <div className="flex flex-col p-5 ">
                        <p
                          className="font-semibold text-gradient text-center"
                          style={{
                            fontSize: "24px",
                            lineHeight: "28px",
                            padding: "15px 24px",
                          }}
                        >
                          Read More
                        </p>
                      </div>
                    </div>
                  </a>
                )}
              </div>
            </div>
            {/* IMAGE WALA DIV */}
            <div className="">
              <div className=" flex justify-center items-center border-black ">
                <img
                  src={reviewPic}
                  className="w-96 border rounded-lg border-black"
                  style={{
                    height: "450px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
