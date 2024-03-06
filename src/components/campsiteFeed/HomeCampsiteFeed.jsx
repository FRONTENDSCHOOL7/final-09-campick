import React from "react";
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
import { FreeMode } from "swiper/modules";

export default function HomeCampsiteFeed({
  productInfo,
  setOpModal,
  setProductId,
}) {
  const handleOnClickItem = item => {
    setProductId(item.id);
    setOpModal(true);
  };

  return (
    <WrapperHomeCampsite>
      <HomeCampSiteTitle>내 친구들의 캠핑장</HomeCampSiteTitle>

      <HomeCampSiteList>
        <Swiper
          wrapperTag="ul"
          spaceBetween={
            productInfo && productInfo.length >= 3
              ? -40
              : productInfo.length === 2
              ? 40
              : 40
          }
          slidesPerView={
            productInfo && productInfo.length >= 3
              ? 2
              : productInfo.length === 2
              ? 2
              : 1
          } // 기본값 (이 값을 원하는대로 설정 가능)}
          freeMode={true}
          modules={[FreeMode]}
        >
          {productInfo &&
            productInfo.map(item => (
              <SwiperSlide key={item.id} tag="li">
                <HomeCampsiteItem data={item} onClick={handleOnClickItem} />
              </SwiperSlide>
            ))}
        </Swiper>
      </HomeCampSiteList>
    </WrapperHomeCampsite>
  );
}
