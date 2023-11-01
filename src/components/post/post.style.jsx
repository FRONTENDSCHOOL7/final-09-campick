import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostArticle = styled.article`
  padding: 20px 16px;

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
  color:#444;
`;
export const WrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

export const ModalBtn = styled.button`
  cursor: pointer;
`;

export const ImgBox = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 0px;
`;
export const Cover = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
export const Icons = styled.div`
  color: var(--font-primary-color);
`;
export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
export const IconSpan = styled.span`
  font-size: 12px;
  margin-right: 15px;
`;
export const PostData = styled.p`
  font-size: 10px;
  color: var(--font-primary-color);
`;
export const HomePostTitle = styled.h2`
  margin: 12px auto 0 10px;
`;
