import React from "react";
import { Header } from "../../components/header/Header.style";
import arrow from "../../assets/icons/arrow-left.svg";
import { GoBackButton } from "../myCampsiteRegister/MyCampsiteRegister.style";
import { SearchInputStyle } from "./Search.style";

export default function Search() {
  function goBack() {
    window.history.back();
  }
  return (
    <>
      <Header>
        <GoBackButton src={arrow} alt="뒤로가기" onClick={goBack} />
        <SearchInputStyle placeholder="찾고자하는 계정을 입력해주세요" />
      </Header>
    </>
  );
}
