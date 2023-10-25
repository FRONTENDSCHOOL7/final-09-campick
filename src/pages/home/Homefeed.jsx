import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import PostList from "../../components/post/PostList";
import { homefeedApi } from "../../api/homefeedApi";
import { Header } from "../../components/header/Header.style";
export default function Homefeed() {
  const [data, setData] = useState("");

  useEffect(() => {
    async function fetchHomefeed() {
      const res = await homefeedApi();
      setData(res.posts);
    }
    fetchHomefeed();
  }, []);

  return (
    <div>
      <Header></Header>
      <PostList data={data} />

      <Navbar homefeed />
    </div>
  );
}
