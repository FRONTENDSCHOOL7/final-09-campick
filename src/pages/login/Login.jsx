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
} from "./Login.style";
import {
  ToastContainer,
  ToastMsg,
  ToastMsgBold,
} from "../../components/toast/Toast.style";

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showNotAvailable, setShowNotAvailable] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalVisible(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleAlert = () => {
    setShowNotAvailable(true);
    setTimeout(() => setShowNotAvailable(false), 3000);
  };

  const NotAvailable = () => (
    <>
      {showNotAvailable && (
        <ToastContainer>
          <ToastMsg>
            현재 <ToastMsgBold>지원하지 않는 기능</ToastMsgBold>입니다!
          </ToastMsg>
        </ToastContainer>
      )}
    </>
  );

  return (
    <Background>
      <LogoAll src={Logo} $isVisible={isModalVisible} />
      <SubLogoAll src={SubLogo} id="subLogo" $isVisible={isModalVisible} />
      {isModalVisible && (
        <LoginModal isvisible={`${isModalVisible}`}>
          <ButtonWrapper>
            <SocialLoginButton
              bordercolor={"#F2C94C"}
              socialimage={"kakao"}
              onClick={handleAlert}
            >
              카카오톡 계정으로 로그인
            </SocialLoginButton>
            <SocialLoginButton
              bordercolor={"#767676"}
              socialimage={"google"}
              onClick={handleAlert}
            >
              구글 계정으로 로그인
            </SocialLoginButton>
            <SocialLoginButton
              bordercolor={"#2D9CDB"}
              socialimage={"facebook"}
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
      <NotAvailable />
    </Background>
  );
};

export default Login;
