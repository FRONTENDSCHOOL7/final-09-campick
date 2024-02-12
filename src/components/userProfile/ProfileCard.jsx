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
} from "./Profile.style";
import { unfollow } from "../../api/unfollowApi";
import { follow } from "../../api/followApi";

export default React.memo(function ProfileCard({ accountUsername, data }) {
  const [userData, setUserData] = useState(data);
  const myAccountname = localStorage.getItem("accountname");
  useEffect(() => {
    setUserData(data);
  }, [data]);

  const handlefollowBtn = async () => {
    if (userData.isfollow) {
      await unfollow(userData.accountname);

      setUserData(pre => {
        return {
          ...pre,
          isfollow: !pre.isfollow,
          followerCount: pre.followerCount - 1,
        };
      });
    } else {
      await follow(userData.accountname);

      setUserData(pre => {
        return {
          ...pre,
          isfollow: !pre.isfollow,
          followerCount: pre.followerCount + 1,
        };
      });
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
          <ProfileBtn to={"edit"}>프로필 수정</ProfileBtn>
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
});
