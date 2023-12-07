import styled from "styled-components";
import { Link } from "react-router-dom";
import chat from "../../assets/icons/chat.svg";
import share from "../../assets/icons/icon-share.svg";
export const ProfileWrapper = styled.section`
  background-color: #fff;
  padding: 27px;
  border-bottom: 0.5px solid #dbdbdb;
`;
export const ProfileInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px;
`;
export const ProfileFollow = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
  gap: 5px;
`;
export const ProfileImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
`;
export const FollowNumber = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${props => (props.$follower === "follower" ? "#000" : "#767676")};
`;
export const Follow = styled.span`
  font-size: 8px;
  color: var(--font-primary-color);
`;
export const ProfileIntro = styled.div`
  text-align: center;
  color: var(--font-primary-color);
`;
export const UserName = styled.h2`
  color: black;
  font-size: 17px;
  margin-top: 17px;
  font-weight: 600;
`;
export const UserAccountName = styled.span`
  display: block;
  font-size: 11px;
  margin: 6px 0px 10px;
`;
export const UserIntro = styled.p`
  font-size: 14px;
  width: 80%;
  margin: 0 auto 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ProfileBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  color: var(--font-primary-color);
`;
export const ProfileBtn = styled(Link)`
  font-size: 14px;
  background-color: ${props => (props.$follow === "true" ? `#7CB45B` : `#fff`)};
  color: ${props => (props.$follow === "true" ? "#fff" : "#767676")};
  padding: 10px 25px;
  border: solid 1px var(--font-placeholder-color);
  border-radius: 30px;
  &:hover {
    color: ${props => (props.$follow === "false" ? `#767676` : `#fff`)};
    background-color: ${props =>
      props.$follow === "false" ? "#DBDBDB" : "#7CB45B"};
  }
`;
export const ChatShare = styled.button`
  padding: 17px;
  border: solid 1px var(--font-placeholder-color);
  border-radius: 50%;
  background: url(${props => (props.$chat === "true" ? chat : share)}) no-repeat
    center;
  cursor: pointer;
  // .
`;
