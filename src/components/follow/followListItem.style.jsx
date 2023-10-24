import styled from "styled-components";
import { Link } from "react-router-dom";
export const FollowListWrap = styled.ul`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
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
  font-size: 12px;
  padding: 7px 11px;
  background: #7cb45b;
  color: white;
  flex-shrink: 0;
  border-radius: 26px;
`;
