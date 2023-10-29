import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/icons/icon-home.svg";
import homeIconFill from "../../assets/icons/icon-home-fill.svg";
import messageIcon from "../../assets/icons/icon-message-circle.svg";
import messageIconFill from "../../assets/icons/icon-message-circle-fill.svg";
import postIcon from "../../assets/icons/icon-edit.svg";
import postIconFill from "../../assets/icons/icon-edit-fill.svg";
import profileIcon from "../../assets/icons/icon-user.svg";
import profileIconFill from "../../assets/icons/icon-user-fill.svg";

const NavContainer = styled.nav`
  width: 100%;
  border-top: solid 1px var(--font-placeholder-color);
  height: 50px;
  display: flex;
  box-sizing: border-box;
`;
const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 4px;
  font-size: 10px;
  color: var(--font-primary-color);
  text-decoration: none;
  padding: 12px 0px 6px 0px;
`;
const NavIcon = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 0.4s, box-shadow 0.4s;
  //재웅 추가
  margin: 2px 0;

  &:hover {
    transform: scale(1.2);
  }
`;

export default function Navbar(props) {
  const [isHomeMouseOver, setIsHomeMouseOver] = useState(false);
  const [isMessageMouseOver, setIsMessageMouseOver] = useState(false);
  const [isPostMouseOver, setIsPostMouseOver] = useState(false);
  const [isProfileMouseOver, setIsProfileMouseOver] = useState(false);
  const handleMouseOver = e => {
    if (e.target.id === "home") {
      setIsHomeMouseOver(true);
    } else if (e.target.id === "reservation") {
      setIsMessageMouseOver(true);
    } else if (e.target.id === "community") {
      setIsPostMouseOver(true);
    } else if (e.target.id === "profile") {
      setIsProfileMouseOver(true);
    }
  };

  const handleMouseOut = e => {
    if (e.target.id === "home") {
      setIsHomeMouseOver(false);
    } else if (e.target.id === "reservation") {
      setIsMessageMouseOver(false);
    } else if (e.target.id === "community") {
      setIsPostMouseOver(false);
    } else if (e.target.id === "profile") {
      setIsProfileMouseOver(false);
    }
  };
  return (
    <>
      <NavContainer>
        <NavLink to="/homefeed">
          <NavIcon
            id="home"
            src={
              isHomeMouseOver
                ? homeIconFill
                : props.homefeed === true
                ? homeIconFill
                : homeIcon
            }
            alt="홈버튼"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
          <span>홈</span>
        </NavLink>
        <NavLink to="/reservation">
          <NavIcon
            id="reservation"
            src={
              isMessageMouseOver
                ? messageIconFill
                : props.reservation === true
                ? messageIconFill
                : messageIcon
            }
            alt="예약 버튼"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
          <span>예약</span>
        </NavLink>
        <NavLink to="/community">
          <NavIcon
            id="community"
            src={
              isPostMouseOver
                ? postIconFill
                : props.community === true
                ? postIconFill
                : postIcon
            }
            alt="커뮤니트 버튼 "
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
          <span>커뮤니티</span>
        </NavLink>
        <NavLink to="/profile">
          <NavIcon
            id="profile"
            src={
              isProfileMouseOver
                ? profileIconFill
                : props.profile === true
                ? profileIconFill
                : profileIcon
            }
            alt="프로필 버튼"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
          <span>프로필</span>
        </NavLink>
      </NavContainer>
    </>
  );
}
