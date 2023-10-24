import React, { useState, useEffect } from "react";
import { followList } from "../../api/followListApi";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import img from "../../assets/스크린샷 2023-09-13 164955.png";
import FollowListItem from "../../components/follow/FollowListItem";

export default function Followlist() {
  const [data, setData] = useState("");
  const accountUsername = useParams().accountUsername;

  useEffect(() => {
    const getFollowList = async () => {
      const res = await followList(accountUsername);
      setData(res);
    };
    getFollowList();
  }, []);
  console.log(data && data);
  return <FollowListItem />;
}
