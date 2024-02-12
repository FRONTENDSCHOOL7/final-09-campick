import { Helmet } from "react-helmet-async";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FollowList from "../../components/follow/FollowList";
import Navbar from "../../components/navbar/Navbar";
import HeaderText from "../../components/header/HeaderText";
import { followList } from "../../api/followListApi";
export default function Followlist() {
  const [data, setData] = useState("");
  const { accountUsername, follow } = useParams();

  useEffect(() => {
    const getFollowList = async () => {
      const res = await followList(accountUsername, follow);
      setData(res);
    };
    getFollowList();
  }, [accountUsername, follow]);

  return (
    <>
      <Helmet>
        <title>{`Campick | ${
          follow === "follower" ? "팔로워" : "팔로잉"
        }`}</title>
      </Helmet>
      <HeaderText text={follow === "follower" ? "Followers" : "Following"} />
      <main style={{ height: "calc(100vh - 105px)" }}>
        <h1 className="a11y-hidden">
          {`${accountUsername}의 ${follow}페이지`}
        </h1>
        <FollowList data={data} />
      </main>
      <Navbar />
    </>
  );
}
