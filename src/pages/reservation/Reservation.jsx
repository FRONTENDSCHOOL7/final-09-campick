import React, { useState, useEffect, useMemo, useCallback } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "styled-components";
import { productList } from "../../api/productListApi";
import { followList } from "../../api/followListApi";
import Feed from "../../components/campsiteFeed/campsiteFeed";
import ReservationModal from "./ReservationModal";
import Header from "../../components/header/Header";
import LabelFilter from "./LabelFilter";

export default function Reservation() {
  const [followingList, setFollowingList] = useState("");
  const [productInfo, setProductInfo] = useState([]);
  const [sortProduct, setSortProduct] = useState([]);
  const [opModal, setOpModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [productId, setProductId] = useState("");
  const [selectedLabels, setSelectedLabels] = useState([]);

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

  const handleLabelClick = useCallback(label => {
    setSelectedLabels(prevLabels => {
      if (label === "전체상품") {
        // '전체상품'을 선택하면 모든 라벨 선택 해제
        return [];
      } else {
        if (prevLabels.includes(label)) {
          // 이미 선택된 라벨을 다시 클릭하면 제거
          return prevLabels.filter(l => l !== label);
        } else {
          // 새로운 라벨을 추가
          return [...prevLabels, label];
        }
      }
    });
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedLabels.length === 0) return sortProduct;

    return sortProduct.filter(product => {
      const labels = JSON.parse(product.itemName).labels;
      // 모든 선택된 라벨이 제품에 포함되어 있는지 확인
      return selectedLabels.every(label => labels.includes(label));
    });
  }, [sortProduct, selectedLabels]);

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
              <LabelFilter
                onLabelClick={handleLabelClick}
                selectedLabels={selectedLabels}
              />
              {filteredProducts.map(item => (
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
  margin: 10px 0 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
