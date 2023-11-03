import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { productList } from "../../api/productListApi";
import { followList } from "../../api/followListApi";
import Feed from "../../components/campsiteFeed/campsiteFeed";
import ReservationModal from "./ReservationModal";
import Header from "../../components/header/Header";
import Splash from "../splash/Splash";
import NoFriendsMessage from "../../assets/image/nocamper.png";
import {
  NoFriendsImage,
  ProductSection,
  Screen,
  SplashStyle,
  UserProductMain,
} from "./Reservation.style";

export default function Reservation() {
  const [followingList, setFollowingList] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [sortProduct, setSortProduct] = useState([]);
  const [opModal, setOpModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [productId, setProductId] = useState("");

  useEffect(() => {
    const accountname = localStorage.getItem("accountname");
    async function getFollowingList() {
      const list = await followList(accountname, "following");
      setFollowingList(list);
      setIsLoading(false); // 데이터 로딩이 끝났음을 표시
    }
    getFollowingList();
  }, []);

  useEffect(() => {
    async function getProduct() {
      if (followingList.length > 0) {
        followingList.map(async item => {
          const products = await productList(item.accountname, 5);
          setProductInfo(pre => [...pre, ...products]);
        });
      }
    }
    getProduct();
  }, [followingList]);

  useEffect(() => {
    setSortProduct(
      [...productInfo].sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }),
    );
  }, [productInfo]);

  return (
    <>
      <Header />
      <Screen onClick={() => setOpModal(false)} close={opModal} />
      <UserProductMain>
        {isLoading ? (
          <Splash style={SplashStyle} />
        ) : followingList.length === 0 ? ( // 친구 목록이 비어있을 때
          <NoFriendsImage src={NoFriendsMessage} alt="" />
        ) : (
          <>
            <h1 className="a11y-hidden">
              유저가 등록한 상품을 예약하기 위한 페이지입니다.
            </h1>
            {opModal && <ReservationModal productId={productId} />}
            <ProductSection>
              {sortProduct.map(item => (
                <Feed
                  reservation
                  key={item.id}
                  data={item}
                  setProductId={setProductId}
                  setOpModal={setOpModal}
                  title={true}
                />
              ))}
            </ProductSection>
          </>
        )}
      </UserProductMain>
      <Navbar reservation />
    </>
  );
}
