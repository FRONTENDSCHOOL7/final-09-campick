import React from "react";
import { LogoImg, Search } from "../../pages/home/Homefeed.style";
import { HeaderWrapper } from "./Header.style";
import Logo from "../../assets/icons/logo-header.png";
import SearchImg from "../../assets/icons/icon-search.svg";
import { useNavigate } from "react-router";
import { ModalBtn, DotImg } from "../post/post.style";
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
          <LogoImg src={Logo} alt="캠픽 로고" />
          <Search
            src={SearchImg}
            alt="검색 버튼"
            onClick={handleOnClickSearch}
          />
        </>
      ) : (
        <>
          <LogoImg src={Logo} alt="캠픽 로고" />
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
