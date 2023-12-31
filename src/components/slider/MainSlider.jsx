import React from "react";
import { SliderItem, SliderWrapper } from "./MainSlider.style";
import Slide1 from "../../assets/temp-img/homefeed-ad-1.png";
import Slide2 from "../../assets/temp-img/homefeed-ad-2.jpeg";
import Slide3 from "../../assets/temp-img/homefeed-ad-3.jpg";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function MainSlider() {
  return (
    <SliderWrapper>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <SliderItem src={Slide1} alt="광고 슬라이드 1" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem src={Slide2} alt="광고 슬라이드 2" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem src={Slide3} alt="광고 슬라이드 3" />
        </SwiperSlide>
      </Swiper>
    </SliderWrapper>
  );
}
