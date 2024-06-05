import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper-bundle.css";
import "../../node_modules/swiper/modules/pagination.css";
import { Mousewheel, Pagination } from "swiper/modules";
import "../index.css";
const Metrics = () => {
  return (
    <>
      <Swiper
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="slide1" id="div1">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="slide2" id="div2">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="slide3" id="div3">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="slide4" id="div14">
          Slide 4
        </SwiperSlide>

        <SwiperSlide className="slide4" id="div14">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="slide4" id="div14">
          Slide 6
        </SwiperSlide>
        <SwiperSlide className="slide4" id="div14">
          Slide 7
        </SwiperSlide>
        <SwiperSlide className="slide4" id="div14">
          Slide 8
        </SwiperSlide>
        <SwiperSlide className="slide4" id="div14">
          Slide 9
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Metrics;
