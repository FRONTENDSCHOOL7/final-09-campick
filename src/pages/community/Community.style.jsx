import styled, { keyframes, css } from "styled-components";
export const Background = styled.div`
  background-color: white;
  width: 390px;
  height: calc(100vh - 110px);
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
  /* position: absolute; */
  /* bottom: 0px;
  left: 0; */
  position: fixed;
  left: 50%;
  bottom: 50px;
  transform: translate(-50%, 0);
  z-index: 100;
`;
