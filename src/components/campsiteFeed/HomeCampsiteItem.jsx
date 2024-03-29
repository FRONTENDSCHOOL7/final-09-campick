import React from "react";
import {
  CampSiteItemWrapper,
  HomeCampSiteName,
  HomeCampSitePrice,
  HomeCampsiteImg,
} from "./HomeCampsiteFeed.style";

export default function HomeCampsiteItem({ data, onClick }) {
  const itemName = JSON.parse(data.itemName);
  const priceformatted = data.price.toLocaleString("ko-KR");

  const handleClick = e => {
    onClick(data); // 부모 컴포넌트에 데이터 전달
  };
  const handleDragStart = e => {
    e.preventDefault();
  };

  return (
    <CampSiteItemWrapper
      onClick={handleClick}
      aria-label="상품 상세 모달창 가기 버튼"
    >
      <HomeCampsiteImg
        src={data.itemImage}
        onDragStart={handleDragStart}
        alt=""
      />
      <HomeCampSiteName>{itemName.name}</HomeCampSiteName>
      <HomeCampSitePrice>{priceformatted}원 ~</HomeCampSitePrice>
    </CampSiteItemWrapper>
  );
}
