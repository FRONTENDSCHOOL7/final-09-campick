import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import iconDot from "../../assets/icons/icon-dot.svg";
import iconHeartedInactive from "../../assets/icons/heartInactive.png";
import iconHeartedActive from "../../assets/icons/heartActive.png";
import comment from "../../assets/icons/icon-comment.svg";
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
  IconHeart,
  IconComment,
  IconSpan,
  PostData,
} from "./post.style";
import { heart, unheart } from "../../api/viewpostApi";

export default function PostItem({ data, commentCount }) {
  const [isHearted, setIsHearted] = useState(false);
  const [heartCount, setHeartCount] = useState(data.heartCount);

  const formatCreatedAt = createdAt => {
    const date = new Date(createdAt);
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return date.toLocaleDateString("ko-KR", options);
  };

  const heartedActive = async () => {
    try {
      const res = await heart(data.id);
      console.log(res.hearted);
    } catch (error) {
      console.error("error", error);
    }
  };

  const heartedInactive = async () => {
    try {
      const res = await unheart(data.id);
      console.log(res.hearted);
    } catch (error) {
      console.error("error", error);
    }
  };

  const handleHeartClick = () => {
    if (isHearted) {
      heartedInactive();
      setIsHearted(false);
      setHeartCount(heartCount - 1);
    } else {
      heartedActive();
      setIsHearted(true);
      setHeartCount(heartCount + 1);
    }
  };

  useEffect(() => {
    setIsHearted(data.hearted);
  }, [data.hearted]);

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
            <DotImg src={iconDot} alt="아이콘 버튼" />
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
          <IconHeart
            src={isHearted ? iconHeartedActive : iconHeartedInactive}
            alt="좋아요 아이콘"
            onClick={handleHeartClick}
          ></IconHeart>
          <IconSpan>{heartCount}</IconSpan>
          <Link to={`../../community/${data && data.id}`}>
            <IconComment src={comment} alt="댓글 이동 버튼"></IconComment>
          </Link>
          <IconSpan>{commentCount}</IconSpan>
        </Icons>
        <PostData>{data && formatCreatedAt(data.createdAt)}</PostData>
      </WrapperDiv>
    </PostArticle>
  );
}
