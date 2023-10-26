import React from "react";
import {
  HomeCampSiteList,
  HomeCampSiteTitle,
  HomeCampsiteImg,
  WrapperHomeCampsite,
} from "./HomeCampsiteFeed.style";
import HomeCampsiteItem from "./HomeCampsiteItem";

export default function HomeCampsiteFeed() {
  return (
    <WrapperHomeCampsite>
      <HomeCampSiteTitle>등록된 모든 캠핑장</HomeCampSiteTitle>
      <HomeCampSiteList>
        <HomeCampsiteItem />
        <HomeCampsiteItem />
        <HomeCampsiteItem />
        <HomeCampsiteItem />
      </HomeCampSiteList>
    </WrapperHomeCampsite>
  );
}
