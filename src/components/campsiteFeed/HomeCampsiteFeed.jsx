import React, { useCallback, useState } from "react";
import {
  HomeCampSiteList,
  HomeCampSiteTitle,
  HomeCampsiteImg,
  WrapperHomeCampsite,
} from "./HomeCampsiteFeed.style";
import HomeCampsiteItem from "./HomeCampsiteItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeCampsiteFeed(props) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    //draggable: true,
  };

  return (
    <WrapperHomeCampsite>
      <HomeCampSiteTitle>내 친구들의 캠핑장</HomeCampSiteTitle>

      <HomeCampSiteList>
        {/* <Slider {...settings}> */}
        {props.productInfo &&
          props.productInfo.map(item => (
            <HomeCampsiteItem key={item.id} data={item} />
          ))}
        {/* </Slider> */}
      </HomeCampSiteList>
    </WrapperHomeCampsite>
  );
}
