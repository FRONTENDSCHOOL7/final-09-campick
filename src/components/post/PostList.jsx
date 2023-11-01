import React from "react";
import { useState, useEffect } from "react";
import PostItem from "./PostItem";
import styled from "styled-components";
import { HomeCampSiteTitle } from "../campsiteFeed/HomeCampsiteFeed.style";
import { HomePostTitle } from "./post.style";
import { DeletePostToast } from "../toast/Toast";
const PostSection = styled.section`
  background-color: white;
  border-radius: 10px;
  border: 0.5px solid #dbdbdb;
  margin: 0 8px 0 8px;
  min-height: 300px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default function PostList({ data }) {
  return (
    <PostSection style={{ position: "relative" }}>
      <HomePostTitle>친구들의 로그</HomePostTitle>
      {data && data.map(item => <PostItem key={item.id} data={item} />)}
    </PostSection>
  );
}
