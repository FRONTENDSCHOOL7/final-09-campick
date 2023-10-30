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
export default function ReservationModal({ productId }) {
  const [data, setData] = useState("");
  useEffect(() => {
    const getProductData = async () => {
      const res = await productDetail(productId);
      setData(res);
    };
    getProductData();
  }, [productId]);
  console.log(data);
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
        <Submitbutton>{data.price}원 캠핑장 예약하기</Submitbutton>
      </div>
    </ModalWrap>
  );
}
