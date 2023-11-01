import React from "react";
import { styled, keyframes } from "styled-components";

export const DarkBackground = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 999;
  overflow: hidden;
`;
const slideUp = keyframes`
	from {
		left: 50%;
		transform: translate(-50%, 100%);
	}
`;
export const ModalWrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;

  background-color: #fff;
  width: 390px;
  border-radius: 10px 10px 0px 0px;
  padding: 36px 20px 24px;
  box-sizing: border-box;
  z-index: 100;
  &::after {
    content: "";
    background-color: var(--primary-color);
    border-radius: 5px;
    width: 50px;
    height: 4px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
  }
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;
export const ModalBtns = styled.button`
  border: 0px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  padding: 10px 5px;
  cursor: pointer;
  font-family: TheJamsil5;
  font-weight: 700;
  &:hover {
    border-radius: 10px;
    color: white;
    background-color: var(--primary-color);
  }
`;
export const CheckModalWrap = styled.div`
  width: 250px;
  height: 110px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  padding-top: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const CheckMsg = styled.span`
  font-size: 16px;
`;
export const ModalText = styled.button`
  display: flex;
  font-size: 14px;
  padding: 10px 5px;
  cursor: pointer;
  font-family: TheJamsil5;
  &:hover {
    border-radius: 10px;
    color: white;
    background-color: var(--primary-color);
  }
`;
export const CheckButtonWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-top: solid 1px var(--font-placeholder-color);
  border-radius: 0 0 10px 10px;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

export const CheckLogout = styled.button`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
  font-size: 14px;
  color: ${({ check }) => (check === true ? `#7CB45B` : `initial`)};
  border-left: ${({ check }) =>
    check === true ? `solid 1px #DBDBDB` : `initial`};
  box-sizing: border-box;
  cursor: pointer;
  font-family: TheJamsil5;
  &:hover {
    color: ${({ check }) => (check === true ? `#fff` : `#fff`)};
    background-color: var(--primary-color);
  }
`;

export const CheckConfirm = styled.button`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
  font-size: 14px;
  color: ${({ check }) => (check === true ? `#7CB45B` : `initial`)};
  border-left: ${({ check }) =>
    check === true ? `solid 1px #DBDBDB` : `initial`};
  box-sizing: border-box;
  cursor: pointer;
  font-family: TheJamsil5;
  &:hover {
    color: #fff;
    background-color: var(--primary-color);
  }
`;
