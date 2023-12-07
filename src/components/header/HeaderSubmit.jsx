import React from "react";
import { GoBackImg, GobackButton, HeaderWrapper } from "./Header.style";
import { Submitbutton } from "../form/Form.style";
import arrow from "../../assets/icons/arrow-left.svg";

export default function HeaderSubmit({ handleSubmitButton }) {
  function goBack() {
    window.history.back();
  }
  return (
    <HeaderWrapper>
      <GobackButton onClick={goBack}>
        <GoBackImg src={arrow} alt="뒤로가기" />
      </GobackButton>
      <Submitbutton
        onClick={handleSubmitButton}
        style={{ width: "90px", height: "32px", margin: "0" }}
      >
        업로드
      </Submitbutton>
    </HeaderWrapper>
  );
}
