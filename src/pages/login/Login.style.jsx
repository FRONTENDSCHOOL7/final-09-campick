import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

export const Background = styled.div`
  background-color: var(--primary-color);
  width: 390px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const LoginJoin = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 0 12px;
  font-size: 12px;
  cursor: pointer;
`;

const moveUpLogo = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: scale(0.75) translateY(-50px);
  }
`;

export const LogoAll = styled.img`
  width: 305px;
  height: 276.037px;
  margin-top: 127px;
  display: flex;
  animation: ${props =>
    props.$isVisible
      ? css`
          ${moveUpLogo} 1s forwards
        `
      : "none"};
`;

const moveUpSub = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100px);
  }
`;

export const SubLogoAll = styled.img`
  position: relative;
  width: 368.481px;
  height: 146.666px;
  flex-shrink: 0;
  margin-top: 120px;
  margin-bottom: 7px;
  animation: ${props =>
    props.$isVisible
      ? css`
          ${moveUpSub} 1s forwards
        `
      : "none"};
`;

const moveUpModal = keyframes`
  0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(590px);
  }
`;

export const LoginModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 390px;
  background-color: #fff;
  color: black;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${props =>
    props.isVisible
      ? css`
          ${moveUpModal} 1s forwards
        `
      : "none"};
  z-index: 20;
  overflow-y: auto;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  width: 322px;
  gap: 10px;
  background-color: #ffff;
  border-radius: 20px 20px 0 0;
  z-index: 30;
  text-align: center;
`;

// 다른 스타일 코드
