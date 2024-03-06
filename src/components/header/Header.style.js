import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 50px;
  border-bottom: 0.5px solid #dbdbdb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px 0px 16px;
  background-color: white;
  box-sizing: border-box;
`;

export const LogoImg = styled.img`
  width: 41px;
  height: 25px;
  cursor: pointer;
`;
export const SearchImg = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const LogoWrapper = styled(Link)``;

export const SearchButton = styled.button``;

export const GoBackImg = styled.img`
  cursor: pointer;
  margin-right: 10px;
`;
export const GobackButton = styled.button``;
