import React, { useCallback, useState } from "react";
import {
  HomeCampSiteList,
  HomeCampSiteTitle,
  WrapperHomeCampsite,
} from "./HomeCampsiteFeed.style";
import HomeCampsiteItem from "./HomeCampsiteItem";
import { Swiper, SwiperSlide } from "swiper/react"; // basic

import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

export default function HomeCampsiteFeed(props) {
  const handleOnClickItem = item => {
    console.log(item);
  };

  return (
    <WrapperHomeCampsite>
      <HomeCampSiteTitle>내 친구들의 캠핑장</HomeCampSiteTitle>

      <HomeCampSiteList>
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          freeMode={true}
          modules={[FreeMode]}
        >
          {props.productInfo &&
            props.productInfo.map(item => (
              <SwiperSlide key={item.id}>
                <HomeCampsiteItem data={item} onClick={handleOnClickItem} />
              </SwiperSlide>
            ))}
        </Swiper>
      </HomeCampSiteList>
    </WrapperHomeCampsite>
  );
}