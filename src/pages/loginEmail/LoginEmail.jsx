import React, { useState, useEffect } from "react";
import { SignUpContainer, WrapperLoginEmail } from "./LoginEmail.style";
import {
  Incorrect,
  InputStyle,
  LabelStyle,
  Submitbutton,
  Title,
  WrapEmailPw,
  WrapForm,
} from "../../components/form/form.style";
import { Helmet } from "react-helmet-async";
import { login } from "../../api/loginApi";
import { useNavigate } from "react-router-dom";

export default function LoginEmail() {
  const [emailValid, setEmailValid] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [correct, setCorrect] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  useEffect(() => {
    setDisabled(!(emailValid && pw.length >= 6));
  }, [emailValid, pw]);

  function validation(e) {
    const emailValue = e.target.value;
    const pwValue = e.target.value;
    if (e.target.id === "user-email") {
      setEmail(emailValue);
      setEmailValid(emailPattern.test(emailValue));
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

      console.log(res.message);
    }
  }

  return (
    <>
      <Helmet>
        <title>Campick | 로그인</title>
      </Helmet>
      <WrapperLoginEmail onSubmit={userLogin}>
        <Title>로그인</Title>
        <WrapForm>
          <WrapEmailPw>
            <LabelStyle htmlFor="user-email">이메일</LabelStyle>
            <InputStyle
              id="user-email"
              type="email"
              value={email}
              onChange={validation}
              required
            />
          </WrapEmailPw>
          <WrapEmailPw>
            <LabelStyle htmlFor="user-pw">비밀번호</LabelStyle>
            <InputStyle
              id="user-pw"
              type="password"
              value={pw}
              onChange={validation}
              required
            />
            {correct && (
              <Incorrect>*이메일 또는 비밀번호가 일치하지 않습니다.</Incorrect>
            )}
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
