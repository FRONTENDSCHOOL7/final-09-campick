import React from 'react'
import { PointIcon, PostMapWrapper } from './PostMap.style'
import point from "../../assets/image/point.png";


export default function PostMap({location}) {
  return (
    <PostMapWrapper>
      <PointIcon src={point} alt="pointIcon" />
      {location}
    </PostMapWrapper>
  )
}
