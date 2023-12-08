import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  Incorrect,
  InputStyle,
  LabelStyle,
  Submitbutton,
  Title,
  WrapEmailPw,
  WrapForm,
} from "../../components/form/Form.style";
import { WrapperLoginEmail } from "../loginEmail/LoginEmail.style";
import { emailValid } from "../../api/signupApi";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(true);
  const [isPwSame, setIsPwSame] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const exptext = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.(com|net)$/;
    const checkValidEmail = async () => {
      if (email.length >= 1) {
        if (exptext.test(email)) {
          const res = await emailValid({ user: { email: email } });
          if (res.message === "사용 가능한 이메일 입니다.") {
            setValidEmail(false);
          } else if (res.message === "이미 가입된 이메일 주소 입니다.") {
            setValidEmail("checkEmail");
          }
        } else {
          setValidEmail("validEmail");
        }
      } else {
        setValidEmail(false);
      }
    };

    const timer = setTimeout(() => {
      console.log("나타남");
      checkValidEmail();
    }, 300);

    return () => {
      console.log("사라짐");
      clearTimeout(timer);
    };
  }, [email]);

  useEffect(() => {
    const checkValidPw = () => {
      if (password.length < 6) {
        setValidPassword(false);
      } else {
        setValidPassword(true);
      }
    };
    checkValidPw();
  }, [password]);

  useEffect(() => {
    if (password === checkPassword) {
      setIsPwSame(true);
    } else {
      setIsPwSame(false);
    }
  }, [password, checkPassword]);

  const onChange = event => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    } else if (event.target.name === "checkPassword") {
      setCheckPassword(event.target.value);
    }
  };

  useEffect(() => {
    if (checkPassword !== "") {
      if (password === checkPassword) {
        setIsPwSame(true);
      } else {
        setIsPwSame(false);
      }
    }
  }, [password, checkPassword]);

  return (
    <>
      <Helmet>
        <title>Campick | 회원가입</title>
      </Helmet>
      <WrapperLoginEmail
        onSubmit={() => {
          navigate("./profileSetup", {
            state: { email: email, password: password },
          });
        }}
      >
        <Title>이메일로 회원가입</Title>
        <WrapForm>
          <WrapEmailPw>
            <LabelStyle htmlFor="emailInput">이메일</LabelStyle>
            <InputStyle
              type="email"
              name="email"
              id="emailInput"
              placeholder="이메일 주소를 알려주세요."
              onChange={onChange}
              value={email}
            />
            {validEmail === "checkEmail" && (
              <Incorrect>이미 가입된 이메일 주소 입니다.</Incorrect>
            )}
            {validEmail === "validEmail" && (
              <Incorrect>* 잘못된 이메일 형식입니다.</Incorrect>
            )}
          </WrapEmailPw>
          <WrapEmailPw>
            <LabelStyle htmlFor="passwordInput">비밀번호</LabelStyle>
            <InputStyle
              type="password"
              name="password"
              id="passwordInput"
              placeholder="비밀번호를 설정해 주세요."
              onChange={onChange}
              value={password}
            />
            {password.length > 0 && !validPassword && (
              <Incorrect>* 비밀번호는 6자 이상이어야 합니다.</Incorrect>
            )}
          </WrapEmailPw>
          <WrapEmailPw>
            <LabelStyle htmlFor="passwordCheckInput">비밀번호 확인</LabelStyle>
            <InputStyle
              type="password"
              name="checkPassword"
              id="passwordCheckInput"
              placeholder="비밀번호를 한 번 더 입력해 주세요."
              onChange={onChange}
              value={checkPassword}
            />
            {checkPassword && !isPwSame && (
              <Incorrect>* 비밀번호가 일치하지 않습니다.</Incorrect>
            )}
          </WrapEmailPw>

          <Submitbutton
            disabled={!(email && !validEmail && validPassword && isPwSame)}
          >
            다음
          </Submitbutton>
        </WrapForm>
      </WrapperLoginEmail>
    </>
  );
}
