import React, { useEffect, useState } from "react";
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
import { unfollow } from "../../api/unfollowApi";
import { follow } from "../../api/followApi";
export default function ProfileCard({ data, accountUsername, setLender }) {
  const handlefollowBtn = async () => {
    if (data.isfollow) {
      await unfollow(data.accountname);
      setLender(pre => !pre);
    } else {
      await follow(data.accountname);
      setLender(pre => !pre);
    }
  };

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
          <ProfileBtn to={"/product/upload"}>내 캠핑장 등록</ProfileBtn>
        </ProfileBtnWrap>
      ) : (
        <ProfileBtnWrap>
          <ChatShare $chat="true" />
          <ProfileBtn
            $follow={data && data.isfollow === true ? "false" : "true"}
            onClick={e => handlefollowBtn(e)}
          >
            {data && data.isfollow ? "팔로우 취소" : "팔로우"}
          </ProfileBtn>
          <ChatShare />
        </ProfileBtnWrap>
      )}
    </ProfileWrapper>
  );
}
