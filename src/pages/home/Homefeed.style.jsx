import styled from "styled-components";

export const Home = styled.div`
  height: calc(100vh - 120px );
  background: var(--Gray-6, #F2F2F2);
  display: flex;
  flex-direction: column;
  padding:10px 0 10px 0;
  gap:10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LogoImg = styled.img`
  width: 41px;
  height: 25px;
  cursor: pointer;
`;
export const Search = styled.img`
  cursor: pointer;
`;