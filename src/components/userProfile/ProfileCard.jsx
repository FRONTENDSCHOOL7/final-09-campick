import React, { useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import img from "../../assets/스크린샷 2023-09-13 164955.png";
const ProfileWrapper = styled.section`
  height: calc(100vh - 50px - 50px);
`;
const ProfileInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px;
`;
const ProfileFollow = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
  gap: 5px;
`;
const ProfileImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
`;
const FollowNumber = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${props => (props.$follower === "follower" ? "#000" : "#767676")};
`;
const Follow = styled.span`
  font-size: 8px;
  color: var(--font-primary-color);
`;
const ProfileIntro = styled.div`
  text-align: center;
  color: var(--font-primary-color);
`;
const UserName = styled.h2`
  color: black;
`;
const UserAccountName = styled.span`
  display: block;
  font-size: 12px;
  margin: 6px 0px 15px;
`;
const UserIntro = styled.p`
  font-size: 14px;
  margin-bottom: 30px;
  width: 80%;
  margin: 0 auto 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ProfileBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  color: var(--font-primary-color);
`;
const ProfileBtn = styled(Link)`
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

export default function ProfileCard({ data, accountUsername }) {
  console.log(accountUsername);
  return (
    <ProfileWrapper>
      <ProfileInfoWrap>
        <ProfileFollow>
          <FollowNumber $follower="follower">
            {data && `${data.followerCount}`}
          </FollowNumber>
          <Follow>followers</Follow>
        </ProfileFollow>
        <ProfileImg src={data && data.image} />
        <ProfileFollow>
          <FollowNumber>{data && `${data.followingCount}`}</FollowNumber>
          <Follow>followings</Follow>
        </ProfileFollow>
      </ProfileInfoWrap>
      <ProfileIntro>
        <UserName>{data && data.username}</UserName>
        <UserAccountName>{data && `@${data.accountname}`}</UserAccountName>
        <UserIntro>{data && data.intro}</UserIntro>
      </ProfileIntro>
      {!accountUsername ? (
        <ProfileBtnWrap>
          <ProfileBtn>프로필 수정</ProfileBtn>
          <ProfileBtn>내 캠핑장 등록</ProfileBtn>
        </ProfileBtnWrap>
      ) : (
        <ProfileBtnWrap>
          <ProfileBtn $follow={data.isfollow === true ? "false" : "true"}>
            {data.isfollow === true ? "팔로우 취소" : "팔로우"}
          </ProfileBtn>
        </ProfileBtnWrap>
      )}
    </ProfileWrapper>
  );
}
