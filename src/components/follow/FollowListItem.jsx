import React from "react";
import styled from "styled-components";
import {
  FollowListWrap,
  UserWrap,
  ProfileLink,
  UserImg,
  UserInfoWrap,
  Username,
  UserIntro,
  FollowBtn,
} from "../follow/followListItem.style";
export default function FollowListItem() {
  return (
    <FollowListWrap>
      <UserWrap>
        <ProfileLink to="../../1234565">
          <UserImg src="#" alt="" />
          <UserInfoWrap>
            <Username>김건희</Username>
            <UserIntro>
              안녕하세요.캠핑을 좋아하는 김건희입니다. ㅎㅎㅎㅎ
            </UserIntro>
          </UserInfoWrap>
        </ProfileLink>
        <FollowBtn>팔로우</FollowBtn>
      </UserWrap>
    </FollowListWrap>
  );
}
