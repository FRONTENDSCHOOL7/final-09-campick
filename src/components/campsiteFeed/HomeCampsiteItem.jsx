import React from "react";
import {
  CampSiteItemWrapper,
  HomeCampSiteName,
  HomeCampSitePrice,
  HomeCampsiteImg,
} from "./HomeCampsiteFeed.style";

export default function HomeCampsiteItem({ data }) {
  const itemName = JSON.parse(data.itemName);

  return (
    <CampSiteItemWrapper>
      <HomeCampsiteImg src={data.itemImage} />
      <HomeCampSiteName>{itemName.name}</HomeCampSiteName>
      <HomeCampSitePrice>{data.price}</HomeCampSitePrice>
    </CampSiteItemWrapper>
  );
}
