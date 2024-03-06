import { Helmet } from "react-helmet-async";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { userPost } from "../../api/userpostApi";
import { productList } from "../../api/productListApi";
import ProfileCard from "../../components/userProfile/ProfileCard";
import Navbar from "../../components/navbar/Navbar";
import UserPostList from "../../components/post/UserPostList";
import ProfileProduct from "../../components/userProfile/ProfileProduct";
import Splash from "../splash/Splash";
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
import { userInfo } from "../../api/userInfoApi";
import { myInfo } from "../../api/myInfoApi";
export default function Profile() {
  const [userPosts, setUserPosts] = useState("");
  const [userProducts, setUserProducts] = useState("");
  const [userData, setUserData] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [isCheckModal, setIsCheckModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { accountUsername } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (accountUsername) {
      const getUserInfo = async () => {
        const postRes = await userPost(accountUsername);
        const productRes = await productList(accountUsername, 3);
        const userInfoRes = await userInfo(accountUsername);

        setUserData(userInfoRes);
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
          3,
        );
        const userInfoRes = await myInfo();
        setUserData(userInfoRes);
        setUserPosts(postRes);
        setUserProducts(productRes);
        setIsLoading(false);
      };
      getMyInfo();
    }
  }, [accountUsername]);

  const handleModalClose = e => {
    setIsModal(false);
    setIsCheckModal(false);
  };
  const handleCheckModal = e => {
    setIsModal(false);
    setIsCheckModal(true);
    e.stopPropagation();
  };
  const accountLogout = e => {
    localStorage.removeItem("token");
    localStorage.removeItem("accountname");
    navigate("/");
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
            <h1 className="a11y-hidden">
              내가 팔로우, 팔로잉한 유저와 내가 올린 캠핑장과 게시물을 볼 수
              있는 내 프로필 페이지 입니다.
            </h1>
            <ProfileCard accountUsername={accountUsername} data={userData} />
            <ProfileProduct data={userProducts} />
            {userPosts?.post?.length >= 1 ? (
              <UserPostList
                data={userPosts}
                setUserPosts={setUserPosts}
                accountUsername={accountUsername}
              />
            ) : null}
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
        <DarkBackground onClick={handleModalClose}>
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
