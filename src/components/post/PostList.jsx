import React from "react";
import PostItem from "./PostItem";
import { PostSection } from "./Post.style";

export default function PostList({ data }) {
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
