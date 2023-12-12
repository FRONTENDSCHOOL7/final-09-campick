import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

export const PostArticle = styled.article`
  padding: 16px 16px 10px 16px;
  border-bottom: 1px solid #c4c4c4;
`;
export const ProfileDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const ProfileNav = styled(Link)`
  margin-right: 16px;
`;
export const ProfileImg = styled.img`
  display: block;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`;
export const ProfileNavs = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > span:first-child {
    font-size: 14px;
    margin-bottom: 2px;
    font-weight: bold;
  }
  & > span:last-child {
    font-size: 12px;
    color: var(--font-primary-color);
  }
`;
export const DotImg = styled.img`
  width: 18px;
  height: 18px;
`;
export const ProfileContent = styled.pre`
  white-space: pre-wrap;
  word-break: break-all;
  font-size: 14px;
  line-height: 1.2;
  color: #444;
`;
export const WrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const ModalBtn = styled.button`
  cursor: pointer;
`;

export const ImgBox = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 10px 0px;
  position: relative;
  .swiper-button-prev,
  .swiper-button-next {
    z-index: 1000;
    color: #fff;
    transform: scale(0.8);
    transition: 0.2s;
    opacity: 0.6;
    text-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    &:hover {
      transform: scale(0.9);
      transition: 0.2s;
      opacity: 1.5;
    }
  }
`;
export const Cover = styled.img`
  width: 100%;
  height: 330px;
  border-radius: 10px;
  object-fit: cover;
`;
export const Icons = styled.div`
  color: var(--font-primary-color);
  display: flex;
  align-items: center;
`;

const pulse = keyframes`0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;
export const IconHeart = styled.img`
  width: 16px;
  height: 19px;
  margin-right: 5px;
  cursor: pointer;
  animation: ${props =>
    props.isclicked === "true"
      ? css`
          ${pulse} 0.5s
        `
      : "none"}; // css 헬퍼 함수로 감싸줌
`;

export const IconComment = styled.img`
  width: 21px;
  height: 21px;
  margin-right: 5px;
`;
export const IconSpan = styled.span`
  font-size: 12px;
  margin-right: 15px;
  margin-top: 2px;
`;
export const PostData = styled.p`
  font-size: 10px;
  color: var(--font-primary-color);
`;
export const HomePostTitle = styled.h2`
  margin: 12px auto 0 10px;
`;
export const PostSection = styled.section`
  background-color: white;
  border-radius: 10px;
  border: 0.5px solid #dbdbdb;
  margin: 0 8px 0 8px;
  flex-basis: 300px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const PostMapWrapper = styled.div`
  display: flex;

  align-items: center;
  font-size: 10px;
  cursor: pointer;
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: #fff;
  z-index: 100;
`;
export const PointIcon = styled.img`
  width: 12px;
  height: 14px;
  margin-right: 5px;
`;
export const AlbumImg = styled.img`
  width: 114px;
  height: 114px;
  border-radius: 10px;
  object-fit: cover;
`;
