import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import iconDot from "../../assets/icons/icon-dot.svg";
import heart from "../../assets/icons/heart.svg";
import message from "../../assets/icons/icon-message-circle.svg";
import {
  PostArticle,
  ProfileDiv,
  ProfileNav,
  ProfileImg,
  ProfileNavs,
  DotImg,
  ProfileContent,
  WrapperDiv,
  ModalBtn,
  ImgBox,
  Cover,
  Icons,
  Icon,
  IconSpan,
  PostData,
} from "./post.style";
import {
  DarkBackground,
  ModalWrap,
  CheckModalWrap,
  CheckButtonWrap,
  CheckMsg,
  CheckConfirm,
  ModalText,
} from "../modal/Modal.style";
import { userpostDelete } from "../../api/userpostDeleteApi";
import { DeletePostToast } from "../../components/toast/Toast";
export default function PostItem({ data, commentCount, setLender }) {
  const [isPostModal, setIsPostModal] = useState(false);
  const [isPostDeleteCheckModal, setIsPostDeleteCheckModal] = useState(false);
  const [isReportModal, setIsReportModal] = useState(false);
  const [deleteMsg, setDeleteMsg] = useState("");
  const formatCreatedAt = createdAt => {
    const date = new Date(createdAt);
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return date.toLocaleDateString("ko-KR", options);
  };
  const handlePostModalOptionClick = () => {
    data.author.accountname === localStorage.getItem("accountname")
      ? setIsPostModal(true)
      : setIsReportModal(true);
  };
  const handlePostModalClose = () => {
    setIsPostModal(false);
  };
  const handlePostDeleteClick = () => {
    setIsPostDeleteCheckModal(true);
  };
  const handlePostDeleteCheckModalClose = () => {
    setIsPostDeleteCheckModal(false);
  };

  return (
    <>
      <PostArticle>
        <ProfileDiv>
          <ProfileNav to={`/profile/${data && data.author.accountname}`}>
            <ProfileImg
              src={data && data.author.image}
              alt={`${data && data.author.username}의 프로필 이미지입니다.`}
            />
          </ProfileNav>
          <WrapperDiv>
            <ProfileNavs>
              <span>{data && data.author.username}</span>
              <span>{data && data.author.accountname}</span>
            </ProfileNavs>
            <ModalBtn onClick={handlePostModalOptionClick}>
              <DotImg src={iconDot} alt="아이콘 버튼 " />
            </ModalBtn>
          </WrapperDiv>
        </ProfileDiv>
        <ProfileContent>
          {data && JSON.parse(data.content).content}
        </ProfileContent>
        <ImgBox>
          <Cover src={data && data.image} alt="업로드한 이미지" />
        </ImgBox>
        <WrapperDiv>
          <Icons>
            <Icon src={heart} alt="좋아요 아이콘"></Icon>
            <IconSpan>1</IconSpan>
            <Link>
              <Icon src={message} alt="댓글 이동 버튼"></Icon>
            </Link>
            <IconSpan>{commentCount}</IconSpan>
          </Icons>
          <PostData>{data && formatCreatedAt(data.createdAt)}</PostData>
        </WrapperDiv>
      </PostArticle>

      {isPostModal && (
        <DarkBackground onClick={handlePostModalClose}>
          <ModalWrap>
            <ModalText onClick={handlePostDeleteClick}>삭제하기</ModalText>
            <ModalText>수정하기</ModalText>
          </ModalWrap>
        </DarkBackground>
      )}
      {isPostDeleteCheckModal && (
        <DarkBackground onClick={handlePostDeleteCheckModalClose}>
          <CheckModalWrap>
            <CheckMsg>게시글을 삭제하시겠어요?</CheckMsg>
            <CheckButtonWrap>
              <CheckConfirm onClick={handlePostDeleteCheckModalClose}>
                취소
              </CheckConfirm>
              <CheckConfirm
                check
                onClick={async () => {
                  setDeleteMsg(await userpostDelete(data.id));
                  setTimeout(async () => {
                    setLender(pre => !pre);
                  }, 500);
                }}
              >
                삭제
              </CheckConfirm>
            </CheckButtonWrap>
          </CheckModalWrap>
        </DarkBackground>
      )}

      {isReportModal && (
        <DarkBackground onClick={() => setIsReportModal(false)}>
          <ModalWrap>
            <ModalText>신고하기</ModalText>
          </ModalWrap>
        </DarkBackground>
      )}
      <DeletePostToast deleteMsg={deleteMsg} />
    </>
  );
}
