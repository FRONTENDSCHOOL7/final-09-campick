import React from "react";
import { GoBackImg, GobackButton, HeaderWrapper } from "./Header.style";
import arrow from "../../assets/icons/arrow-left.svg";

export default function HeaderText({ text }) {
  function goBack() {
    window.history.back();
  }

  return (
    <HeaderWrapper style={{ justifyContent: "flex-start" }}>
      <GobackButton onClick={goBack}>
        <GoBackImg src={arrow} alt="뒤로가기" />
      </GobackButton>
      {text}
    </HeaderWrapper>
  );
}
