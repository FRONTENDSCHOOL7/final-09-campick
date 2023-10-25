import React from "react";
import PostItem from "./PostItem";

export default function UserPostList({ data, accountUsername }) {
  return (
    data.post && data.post.map(item => <PostItem key={item.id} data={item} />)
  );
}
