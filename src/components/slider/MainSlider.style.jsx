import styled from "styled-components";

export const SliderWrapper = styled.section`
  min-height: 186.998px;
  margin-top: 10px;
  .swiper-pagination-bullet-active {
    background-color: var(--primary-color);
  }
`;

export const SliderItem = styled.img`
  border-radius: 10px;
  display: block;
  width: calc(100% - 16px);
  margin: 0 8px 0 8px;
`;
