import { styled } from "styled-components";

export const UserProductMain = styled.main`
  overflow-y: scroll;
  background: var(--Gray-6, #f2f2f2);
  height: calc(100vh - 105px);
  &::-webkit-scrollbar {
    display: none;
  }
  position: relative;
`;
export const ProductSection = styled.ul`
  margin: 10px 0 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Screen = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: ${props => (props.close === true ? "block" : "none")};
`;
export const NoFriendsImage = styled.img`
  position: relative;
  /* margin-top: 50%; */
  top: 20%;
  width: 100%;
`;
export const SplashStyle = styled.div``;
