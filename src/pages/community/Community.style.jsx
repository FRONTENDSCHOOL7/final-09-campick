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
  background: linear-gradient(
    180deg,
    rgba(238, 238, 238, 0) 32.5%,
    rgba(255, 255, 255, 0.945) 91.67%
  );
  background-blend-mode: light;
  width: 390px;
  height: 100px;
  position: fixed;
  left: 50%;
  bottom: 50px;
  transform: translate(-50%, 0);
  z-index: 100;
`;
export const Upload = styled.img`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
export const UploadLink = styled(Link)`
  position: absolute;
  height: 48px;
  width: 48px;
  bottom: 20px;
  right: 20px;

  &:hover {
    transform: scale(1.03); // 더 부드러운 확대
    transition: transform 0.4s;
    box-shadow: 0 5px 18px -7px rgba(64, 143, 31, 0.6);
    border-radius: 50%;
    z-index: 100;
  }
`;
