import React from "react";
import { useState, useEffect } from "react";
import PostItem from "./PostItem";
import styled from "styled-components";
const PostSection = styled.section`
  overflow-y: scroll;
  height: calc(100vh - 50px - 50px);
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default function PostList(props) {
  return (
    <PostSection>
      {props.data &&
        props.data.map(item => <PostItem key={item.id} data={item} />)}
    </PostSection>
  );
}
