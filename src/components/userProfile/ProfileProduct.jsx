import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Feed from "../campsiteFeed/CampsiteFeed";
import { ProductTitle } from "../campsiteFeed/CampsiteFeed.style";
import emptyCampsite from "../../assets/image/empty-campsite.jpg";
export default React.memo(function ProfileProduct({
  data,
  setCurrentPage,
  currentPage,
}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, [data]);

  return products && products.length > 0 ? (
    <ProductSection>
      <ProductTitle>{`${data[0].author.username}님의 캠핑장`}</ProductTitle>
      <Swiper
        wrapperTag="ul"
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        onReachEnd={() => {
          if (data.length === (currentPage + 1) * 3)
            setCurrentPage(pre => pre + 1);
        }}
        modules={[Pagination]}
      >
        {products.map(item => (
          <SwiperSlide style={{ margin: "0" }} key={item.id} tag="li">
            <Feed key={item.id} data={item} title={false} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ProductSection>
  ) : (
    <ProductSection style={{ padding: "0" }}>
      <EmptyImage src={emptyCampsite} alt="아직 등록된 캠핑장이 없어요" />
    </ProductSection>
  );
});
const ProductSection = styled.section`
  padding: 20px 10px 20px 10px;
  background-color: #fff;
  border-top: 0.5px solid #dbdbdb;
  border-bottom: 0.5px solid #dbdbdb;
  .swiper-pagination {
    bottom: -3px;
    .swiper-pagination-bullet {
      background-color: var(--primary-color);
      margin: 0 5px;
    }
  }
`;
const EmptyImage = styled.img`
  width: 390px;
  height: 207px;
`;
