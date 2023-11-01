import React, { useEffect, useState } from "react";
import { productDetail } from "../../api/productDetailApi";
import { Submitbutton } from "../../components/form/form.style";
import { ProductTag } from "../../components/campsiteFeed/campsiteFeed.style";
import {
  ModalWrap,
  ProductImg,
  ProductName,
  ProfileUsername,
  ProfileAccountname,
  ProductTagWrap,
} from "./ReservationModal.style";
import { CompleteToast } from "../../components/toast/Toast";

export default function ReservationModal({ productId }) {
  const [data, setData] = useState("");
  const [showReservationToast, setShowReservationToast] = useState(false);

  useEffect(() => {
    const getProductData = async () => {
      const res = await productDetail(productId);
      setData(res);
    };
    getProductData();
  }, [productId]);
  console.log(data);

  const onClick = async e => {
    e.preventDefault();
    try {
      setShowReservationToast(true);
      setTimeout(() => {
        setShowReservationToast(false);
      }, 1000);
    } catch (error) {
      console.error("예약 실패");
    }
  };

  return (
    <ModalWrap>
      <ProductImg src={data && data.itemImage} />

      <ProductName>{data && JSON.parse(data.itemName).name}</ProductName>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
          borderBottom: "1px solid #dbdbdb",
        }}
      >
        <ProfileUsername>{data && data.author.username}</ProfileUsername>
        <ProfileAccountname>
          {data && data.author.accountname}
        </ProfileAccountname>
        <ProductTagWrap>
          {data &&
            JSON.parse(data.itemName).labels.map(label => (
              <ProductTag>{label}</ProductTag>
            ))}
        </ProductTagWrap>
      </div>
      <div style={{ padding: "10px" }}>
        <Submitbutton>캠핑장 문의하기</Submitbutton>
        <Submitbutton onClick={onClick}>
          {data.price}원 캠핑장 예약하기
        </Submitbutton>
        <CompleteToast showCompleteToast={showReservationToast} text={"예약"} />
      </div>
    </ModalWrap>
  );
}
