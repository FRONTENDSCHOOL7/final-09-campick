import React from "react";
import PostItem from "./PostItem";

export default function UserPostList({ data, accountUsername }) {
  return (
    <section style={{ backgroundColor: "#fff" }}>
      {data.post &&
        data.post.map(item => <PostItem key={item.id} data={item} />)}
    </section>
  );
}
