import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Signin() {
  const { state } = useLocation();
  const email = state.email;
  const password = state.password;
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [intro, setIntro] = useState("");
  const [idDuplication, setIdDuplication] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const onChange = event => {
    if (event.target.name === "username") {
      setUserName(event.target.value);
    } else if (event.target.name === "userid") {
      setUserId(event.target.value);
    } else if (event.target.name === "userintro") {
      setIntro(event.target.value);
    }
  };
  const postValid = async () => {
    const res = "사용 가능한 계정ID 입니다.";
    if (res.message === "사용 가능한 계정ID 입니다.") {
      setIdDuplication(false);
      if (userName && userId) {
        setDisabled(false);
      }
    } else if (res.message === "이미 가입된 계정ID 입니다.") {
      setIdDuplication(true);
      setDisabled(true);
    }
  };
  useEffect(() => {
    postValid();
  }, [userId]);
  const onSubmit = e => {
    e.preventDefault();
  };
  console.log(state);
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={userName} />
      <input type="text" onChange={onChange} value={userId} />
      <input type="text" onChange={onChange} value={intro} />
      <button type="submit">입력</button>
    </form>
  );
}
