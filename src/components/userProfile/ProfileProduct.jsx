import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Feed from "../campsiteFeed/campsiteFeed";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { ProductTitle } from "../campsiteFeed/campsiteFeed.style";
export default React.memo(function ProfileProduct({ data }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, [data]);
  console.log(data)

  return (products && products.length > 0) ? (
    <ProductSection>
      <ProductTitle
      >{`${data[0].author.username}님의 캠핑장`}
      </ProductTitle>
      <Swiper
        spaceBetween={-30}
        slidesPerView={1}
        freeMode={true}
        modules={[FreeMode]}
      >
        
        {products.map(item => (
          <SwiperSlide style = {{margin : "0"}} key={item.id}>
            <Feed key={item.id} data={item} title = {false}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </ProductSection>
  ) : (
    <ProductSection></ProductSection>
  );
});
const ProductSection = styled.section`
  min-height: 170px;
  padding : 20px 10px 20px 10px;
  background-color: #fff;
  border-top: 0.5px solid #dbdbdb;
  border-bottom: 0.5px solid #dbdbdb;
`;
