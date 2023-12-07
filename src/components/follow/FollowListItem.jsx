import React, { useState } from "react";
import {
  UserWrap,
  ProfileLink,
  UserImg,
  UserInfoWrap,
  Username,
  UserIntro,
  FollowBtn,
} from "../follow/FollowListItem.style";
import { unfollow } from "../../api/unfollowApi";
import { follow } from "../../api/followApi";

export default function FollowListItem({ data: initialize }) {
  const [data, setData] = useState(initialize);
  const myAccoutname = localStorage.getItem("accountname");
  const handleUnfollowBtn = async () => {
    if (data.isfollow) {
      await unfollow(data.accountname);
      setData(pre => ({ ...pre, isfollow: !pre.isfollow }));
    } else {
      await follow(data.accountname);
      setData(pre => ({ ...pre, isfollow: !pre.isfollow }));
    }
  };

  return (
    <UserWrap>
      <ProfileLink
        to={
          data.accountname === myAccoutname
            ? `../../`
            : `../../${data.accountname}`
        }
      >
        <UserImg
          src={data.image}
          alt={`${data.username}의 프로필 이미지입니다.`}
        />
        <UserInfoWrap>
          <Username>{data.username}</Username>
          <UserIntro>{data.intro}</UserIntro>
        </UserInfoWrap>
      </ProfileLink>
      <FollowBtn
        onClick={handleUnfollowBtn}
        follow={`${data.isfollow}`}
        accountname={`${
          data.accountname === localStorage.getItem("accountname")
        }`}
      >
        {data.isfollow ? "취소" : "팔로우"}
      </FollowBtn>
    </UserWrap>
  );
}
