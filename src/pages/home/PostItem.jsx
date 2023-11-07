import React from "react";
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

export default function PostItem({ data }) {
  const formatCreatedAt = createdAt => {
    const date = new Date(createdAt);
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return date.toLocaleDateString("ko-KR", options);
  };
  return (
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
          <ModalBtn>
            <DotImg src={iconDot} alt="아이콘 버튼 " />
          </ModalBtn>
        </WrapperDiv>
      </ProfileDiv>
      <ProfileContent>{data && data.content}</ProfileContent>
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
          <IconSpan>1</IconSpan>
        </Icons>
        <PostData>{data && formatCreatedAt(data.createdAt)}</PostData>
      </WrapperDiv>
    </PostArticle>
  );
}
