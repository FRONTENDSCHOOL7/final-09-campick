import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Feed from "../campsiteFeed/campsiteFeed";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { ProductTitle } from "../campsiteFeed/campsiteFeed.style";
export default function ProfileProduct({ data }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, [data]);

  return products.length > 0 ? (
    <ProductSection>
      <Swiper
<<<<<<< HEAD
        spaceBetween={-30}
=======
        spaceBetween={30}
>>>>>>> develop
        slidesPerView={1}
        freeMode={true}
        modules={[FreeMode]}
      >
        {products.map(item => (
          <SwiperSlide key={item.id}>
            <Feed key={item.id} data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ProductSection>
  ) : (
    <ProductSection></ProductSection>
  );
}
const ProductSection = styled.section`
  min-height: 205px;
<<<<<<< HEAD

  background-color: #fff;
=======
  display: flex;
  justify-content: center;
  align-items: center;
>>>>>>> develop
`;
