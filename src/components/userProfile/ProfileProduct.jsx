import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Feed from "../campsiteFeed/campsiteFeed";
export default function ProfileProduct({ data }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, [data]);

  return products.length > 0 ? (
    <ProductSection>
      {products.map(item => (
        <Feed key={item.id} data={item} />
      ))}
    </ProductSection>
  ) : (
    <ProductSection></ProductSection>
  );
}
const ProductSection = styled.section`
  min-height: 205px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
