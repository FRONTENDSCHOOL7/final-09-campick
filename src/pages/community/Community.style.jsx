import styled from "styled-components";
import { Link } from "react-router-dom";

export const Background = styled.div`
  background-color: white;
  width: 390px;
  height: calc(100vh - 105px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow-y: scroll;
  padding-top: 13px;
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
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: calc(100vh - 165px);
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
  margin-left: 290px;
  z-index: 50;
  transition: transform 0.4s, box-shadow 0.4s;

  &:hover {
    transform: scale(108%); // 더 부드러운 확대
    transition: transform 0.4s;
    box-shadow: 0 5px 18px -7px rgba(17, 44, 6, 1);
    border-radius: 50%;
    z-index: 100;
  }
`;
