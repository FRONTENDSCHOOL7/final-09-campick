import React from "react";
import { HeaderWrapper } from "./Header.style";
import { GoBackButton } from "../../pages/myCampsiteRegister/MyCampsiteRegister.style";
import { SearchInputStyle } from "../../pages/search/Search.style";
import arrow from "../../assets/icons/arrow-left.svg";

export default function HeaderSearch({ handleInputChange }) {
  function goBack() {
    window.history.back();
  }
  return (
    <HeaderWrapper>
      <GoBackButton src={arrow} alt="뒤로가기" onClick={goBack} />
      <SearchInputStyle
        placeholder="찾고자하는 계정을 입력해주세요"
        id="searchinput"
        onChange={handleInputChange}
      />
    </HeaderWrapper>
  );
}
