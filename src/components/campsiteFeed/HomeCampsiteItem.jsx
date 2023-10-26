import React from "react";
import {
  CampSiteItemWrapper,
  HomeCampSiteName,
  HomeCampSitePrice,
  HomeCampsiteImg,
} from "./HomeCampsiteFeed.style";

export default function HomeCampsiteItem() {
  return (
    <CampSiteItemWrapper>
      <HomeCampsiteImg />
      <HomeCampSiteName>캠핑장 이름</HomeCampSiteName>
      <HomeCampSitePrice>가격</HomeCampSitePrice>
    </CampSiteItemWrapper>
  );
}
