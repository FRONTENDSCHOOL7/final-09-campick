import styled from "styled-components";
import { Link } from "react-router-dom";

export const SocialLoginButton = styled.button`
  border-radius: 44px;
  border: 1px solid ${props => props.borderColor};

  width: 322px;
  height: 44px;
  color: #767676;
  font-size: 14px;

  display: block;
  width: 100%;
  padding: 8px;
  background-color: #fff;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    height: 24px;
    width: 24px;
    margin: 10px;
    position: absolute;
    top: 30%;
    left: 3%;
    transform: translateY(-50%);
    background: url(${props => props.Img});
  }
  &:hover {
    background-color: ${({ socialImage }) =>
      socialImage === "kakao"
        ? "#f3dfa3"
        : socialImage === "google"
        ? "#cac8c8"
        : "#69b2dd"};
    border-color: transparent;
    color: #fff;
  }
`;

export const LoginJoin = styled(Link)`
  display: block;
  text-align: center;
  font-size: 14px;
  color: #767676;
  cursor: pointer;

  &::before {
    content: "|";
    margin-right: 10px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 20px 10px 10px 10px;
  color: #767676;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 390px;
  gap: 20px;
  padding: 60px 20px 40px 20px;
  background-color: #ffff;
  border-radius: 20px 20px 0 0;
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
  z-index: 22;

  transition: 0.7s;
  transform: translate3d(0, 0, 0);
`;
