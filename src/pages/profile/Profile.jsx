import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { userPost } from "../../api/userpostApi";
import { productList } from "../../api/productListApi";
import { Helmet } from "react-helmet-async";
import ProfileCard from "../../components/userProfile/ProfileCard";
import Navbar from "../../components/navbar/Navbar";
import UserPostList from "../../components/post/UserPostList";
import ProfileProduct from "../../components/userProfile/ProfileProduct";
import Splash from "../splash/Splash";
import styled from "styled-components";

import Header from "../../components/header/Header";
import {
  ModalWrap,
  ModalText,
  DarkBackground,
  CheckModalWrap,
  CheckMsg,
  CheckButtonWrap,
  CheckLogout,
} from "../../components/modal/Modal.style";
export default function Profile() {
  const [userPosts, setUserPosts] = useState("");
  const [userProducts, setUserProducts] = useState("");
  const { accountUsername } = useParams();
  const [isModal, setIsModal] = useState(false);
  const [isCheckModal, setIsCheckModal] = useState(false);
  const [lender, setLender] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    if (accountUsername) {
      const getUserInfo = async () => {
        const postRes = await userPost(accountUsername);
        const productRes = await productList(accountUsername, 10);
        setUserPosts(postRes);
        setUserProducts(productRes);
        setIsLoading(false);
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
        setIsLoading(false);
      };
      getMyInfo();
    }
  }, [accountUsername, lender]);

  const handleModalClose = e => {
    setIsModal(false);
  };
  const handleCheckModal = e => {
    setIsModal(false);
    setIsCheckModal(true);
  };
  const accountLogout = e => {
    localStorage.removeItem("token");
    localStorage.removeItem("accountname");
    navigate("/");
  };
  const handleLogoutModalClose = () => {
    setIsCheckModal(false);
  };

  return (
    <>
      <Helmet>
        <title>Campick | 프로필</title>
      </Helmet>
      <Header profile setIsModal={setIsModal} />
      <Main style={{ backgroundColor: "#f2f2f2" }}>
        {isLoading ? (
          <Splash />
        ) : (
          <>
            <ProfileCard accountUsername={accountUsername} />
            <ProfileProduct data={userProducts} />
            {userPosts.length !== 0 ?
            <UserPostList
              data={userPosts}
              accountUsername={accountUsername}
              setLender={setLender}
            />: null}
          </>
        )}
      </Main>
      <Navbar profile />
      {isModal && (
        <DarkBackground onClick={handleModalClose}>
          <ModalWrap>
            <ModalText>설정 및 개인정보</ModalText>
            <ModalText onClick={handleCheckModal}>로그아웃</ModalText>
          </ModalWrap>
        </DarkBackground>
      )}
      {isCheckModal && (
        <DarkBackground onClick={handleLogoutModalClose}>
          <CheckModalWrap>
            <CheckMsg>로그아웃하시겠어요?</CheckMsg>
            <CheckButtonWrap>
              <CheckLogout onClick={handleModalClose}>취소</CheckLogout>
              <CheckLogout onClick={accountLogout}>로그아웃</CheckLogout>
            </CheckButtonWrap>
          </CheckModalWrap>
        </DarkBackground>
      )}
    </>
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
