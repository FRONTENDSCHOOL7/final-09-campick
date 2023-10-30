import React from "react";
import { HeaderWrapper } from "./Header.style";
import { GoBackButton } from "../../pages/myCampsiteRegister/MyCampsiteRegister.style";
import { Submitbutton } from "../form/form.style";
import arrow from "../../assets/icons/arrow-left.svg";

export default function HeaderSubmit({ handleSubmitButton }) {
  function goBack() {
    window.history.back();
  }
  return (
    <HeaderWrapper>
      <GoBackButton src={arrow} alt="뒤로가기" onClick={goBack} />
      <Submitbutton
        onClick={handleSubmitButton}
        style={{ width: "90px", height: "32px", margin: "0" }}
      >
        업로드
      </Submitbutton>
    </HeaderWrapper>
  );
}
