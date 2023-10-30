import React from "react";
import { LogoImg, Search } from "../../pages/home/Homefeed.style";
import { HeaderWrapper } from "./Header.style";
import Logo from "../../assets/icons/logo-header.png";
import SearchImg from "../../assets/icons/icon-search.svg";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  const handleOnClickSearch = () => {
    navigate("/search");
  };
  return (
    <HeaderWrapper>
      <LogoImg src={Logo} alt="캠픽 로고" />
      <Search src={SearchImg} alt="검색 버튼" onClick={handleOnClickSearch} />
    </HeaderWrapper>
  );
}
