import React, { useState, useEffect, useMemo, useCallback } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header.style";
import styled from "styled-components";
import { productList } from "../../api/productListApi";
import { followList } from "../../api/followListApi";
import Feed from "../../components/campsiteFeed/campsiteFeed";
export default function Reservation() {
  const [followingList, setFollowingList] = useState("");
  const [productInfo, setProductInfo] = useState([]);
  const [sortProduct, setSortProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
        console.log("안녕");
        return new Date(b.createdAt) - new Date(a.createdAt);
      }),
    );
  }, [productInfo]);

  return (
    <>
      <Header />
      <UserProductMain>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <h1 className="a11y-hidden">
              유저가 등록한 상품을 예약하기 위한 페이지입니다.
            </h1>
            <ProductSection>
              {sortProduct.map(item => (
                <Feed key={item.id} data={item} />
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
  height: calc(100vh - 50px - 50px);
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ProductSection = styled.section`
  display: flex;
  flex-direction: column;
`;
