import React, { useState, useEffect, usememo } from "react";
import { useParams } from "react-router-dom";
import { myInfo } from "../../api/myInfoApi";
import { userInfo } from "../../api/userInfoApi";
import { userPost } from "../../api/userpostApi";
import { productList } from "../../api/productListApi";
import { Helmet } from "react-helmet-async";
import ProfileCard from "../../components/userProfile/ProfileCard";
import Navbar from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header.style";
import UserPostList from "../../components/post/UserPostList";
import ProfileProduct from "../../components/userProfile/ProfileProduct";
import styled from "styled-components";
export default function Profile() {
  const [userData, setData] = useState("");
  const [userPosts, setUserPosts] = useState("");
  const [userProducts, setUserProducts] = useState("");
  const { accountUsername } = useParams();
  const [lender, setLender] = useState(true);

  useEffect(() => {
    if (accountUsername) {
      const getUserInfo = async () => {
        const res = await userInfo(accountUsername);
        const postRes = await userPost(accountUsername);
        const productRes = await productList(accountUsername);
        setData(res);
        setUserPosts(postRes);
        setUserProducts(productRes);
      };
      getUserInfo();
    } else {
      const getMyInfo = async () => {
        const res = await myInfo();
        const postRes = await userPost(localStorage.getItem("accountname"));
        const productRes = await productList(
          localStorage.getItem("accountname"),
          1,
        );
        setData(res);
        setUserPosts(postRes);
        setUserProducts(productRes);
      };
      getMyInfo();
    }
  }, [accountUsername, lender]);

  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <Helmet>
        <title>Campick | 프로필</title>
      </Helmet>
      <Header />
      <Main>
        <ProfileCard
          data={userData}
          accountUsername={accountUsername}
          setLender={setLender}
        />
        <ProfileProduct data={userProducts} />
        <UserPostList data={userPosts} accountUsername={accountUsername} />
      </Main>
      <Navbar profile />
    </div>
  );
}
const Main = styled.main`
  height: calc(100vh - 50px - 50px);
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
