import React from "react";
import { useState, useEffect } from "react";
import { WrapperLoginEmail } from "../loginEmail/loginEmail.style";
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
import { emailValid } from "../../api/signupApi";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(true);
  const navigate = useNavigate();
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

  const checkValidPw = () => {
    if (password.length < 6) {
      setValidPassword(false);
    } else {
      setValidPassword(true);
    }
  };

  useEffect(() => {
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
    checkValidPw();
  }, [password]);

  const onChange = event => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    }
  };

  return (
    <>
      <Helmet>
        <title>Campick | 회원가입</title>
      </Helmet>
      <WrapperLoginEmail>
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
            <label htmlFor="passwordInput">비밀번호</label>
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

            <Submitbutton
              type="button"
              disabled={!(!validEmail && validPassword)}
              onClick={() => {
                navigate("./profileSetup", {
                  state: { email: email, password: password },
                });
              }}
            >
              다음
            </Submitbutton>
          </WrapEmailPw>
        </WrapForm>
      </WrapperLoginEmail>
    </>
  );
}
