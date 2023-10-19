import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../../assets/image/LogoAll.svg";
import SubLogo from "../../assets/image/SubLogo.svg";

export default function LoginMain() {
  const [isModalVisible, setIsModalVisible] = useState(false); // 초기 상태값을 false로 설정

  useEffect(() => {
    // 1초 후에 모달 표시
    const timer = setTimeout(() => {
      setIsModalVisible(true);
    });

    // 컴포넌트 언마운트 시 타이머 제거
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalVisible]);

  const Background = styled.div`
    background-color: var(--primary-color);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  `;

  const moveUpLogo = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    scale: .75;
    transform: translateY(-50px);
  }
`;

  const LogoAll = styled.img`
    width: 305px;
    height: 276.037px;
    margin-top: 127px;
    display: flex;
    animation: ${moveUpLogo} 1s forwards 1s;
  `;

  const moveUpSub = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100px);
  }
`;

  const SubLogoAll = styled.img`
    width: 368.481px;
    height: 146.666px;
    flex-shrink: 0;
    margin-top: 120px;
    margin-bottom: 7px;
    animation: ${moveUpSub} 1s forwards 1s;
  `;

  // 애니메이션 정의
  const moveUpModal = keyframes`
   0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(0);  // 0으로 설정하여 원래 위치에 고정
  }
`;

  const LoginModal = styled.div`
    position: absolute;
    margin-top: 580px;
    background-color: #fff; // 배경색 추가
    width: 390px; // 모달의 가로 크기 지정
    height: 320px; // 모달의 세로 크기 지정
    color: black; // 텍스트 색상 변경
    border-radius: 20px 20px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${moveUpModal} 1s forwards 1s;
    z-index: 20; // z-index 증가
    transform: translateY(100vh); // 초기 위치 설정
  `;

  return (
    <Background>
      <LogoAll src={Logo} />
      <SubLogoAll src={SubLogo} />
      {isModalVisible && <LoginModal />}
    </Background>
  );
}
