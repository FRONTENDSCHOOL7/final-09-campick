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
} from "./campsiteFeed.style";
import React from "react";
import { Link } from "react-router-dom";
export default function Feed({ data }) {
  // console.log(data);

  // console.log("Feed 렌더링");
  return (
    <>
      <ProductContainer>
        <ProductTitle>{`${data.author.username}님의 캠핑장`}</ProductTitle>
        <WrapContents>
          <Link>
            <ProductImage src={data.itemImage} />
          </Link>

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
    </>
  );
}
