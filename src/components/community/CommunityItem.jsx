import React from "react";
import point from "../../assets/image/point.png";
import {
  Address,
  BackgroundImage,
  CommunityImageContainer,
  GradientOverlay,
  TextWithIcon,
  PointIcon,
} from "./Community.style";

const CommunityItem = ({ imageurl, address }) => {
  return (
    <>
      <CommunityImageContainer>
        <BackgroundImage imageurl={imageurl} /> <GradientOverlay />
        <TextWithIcon>
          <PointIcon src={point} alt="icon" /> <Address>{address}</Address>
        </TextWithIcon>
      </CommunityImageContainer>
    </>
  );
};

export default CommunityItem;
