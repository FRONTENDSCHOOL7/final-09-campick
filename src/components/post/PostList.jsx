import React from "react";
import { useState, useEffect } from "react";
import PostItem from "./PostItem";
import styled from "styled-components";
const PostSection = styled.section`
  background-color: white;
  border-radius: 10px;
  border: 0.5px solid #dbdbdb;
  margin : 0 8px 0 8px ;
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
