import React, { useState, useEffect } from "react";
import { followList } from "../../api/followListApi";
import { useParams, Link } from "react-router-dom";

import FollowList from "../../components/follow/FollowList";
import Navbar from "../../components/navbar/Navbar";
import { Helmet } from "react-helmet-async";
export default function Followlist() {
  const [data, setData] = useState("");

  const accountUsername = useParams().accountUsername;
  const followPage = useParams().follow;

  useEffect(() => {
    const getFollowList = async () => {
      const res = await followList(accountUsername, followPage);
      setData(res);
    };
    getFollowList();
  }, []);
  console.log(accountUsername);
  return (
    <>
      <Helmet>
        <title>{`Campick | ${
          followPage === "follower" ? "팔로워" : "팔로잉"
        }`}</title>
      </Helmet>
      <header style={{ backgroundColor: "red", height: "50px" }} />
      <main>
        <h1 className="a11y-hidden">
          {`${accountUsername}의 ${followPage}페이지`}
        </h1>
        <FollowList
          data={data}
          accountUsername={accountUsername}
          followPage={followPage}
        />
      </main>
      <Navbar />
    </>
  );
}
