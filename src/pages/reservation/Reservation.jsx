import React, { useState, useEffect, useMemo, useCallback } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "styled-components";
import { productList } from "../../api/productListApi";
import { followList } from "../../api/followListApi";
import Feed from "../../components/campsiteFeed/campsiteFeed";
import ReservationModal from "./ReservationModal";
import Header from "../../components/header/Header";
export default function Reservation() {
  const [followingList, setFollowingList] = useState("");
  const [productInfo, setProductInfo] = useState([]);
  const [sortProduct, setSortProduct] = useState([]);
  const [opModal, setOpModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [productId, setProductId] = useState("");
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
          <div>isLoading...</div>
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
const UserProductMain = styled.main`
  overflow-y: scroll;
  background: var(--Gray-6, #f2f2f2);
  height: calc(100vh - 105px);
  &::-webkit-scrollbar {
    display: none;
  }
  position: relative;
`;
const ProductSection = styled.section`
  margin:10px 0 10px 0;
  display: flex;
  flex-direction: column;
  gap:10px;
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
