import React from "react";
import { HeaderWrapper } from "./Header.style";
import arrow from "../../assets/icons/arrow-left.svg";
import { GoBackButton } from "../../pages/myCampsiteRegister/MyCampsiteRegister.style";

export default function HeaderText({ text }) {
  function goBack() {
    window.history.back();
  }

  return (
    <HeaderWrapper style={{ justifyContent: "flex-start" }}>
      <GoBackButton src={arrow} alt="뒤로가기" onClick={goBack} />
      {text}
    </HeaderWrapper>
  );
}
