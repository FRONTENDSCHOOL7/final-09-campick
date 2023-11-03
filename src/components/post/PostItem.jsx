import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import iconDot from "../../assets/icons/icon-dot.svg";
import iconHeartedInactive from "../../assets/icons/heartInactive.png";
import iconHeartedActive from "../../assets/icons/heartActive.png";
import comment from "../../assets/icons/icon-comment.svg";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
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
import PostMap from "./PostMap";
import { GradientOverlay } from "../community/Community.style";
export default function PostItem({ data, commentCount, setLender, location }) {
  const [isHearted, setIsHearted] = useState(false);
  const [heartCount, setHeartCount] = useState(data.heartCount);
  const [isPostModal, setIsPostModal] = useState(false);
  const [isPostDeleteCheckModal, setIsPostDeleteCheckModal] = useState(false);
  const [isReportModal, setIsReportModal] = useState(false);
  const [deleteMsg, setDeleteMsg] = useState("");
  const [isClicked, setIsClicked] = useState(false);
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
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);
  };

  useEffect(() => {
    setIsHearted(data.hearted);
  }, [data.hearted]);

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
  console.log("이미지",data.image.split(","))

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
              <span>
                @ {data && data.author.accountname}</span>
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
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}>
          {data && data.image.split(",").map((item)=>
          <SwiperSlide>
            <Cover src={item} alt="업로드한 이미지" />
            <GradientOverlay/>
          <PostMap location = {location}/>
            </SwiperSlide>
          )}
          
          
        
        </Swiper>
        </ImgBox>
        
        <WrapperDiv>
          <Icons>
            <IconHeart
              src={isHearted ? iconHeartedActive : iconHeartedInactive}
              alt="좋아요 아이콘"
              onClick={handleHeartClick}
              isClicked={isClicked}
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
