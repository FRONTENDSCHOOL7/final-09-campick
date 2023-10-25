import styled from "styled-components";
import { Link } from "react-router-dom";
export const FollowListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: calc(100vh - 50px - 50px);
  padding: 16px;
  box-sizing: border-box;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const UserWrap = styled.li`
  display: flex;
  justify-content: space-between;

  width: 100%;
  align-items: center;
`;
export const ProfileLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-basis: 80%;
`;
export const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
export const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const Username = styled.span`
  font-size: 14px;
`;
export const UserIntro = styled.span`
  font-size: 12px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: var(--font-primary-color);
`;
export const FollowBtn = styled.button`
  width: 56px;
  font-size: 12px;
  padding: 7px 0px;
  display: ${props => (props.accountname === "true" ? "none" : "")};
  background: ${props => (props.follow === "true" ? `#fff` : `#7CB45B`)};
  color: ${props => (props.follow === "true" ? `#767676` : `#fff`)};
  flex-shrink: 0;
  border-radius: 26px;
  border: 1px solid
    ${props => (props.follow === "true" ? `#DBDBDB` : `#7CB45B`)};
  opacity: 1;
  transition: all 0.5s ease-out;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: all 0, 5s ease-out;
  }
`;
