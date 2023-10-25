import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import PostList from "../../components/post/PostList";
import { homefeedApi } from "../../api/homefeedApi";
import { Header } from "../../components/header/Header.style";
import Logo from "../../assets/icons/logo-header.png"
import SearchImg from "../../assets/icons/icon-search.svg"
import { Home, LogoImg, Search } from "./Homefeed.style";
import MainSlider from "../../components/slider/MainSlider";
import Feed from "../../components/campsiteFeed/campsiteFeed";
import HomeCampsiteFeed from "../../components/campsiteFeed/HomeCampsiteFeed";

export default function Homefeed() {
  const [data, setData] = useState("");

  useEffect(() => {
    async function fetchHomefeed() {
      const res = await homefeedApi();
      setData(res.posts);
    }
    fetchHomefeed();
  }, []);
  return (<>
  <Header><LogoImg src={Logo} alt="캠픽 로고"/><Search src ={SearchImg} alt = "검색 버튼"/></Header>
    <Home>

      <MainSlider/>

      <HomeCampsiteFeed/>

      <PostList data={data} />
      
    </Home>

    <Navbar home/>

    </>
  );
}
