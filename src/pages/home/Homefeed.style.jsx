import styled from "styled-components";

export const Home = styled.div`
  height: calc(100vh - 105px);
  background: var(--Gray-6, #f2f2f2);
  display: flex;
  flex-direction: column;
  /* padding: 10px 0 10px 0; */
  gap: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MainSliderStyle = styled.div`
  .swiper {
    margin-top: 10px;
  }
`;
