import React from "react";
import {
  HeaderWrapper,
  LogoImg,
  LogoWrapper,
  SearchButton,
  SearchImg,
} from "./Header.style";
import Logo from "../../assets/icons/logo-header.png";
import SearchImage from "../../assets/icons/icon-search.svg";
import { useNavigate } from "react-router";
import { ModalBtn, DotImg } from "../post/Post.style";
import iconDot from "../../assets/icons/icon-dot.svg";

export default function Header({ profile, setIsModal }) {
  const navigate = useNavigate();
  const handleOnClickSearch = () => {
    navigate("/search");
  };
  return (
    <HeaderWrapper>
      {!profile ? (
        <>
          <LogoWrapper href="/homefeed">
            <LogoImg src={Logo} alt="캠픽 로고" />
          </LogoWrapper>
          <SearchButton
            type="button"
            aria-label="검색"
            onClick={handleOnClickSearch}
          >
            <SearchImg src={SearchImage} alt="검색 버튼 이미지" />
          </SearchButton>
        </>
      ) : (
        <>
          <LogoWrapper href="/homefeed">
            <LogoImg src={Logo} alt="캠픽 로고" />
          </LogoWrapper>
          <ModalBtn
            onClick={() => {
              setIsModal(true);
            }}
          >
            <DotImg src={iconDot} />
          </ModalBtn>
        </>
      )}
    </HeaderWrapper>
  );
}
