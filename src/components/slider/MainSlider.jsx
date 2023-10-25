import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderItem, StyledSlider } from './MainSlider.style';
import Slide1 from '../../assets/temp-img/homefeed-ad-1.png'
import Slide2 from '../../assets/temp-img/homefeed-ad-2.jpeg'
import Slide3 from '../../assets/temp-img/homefeed-ad-3.jpg'

export default function MainSlider() {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
  <StyledSlider {...settings}> 
    <SliderItem src = {Slide1} alt = "첫번째 슬라이드"/>
    <SliderItem src = {Slide2} alt = "두번째 슬라이드"/>
    <SliderItem src = {Slide3} alt = "세번째 슬라이드"/>
  </StyledSlider>
  );
};