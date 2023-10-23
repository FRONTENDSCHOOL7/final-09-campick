import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { myInfo } from "../../api/myInfoApi";
import { userInfo } from "../../api/userInfoApi";
import { userPost } from "../../api/userpostApi";
import ProfileCard from "../../components/userProfile/ProfileCard";
import PostList from "../../components/post/PostList";
export default function Profile() {
  const [userData, setData] = useState("");
  const [userPosts, setUserPosts] = useState("");
  const { accountUsername } = useParams();

  useEffect(() => {
    if (accountUsername) {
      const getUserInfo = async () => {
        const res = await userInfo(accountUsername);
        const postRes = await userPost(accountUsername);
        setData(res);
        setUserPosts(postRes);
      };
      getUserInfo();
    } else {
      const getMyInfo = async () => {
        const res = await myInfo();
        const postRes = await userPost(localStorage.getItem("accountname"));
        setData(res);
        setUserPosts(postRes);
      };
      getMyInfo();
    }
  }, [accountUsername]);

  return (
    <div>
      <ProfileCard data={userData} accountUsername={accountUsername} />
      <PostList
        userPost={userPosts}
        accountUsername={accountUsername}
      ></PostList>
    </div>
  );
}
