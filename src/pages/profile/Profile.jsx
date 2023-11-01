import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { userPost } from "../../api/userpostApi";
import { productList } from "../../api/productListApi";
import { Helmet } from "react-helmet-async";
import ProfileCard from "../../components/userProfile/ProfileCard";
import Navbar from "../../components/navbar/Navbar";
import UserPostList from "../../components/post/UserPostList";
import ProfileProduct from "../../components/userProfile/ProfileProduct";

import styled from "styled-components";
import Header from "../../components/header/Header";

export default function Profile() {
  const [userPosts, setUserPosts] = useState("");
  const [userProducts, setUserProducts] = useState("");
  const { accountUsername } = useParams();

  useEffect(() => {
    if (accountUsername) {
      const getUserInfo = async () => {
        const postRes = await userPost(accountUsername);
        const productRes = await productList(accountUsername, 10);
        setUserPosts(postRes);
        setUserProducts(productRes);
      };
      getUserInfo();
    } else {
      const getMyInfo = async () => {
        const postRes = await userPost(localStorage.getItem("accountname"));
        const productRes = await productList(
          localStorage.getItem("accountname"),
          10,
        );

        setUserPosts(postRes);
        setUserProducts(productRes);
      };
      getMyInfo();
    }
  }, [accountUsername]);

  return (
    <div style={{ backgroundColor: "#f5f5f5", position: "relative" }}>
      <Helmet>
        <title>Campick | 프로필</title>
      </Helmet>
      <Header />
      <Main>
        <ProfileCard accountUsername={accountUsername} />
        <ProfileProduct data={userProducts} accountUsername={accountUsername}/>
        <UserPostList data={userPosts} accountUsername={accountUsername} />
      </Main>
      <Navbar profile />
    </div>
  );
}
const Main = styled.main`
  height: calc(100vh - 105px);
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
