import React, { useCallback, useState } from "react";
import {
  HomeCampSiteList,
  HomeCampSiteTitle,
  WrapperHomeCampsite,
} from "./HomeCampsiteFeed.style";
import HomeCampsiteItem from "./HomeCampsiteItem";

export default function HomeCampsiteFeed(props) {
  const handleOnClickItem = item => {
    console.log(item);
  };

  return (
    <WrapperHomeCampsite>
      <HomeCampSiteTitle>내 친구들의 캠핑장</HomeCampSiteTitle>

      <HomeCampSiteList>
        {props.productInfo &&
          props.productInfo.map(item => (
            <HomeCampsiteItem
              key={item.id}
              data={item}
              onClick={handleOnClickItem}
            />
          ))}
        <h2>sdsafdf</h2>
        <h2>sdsdff</h2>
        <h2>sdsdff</h2>
      </HomeCampSiteList>
    </WrapperHomeCampsite>
  );
}
