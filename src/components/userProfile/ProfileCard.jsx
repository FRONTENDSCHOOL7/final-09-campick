import React, { useState } from "react";
import {
  ProfileWrapper,
  ProfileInfoWrap,
  ProfileFollow,
  ProfileImg,
  FollowNumber,
  Follow,
  ProfileIntro,
  UserName,
  UserAccountName,
  UserIntro,
  ProfileBtnWrap,
  ProfileBtn,
  ChatShare,
} from "./profile.style";

export default function ProfileCard({ data, accountUsername }) {
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
          <ChatShare $chat="true" />
          <ProfileBtn $follow={data.isfollow === true ? "false" : "true"}>
            {data.isfollow === true ? "팔로우 취소" : "팔로우"}
          </ProfileBtn>
          <ChatShare />
        </ProfileBtnWrap>
      )}
    </ProfileWrapper>
  );
}
