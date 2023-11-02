import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "styled-components";
import { productList } from "../../api/productListApi";
import { followList } from "../../api/followListApi";
import Feed from "../../components/campsiteFeed/campsiteFeed";
import ReservationModal from "./ReservationModal";
import Header from "../../components/header/Header";
import Splash from "../splash/Splash";
import NoFriendsMessage from "../../assets/image/nocamper.jpg";

export default function Reservation() {
  const [followingList, setFollowingList] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [sortProduct, setSortProduct] = useState([]);
  const [opModal, setOpModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [productId, setProductId] = useState("");
  const [hasFriends, setHasFriends] = useState(false); // 친구가 있는지 여부 추가

  useEffect(() => {
    const accountname = localStorage.getItem("accountname");
    async function getFollowingList() {
      const list = await followList(accountname, "following");
      setFollowingList(list);
      setHasFriends(list.length > 0); // 친구 목록이 비어있는지 확인
      setIsLoading(false); // 데이터 로딩이 끝났음을 표시
    }
    getFollowingList();
  }, []);
  console.log(isLoading);
  useEffect(() => {
    async function getProduct() {
      if (followingList.length === 0) {
        // 친구가 없을 때 스플래시를 종료하려면 아래 코드를 사용합니다.
        setIsLoading(false);
      } else {
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
      {isLoading ? (
        // <Splash /> // isLoading이 true일 때 Splash 화면을 보여줍니다.
        <div>splash</div>
      ) : hasFriends ? (
        <UserProductMain>
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
              />
            ))}
          </ProductSection>
        </UserProductMain>
      ) : (
        <div style={{ height: "calc(100vh - 105px)" }}>
          <NoFriendsImage src={NoFriendsMessage} alt="" />
        </div>
      )}
      <Navbar reservation />
    </>
  );
}
const UserProductMain = styled.main`
  overflow-y: scroll;
  height: calc(100vh - 105px);
  &::-webkit-scrollbar {
    display: none;
  }
  position: relative;
`;

const ProductSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const Screen = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: ${props => (props.close === true ? "block" : "none")};
`;

const NoFriendsImage = styled.img`
  width: 100%;
  margin-top: 63.5%;
`;
