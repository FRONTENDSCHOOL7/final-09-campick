import styled from "styled-components";
import { Link } from "react-router-dom";

export const Background = styled.div`
  background-color: #f2f2f2;
  width: 390px;
  height: calc(100vh - 105px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  position: relative;
  overflow-y: scroll;
  /* padding-top: 13px; */
  flex: 1;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const GradientDiv = styled.div`
  position: fixed;
  background: linear-gradient(
    180deg,
    rgba(238, 238, 238, 0) 32.5%,
    rgba(255, 255, 255, 0.945) 91.67%
  );
  background-blend-mode: light;
  width: 390px;
  height: 50px;
  /* left: 50%; */
  /* transform: translate(-50%, 0); */
  margin-top: calc(100vh - 152px);
  z-index: 40;
`;
export const Upload = styled.img`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;
export const UploadLink = styled(Link)`
  height: 48px;
  width: 48px;
  border-radius: 50%; /* 50%로 설정하여 둥글게 처리 */
  position: fixed;
  bottom: 8%;
  margin-left: 310px;
  z-index: 50;
  transition: transform 0.4s;
  padding-top: 16px;

  &:hover {
    transform: scale(108%); // 더 부드러운 확대
    transition: transform 0.4s;

    border-radius: 50%;
    z-index: 100;
  }
`;
export const CommunityImageSet = styled.div`
  display: flex;
  padding: 18px;
`;
export const LeftImages = styled.div`
  flex: 1;
  margin-right: 8px;
`;
export const RightImages = styled.div`
  flex: 1;
  margin-left: 8px;
  margin-top: 30px;
`;
export const NoFriendsImage = styled.img`
  position: relative;
  top: 20%;
  /* margin-bottom: 250px; */
  width: 100%;
`;
export const SplashStyle = styled.div`
  /* position: absolute; */
`;
