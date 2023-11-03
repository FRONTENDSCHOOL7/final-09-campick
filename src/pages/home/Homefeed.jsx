import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import PostList from "../../components/post/PostList";
import { homefeedApi } from "../../api/homefeedApi";

import { Home, LogoImg, MainSliderStyle, Search } from "./Homefeed.style";
import MainSlider from "../../components/slider/MainSlider";
import HomeCampsiteFeed from "../../components/campsiteFeed/HomeCampsiteFeed";
import { followList } from "../../api/followListApi";
import { productList } from "../../api/productListApi";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router";
import Splash from "../splash/Splash";
import Header from "../../components/header/Header";
import { styled } from "styled-components";

export default function Homefeed() {
  const [data, setData] = useState("");
  const [followingList, setFollowingList] = useState("");
  const [productInfo, setProductInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchHomefeed() {
      const res = await homefeedApi();
      setData(res.posts);
    }
    fetchHomefeed();
  }, []);

  useEffect(() => {
    const accountname = localStorage.getItem("accountname");
    async function getFollowingList() {
      setFollowingList(await followList(accountname, "following"));
      setIsLoading(false);
    }
    getFollowingList();
  }, []);

  useEffect(() => {
    async function getProduct() {
      followingList &&
        followingList.map(async item => {
          const products = await productList(item.accountname, 5);
          setProductInfo(pre => [...pre, ...products]);
          setIsLoading(false);
        });
    }
    getProduct();
  }, [followingList]);

  return (
    <>
      <Helmet>
        <title>Campick | 홈화면</title>
      </Helmet>
      <Header />

      <Home>
        {isLoading ? (
          <Splash />
        ) : (
          <>
            <MainSlider />
            <HomeCampsiteFeed productInfo={productInfo} />
            <PostList data={data} />
          </>
        )}
      </Home>
      <Navbar homefeed />
    </>
  );
}
