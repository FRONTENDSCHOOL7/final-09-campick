import styled from "styled-components";

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
  width: 260px;
  resize: none;
  border: none;
  font-size: 14px;
  overflow: hidden;
  flex-grow: 1;
  /* padding-top: 20px; */
  max-height: 30px;
  overflow-y: scroll;
  line-height: 2.5;

  &::placeholder {
    font-size: 14px;
    color: var(--font-placeholder-color);
  }
  &:focus {
    outline: none;
  }
`;

export const CommentUploadButton = styled.button`
  color: ${props =>
    props.disabled
      ? "var(--primary-disabled-color)"
      : "var(--font-white-color)"};
  background-color: ${props =>
    props.disabled ? "white" : "var(--primary-color)"};
  font-size: 14px;
  font-weight: 600;
  transition: all 0.1s;

  width: 65px;
  height: 32px;
  border: none;
  border-radius: 10px;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  line-height: 2.5;
`;
