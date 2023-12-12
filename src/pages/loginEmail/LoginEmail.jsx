import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

import { SignUpContainer, WrapperLoginEmail } from "./LoginEmail.style";
import {
  Incorrect,
  InputStyle,
  LabelStyle,
  Submitbutton,
  Title,
  WrapEmailPw,
  WrapForm,
} from "../../components/form/Form.style";

import { login } from "../../api/loginApi";

export default function LoginEmail() {
  const [emailValid, setEmailValid] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [testAccount, setTestAccount] = useState(false); // 체크박스 상태를 저장하는 상태 추가
  const [correct, setCorrect] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const [typingTimer, setTypingTimer] = useState(null); // 입력 지연 타이머 상태 추가
  const emailPattern = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.(com|net)$/;

  useEffect(() => {
    setDisabled(!(emailValid && pw.length >= 6) && !testAccount); //이메일과 패스워드가 작성되거나 체크박스가 체크(인풋창 비활성화)되면 로그인 버튼 활성화
  }, [emailValid, pw, testAccount]);

  function validation(e) {
    const emailValue = e.target.value;
    const pwValue = e.target.value;
    if (typingTimer) {
      clearTimeout(typingTimer); // 타이핑 중인 타이머가 있으면 클리어
    }
    if (e.target.id === "user-email") {
      setEmail(emailValue);
      setEmailValid(emailPattern.test(emailValue));

      if (!emailValue) {
        setValidEmail(false); // 입력 값이 비어있으면 유효하지 않은 이메일 형식 메시지를 비활성화
      } else if (!emailPattern.test(emailValue)) {
        const timer = setTimeout(() => {
          setValidEmail(true);
        }, 300);
        setTypingTimer(timer);
      } else {
        setValidEmail(false);
      }
    }
    if (e.target.id === "user-pw") {
      setPw(pwValue);
    }
  }

  async function userLogin(e) {
    e.preventDefault();

    const res = await login(email, pw);
    if (res && res.hasOwnProperty("user")) {
      localStorage.setItem("token", res.user.token);
      localStorage.setItem("accountname", res.user.accountname);

      navigate("/homefeed"); // 로그인 성공하면 홈화면으로 가기
    } else {
      setCorrect(true);
    }
  }

  //체험하기 함수
  const handleCheckboxClick = () => {
    if (!testAccount) {
      setEmail("campick09@naver.com");
      setPw("123123");
      setValidEmail(false);
    } else {
      setEmail("");
      setPw("");
    }
    setTestAccount(!testAccount); // 체크 상태 업데이트
  };

  return (
    <>
      <Helmet>
        <title>Campick | 로그인</title>
      </Helmet>
      <WrapperLoginEmail>
        <Title>로그인</Title>
        <WrapForm onSubmit={userLogin}>
          <WrapEmailPw>
            <LabelStyle htmlFor="user-email">이메일</LabelStyle>
            <InputStyle
              id="user-email"
              type="email"
              value={email}
              onChange={validation}
              required
              disabled={testAccount} //체크박스 체크시 인풋 비활성화
            />
            {validEmail && <Incorrect>* 잘못된 이메일 형식입니다.</Incorrect>}
          </WrapEmailPw>
          <WrapEmailPw>
            <LabelStyle htmlFor="user-pw">비밀번호</LabelStyle>
            <InputStyle
              id="user-pw"
              type="password"
              value={pw}
              onChange={validation}
              required
              disabled={testAccount} //체크박스 체크시 인풋 비활성화
            />
            {correct && (
              <Incorrect>*이메일 또는 비밀번호가 일치하지 않습니다.</Incorrect>
            )}
            <LabelStyle>
              <InputStyle
                type="checkbox"
                checked={testAccount}
                onClick={handleCheckboxClick}
              />
              캠픽 체험해보기
            </LabelStyle>
            <Submitbutton disabled={disabled}>로그인</Submitbutton>
          </WrapEmailPw>
        </WrapForm>
        <SignUpContainer to={"/account/signup"}>
          이메일로 회원가입
        </SignUpContainer>
      </WrapperLoginEmail>
    </>
  );
}
