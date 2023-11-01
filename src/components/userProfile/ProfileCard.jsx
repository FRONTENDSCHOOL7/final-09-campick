import React, { useEffect, useState, useMemo } from "react";
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
import { userInfo } from "../../api/userInfoApi";
import { myInfo } from "../../api/myInfoApi";
export default function ProfileCard({ accountUsername }) {
  const [userData, setUserData] = useState("");
  const myAccountname = localStorage.getItem("accountname");
  const [lenders, setLenders] = useState(true);

  useEffect(() => {
    if (accountUsername) {
      const getUserInfo = async () => {
        const res = await userInfo(accountUsername);

        setUserData(res);
      };
      getUserInfo();
    } else {
      const getMyInfo = async () => {
        const res = await myInfo();

        setUserData(res);
      };
      getMyInfo();
    }
  }, [accountUsername, lenders]);

  const handlefollowBtn = async () => {
    if (userData.isfollow) {
      await unfollow(userData.accountname);
      setLenders(pre => !pre);
    } else {
      await follow(userData.accountname);
      setLenders(pre => !pre);
    }
  };

  return (
    <ProfileWrapper>
      <ProfileInfoWrap>
        <ProfileFollow
          to={accountUsername ? `follower` : `${myAccountname}/follower`}
        >
          <FollowNumber $follower="follower">
            {userData && `${userData.followerCount}`}
          </FollowNumber>
          <Follow>followers</Follow>
        </ProfileFollow>
        <ProfileImg src={userData && userData.image} />
        <ProfileFollow
          to={accountUsername ? `following` : `${myAccountname}/following`}
        >
          <FollowNumber>
            {userData && `${userData.followingCount}`}
          </FollowNumber>
          <Follow>followings</Follow>
        </ProfileFollow>
      </ProfileInfoWrap>
      <ProfileIntro>
        <UserName>{userData && userData.username}</UserName>
        <UserAccountName>
          {userData && `@${userData.accountname}`}
        </UserAccountName>
        <UserIntro>" {userData && userData.intro} "</UserIntro>
      </ProfileIntro>
      {!accountUsername ? (
        <ProfileBtnWrap>
          <ProfileBtn to = {"edit"}>프로필 수정</ProfileBtn>
          <ProfileBtn to={"/product/upload"}>내 캠핑장 등록</ProfileBtn>
        </ProfileBtnWrap>
      ) : (
        <ProfileBtnWrap>
          <ChatShare $chat="true" />
          <ProfileBtn
            $follow={userData && userData.isfollow === true ? "false" : "true"}
            onClick={e => handlefollowBtn(e)}
          >
            {userData && userData.isfollow ? "팔로우 취소" : "팔로우"}
          </ProfileBtn>
          <ChatShare />
        </ProfileBtnWrap>
      )}
    </ProfileWrapper>
  );
}
