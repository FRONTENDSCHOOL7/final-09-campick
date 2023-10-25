import React, { useState, useEffect } from "react";
import Logo from "../../assets/image/LogoAll.svg";
import SubLogo from "../../assets/image/SubLogo.svg";
import { SocialLoginButton } from "../../components/login/Login.style";
import {
  Background,
  FlexWrapper,
  LoginJoin,
  LogoAll,
  SubLogoAll,
  LoginModal,
  ButtonWrapper,
  moveUpSub,
} from "./Login.style";

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalVisible(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleAlert = () => {
    alert("아직 준비중인 페이지에요.");
  };

  return (
    <Background>
      <LogoAll src={Logo} $isVisible={isModalVisible} />
      <SubLogoAll src={SubLogo} id="subLogo" $isVisible={isModalVisible} />
      {isModalVisible && (
        <LoginModal isVisible={isModalVisible}>
          <ButtonWrapper>
            <SocialLoginButton
              bordercolor={"#F2C94C"}
              socialImage={"kakao"}
              onClick={handleAlert}
            >
              카카오톡 계정으로 로그인
            </SocialLoginButton>
            <SocialLoginButton
              bordercolor={"#767676"}
              socialImage={"google"}
              onClick={handleAlert}
            >
              구글 계정으로 로그인
            </SocialLoginButton>
            <SocialLoginButton
              bordercolor={"#2D9CDB"}
              socialImage={"facebook"}
              onClick={handleAlert}
            >
              페이스북 계정으로 로그인
            </SocialLoginButton>
            <FlexWrapper>
              <LoginJoin to={"/account/login"}>이메일로 로그인</LoginJoin>|
              <LoginJoin to={"/account/signup"}>회원가입</LoginJoin>
            </FlexWrapper>
          </ButtonWrapper>
        </LoginModal>
      )}
    </Background>
  );
};

export default Login;
