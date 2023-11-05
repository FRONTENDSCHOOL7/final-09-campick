import React from "react";
import PostItem from "./PostItem";
import styled from "styled-components";
const PostSection = styled.section`
  background-color: white;
  border-radius: 10px;
  border: 0.5px solid #dbdbdb;
  margin: 0 8px 0 8px;
  flex-basis: 300px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default function PostList({ data }) {
  console.log("Post", data);
  return (
    <PostSection style={{ position: "relative" }}>
      {data &&
        data.map(item => (
          <PostItem
            key={item.id}
            data={item}
            commentCount={item.commentCount}
            location={item && JSON.parse(item.content).location}
          />
        ))}
    </PostSection>
  );
}
