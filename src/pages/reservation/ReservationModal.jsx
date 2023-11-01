import React, { useEffect, useState } from "react";
import { productDetail } from "../../api/productDetailApi";
import { Submitbutton } from "../../components/form/form.style";
import { ProductTag } from "../../components/campsiteFeed/campsiteFeed.style";
import { Link } from "react-router-dom";
import {
  ModalWrap,
  ProductImg,
  ProductName,
  ProfileUsername,
  ProfileAccountname,
  ProductTagWrap,
  ProductProfileWrapper,
  ProductPrice,
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
      <ProductProfileWrapper>
        <ProfileUsername>{data && data.author.username}님의  캠핑장 </ProfileUsername>
        <ProfileAccountname>
          @ {data && data.author.accountname}
        </ProfileAccountname>
      </ProductProfileWrapper>
      <ProductProfileWrapper>
      <ProductName>{data && JSON.parse(data.itemName).name}</ProductName>
      <ProductPrice>{data && data.price.toLocaleString()}원 ~</ProductPrice>
      <ProductTagWrap>
          {data &&
            JSON.parse(data.itemName).labels.map(label => (
              <ProductTag>{label}</ProductTag>
            ))}
        </ProductTagWrap></ProductProfileWrapper>
      
      <div style={{ padding: "10px" }}>
        <Link to = {"chat"}>
          <Submitbutton style={{marginTop :"5px"}}>
            채팅으로 캠핑장 문의하기
            </Submitbutton>
        </Link>
        <Submitbutton style={{marginTop :"5px"}} >캠핑장 예약하기</Submitbutton>
      </div>
    </ModalWrap>
  );
}
