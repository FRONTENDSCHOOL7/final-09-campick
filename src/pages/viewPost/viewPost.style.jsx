import styled from "styled-components";

export const WrapViewPost = styled.section`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  overflow-y: scroll;
  height: calc(100vh - 60px);
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CommentSection = styled.section`
  width: 100%;
  height: auto;
  padding: 16px 16px 60px;
  box-sizing: border-box;
`;

export const WrapCommentWrite = styled.section`
  width: 390px;
  box-sizing: border-box;
  background-color: #fff;
  padding: 12px 12px 12px 16px;
  border-top: 1px solid #dbdbdb;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const CommentProfileImage = styled.img`
  display: block;
  width: 40px;
  height: 36px;
  border-radius: 50px;
  object-fit: cover;
`;

export const CommentInputArea = styled.textarea`
  font-family: "TheJamsil", sans-serif;
  width: 260px;
  resize: none;
  border: none;
  font-size: 14px;
  overflow: hidden;
  flex-grow: 1;
  max-height: 30px;
  overflow: hidden;
  line-height: 2;

  &::placeholder {
    font-size: 14px;
    color: var(--font-placeholder-color);
  }
  &:focus {
    outline: none;
  }
`;

export const CommentUploadButton = styled.button`
  font-family: "TheJamsil", sans-serif;
  color: ${props =>
    props.disabled
      ? "var(--primary-disabled-color)"
      : "var(--font-white-color)"};
  background-color: ${props =>
    props.disabled ? "white" : "var(--primary-color)"};
  font-size: 14px;
  font-weight: 400;
  transition: all 0.1s;

  width: 65px;
  height: 32px;
  border: none;
  border-radius: 10px;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  line-height: 2.5;
`;
