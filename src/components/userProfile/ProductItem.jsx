import React from "react";
import {
  WrapContents,
  ProductTitle,
  ProductName,
  ProductPrice,
  ProductLocation,
  ProductImage,
  ProductTag,
  WrapSpan,
  WrapProductTag,
  ProductContainer,
} from "../../components/campsiteFeed/campsiteFeed.style";
export default function ProductItem({ data }) {
  return (
    <ProductContainer>
      <ProductTitle>{`${data.author.username}님의 캠핑장`}</ProductTitle>
      <WrapContents>
        <ProductImage src={data.itemImage} />
        <WrapSpan>
          <ProductName>{JSON.parse(data.itemName).name}</ProductName>
          <ProductPrice>{data.price.toLocaleString()}\</ProductPrice>
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
  );
}
