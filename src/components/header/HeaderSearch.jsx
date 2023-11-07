import React from "react";
import { GoBackImg, GobackButton, HeaderWrapper } from "./Header.style";
import { SearchInputStyle } from "../../pages/search/Search.style";
import arrow from "../../assets/icons/arrow-left.svg";

export default function HeaderSearch({ handleInputChange }) {
  function goBack() {
    window.history.back();
  }
  return (
    <HeaderWrapper>
      <GobackButton onClick={goBack}>
        <GoBackImg src={arrow} alt="뒤로가기" />
      </GobackButton>
      <SearchInputStyle
        placeholder="찾고자하는 계정을 입력해주세요"
        id="searchinput"
        onChange={handleInputChange}
      />
    </HeaderWrapper>
  );
}
