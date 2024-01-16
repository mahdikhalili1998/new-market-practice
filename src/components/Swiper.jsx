import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../css/swiper.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function App({ result }) {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {result.images.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.img} alt={result.brand} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
