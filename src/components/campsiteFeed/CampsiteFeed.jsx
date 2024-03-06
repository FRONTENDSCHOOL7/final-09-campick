import {
  WrapContents,
  ProductTitle,
  ProductName,
  ProductPrice,
  ProductLocation,
  ProductImage,
  ProductBtn,
  ProductTag,
  WrapSpan,
  WrapProductTag,
  ProductContainer,
} from "./CampsiteFeed.style";
import React from "react";

export default function Feed({
  data,
  setProductId,
  setOpModal,
  reservation,
  title,
}) {
  //.
  return (
    <>
      <ProductContainer>
        {title ? (
          <ProductTitle>{`${data.author.username}님의 캠핑장`}</ProductTitle>
        ) : null}
        <WrapContents>
          {reservation ? (
            <ProductBtn
              onClick={() => {
                setProductId(data.id);
                setOpModal(true);
              }}
              aria-label="상품 상세 모달창 가기 버튼"
            >
              <ProductImage src={data.itemImage} alt="" />
            </ProductBtn>
          ) : (
            <ProductBtn aria-label="상품 사진">
              <ProductImage src={data.itemImage} alt="" />
            </ProductBtn>
          )}
          <WrapSpan>
            <ProductName>{JSON.parse(data.itemName).name}</ProductName>
            <ProductPrice>{data.price.toLocaleString()}원 ~</ProductPrice>
            <ProductLocation>
              {JSON.parse(data.itemName).location}
            </ProductLocation>
            <WrapProductTag>
              {JSON.parse(data.itemName).labels.map(item => (
                <ProductTag key={item}>{item}</ProductTag>
              ))}
            </WrapProductTag>
          </WrapSpan>
        </WrapContents>
      </ProductContainer>
    </>
  );
}
