import styled from "styled-components";

export const Wrapper = styled.div`
  width: 390px;
  min-height: 100vh;
  background-color: white;
  box-shadow: rgb(226, 226, 226) 0px 0px 10px;
  @media (max-width: 768px) {
    margin: 0 auto;
    max-width: 390px; // 가로 폭이 줄어들 때 Wrapper의 최대 너비를 설정해줄 수 있습니다.
  }
`;
