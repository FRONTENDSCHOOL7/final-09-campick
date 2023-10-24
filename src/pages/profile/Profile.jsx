import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { myInfo } from "../../api/myInfoApi";
import { userInfo } from "../../api/userInfoApi";
import { userPost } from "../../api/userpostApi";
import { Helmet } from "react-helmet-async";
import ProfileCard from "../../components/userProfile/ProfileCard";

import UserPostList from "../../components/post/UserPostList";
import ProfileProduct from "../../components/userProfile/ProfileProduct";
export default function Profile() {
  const [userData, setData] = useState("");
  const [userPosts, setUserPosts] = useState("");
  const { accountUsername } = useParams();
  const [lender, setLender] = useState(true);
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
  }, [accountUsername, lender]);

  return (
    <div>
      <Helmet>
        <title>Campick | 프로필</title>
      </Helmet>
      <ProfileCard
        data={userData}
        accountUsername={accountUsername}
        setLender={setLender}
      />
      <ProfileProduct />
      <UserPostList data={userPosts} accountUsername={accountUsername} />
    </div>
  );
}
