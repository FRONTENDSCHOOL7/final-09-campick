import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import PostList from "../../components/post/PostList";
import { homefeedApi } from "../../api/homefeedApi";

import { Home } from "./Homefeed.style";
import MainSlider from "../../components/slider/MainSlider";
import HomeCampsiteFeed from "../../components/campsiteFeed/HomeCampsiteFeed";
import { followList } from "../../api/followListApi";
import { productList } from "../../api/productListApi";
import { Helmet } from "react-helmet-async";
import Splash from "../splash/Splash";
import Header from "../../components/header/Header";
import ReservationModal from "../reservation/ReservationModal";
import { Screen } from "../reservation/Reservation.style";

export default function Homefeed() {
  const [data, setData] = useState("");
  const [followingList, setFollowingList] = useState("");
  const [productInfo, setProductInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [opModal, setOpModal] = useState(false);
  const [productId, setProductId] = useState("");

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
  console.log("렌더링");
  return (
    <>
      <Helmet>
        <title>Campick | 홈화면</title>
      </Helmet>
      <Header />
      <Screen
        onClick={() => setOpModal(false)}
        close={opModal ? true : undefined}
      />

      <Home>
        {isLoading ? (
          <Splash />
        ) : (
          <>
            <h1 className="a11y-hidden">
              광고 배너와 팔로우한 유저들이 등록한 예약 가능한 캠핑장, 게시물을
              볼 수 있는 홈화면 입니다.
            </h1>
            {opModal && <ReservationModal productId={productId} />}
            <MainSlider />
            <HomeCampsiteFeed
              productInfo={productInfo}
              setOpModal={setOpModal}
              setProductId={setProductId}
            />
            <PostList data={data} />
          </>
        )}
      </Home>
      <Navbar homefeed />
    </>
  );
}
