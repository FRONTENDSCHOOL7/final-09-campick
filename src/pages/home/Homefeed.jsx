import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import PostList from "../../components/post/PostList";
import { homefeedApi } from "../../api/homefeedApi";
import { Header } from "../../components/header/Header.style";
import Logo from "../../assets/icons/logo-header.png";
import SearchImg from "../../assets/icons/icon-search.svg";
import { Home, LogoImg, Search } from "./Homefeed.style";
import MainSlider from "../../components/slider/MainSlider";
import HomeCampsiteFeed from "../../components/campsiteFeed/HomeCampsiteFeed";
import { followList } from "../../api/followListApi";
import { productList } from "../../api/productListApi";

export default function Homefeed() {
  const [data, setData] = useState("");
  const [followingList, setFollowingList] = useState("");
  const [productInfo, setProductInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      <Header>
        <LogoImg src={Logo} alt="캠픽 로고" />
        <Search src={SearchImg} alt="검색 버튼" />
      </Header>
      <Home>
        <MainSlider />

        <HomeCampsiteFeed productInfo={productInfo} />

        <PostList data={data} />
      </Home>

      <Navbar home />
    </>
  );
}
