import React, { useState, useEffect, useCallback, useMemo } from "react";
import Navbar from "../../components/navbar/Navbar";
import { productList } from "../../api/productListApi";
import { followList } from "../../api/followListApi";
import Feed from "../../components/campsiteFeed/campsiteFeed";
import ReservationModal from "./ReservationModal";
import Header from "../../components/header/Header";
import LabelFilter from "./LabelFilter";
import Splash from "../splash/Splash";
import { Helmet } from "react-helmet-async";

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
  const [selectedLabels, setSelectedLabels] = useState([]);

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
      <Helmet>
        <title>Campick | 예약</title>
      </Helmet>
      <Screen
        onClick={() => setOpModal(false)}
        close={opModal ? true : undefined}
      />
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
            {opModal && (
              <ReservationModal productId={productId} setOpModal={setOpModal} />
            )}
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
