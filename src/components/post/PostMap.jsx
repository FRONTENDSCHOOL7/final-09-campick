import React from 'react'
import { PointBlackIcon, PostMapWrapper } from './PostMap.style'
import pointblack from "../../assets/image/pointblack.png";


export default function PostMap({location}) {
  return (
    <PostMapWrapper>
      <PointBlackIcon src={pointblack} alt="pointIcon" />
      {location}
    </PostMapWrapper>
  )
}
