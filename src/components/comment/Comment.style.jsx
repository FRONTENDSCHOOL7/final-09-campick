import styled from "styled-components";

export const WrapComment = styled.div`
  //.
  display: flex;
  align-items: flex-start;
  gap: 15px;
  flex-shrink: 0;
  margin-bottom: 20px;
`;

export const WrapCommentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-shrink: 0;
`;

export const WrapCommentFollower = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  width: 270px;
  margin-top: 2px;
`;

export const CommentFollowerProfileImage = styled.img`
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  align-self: flex-start;
  margin-top: 2px;
`;

export const CommentFollowerName = styled.p`
  font-size: 14px;
  font-weight: 600;
`;
export const CommentTime = styled.p`
  font-size: 10px;
  color: var(--font-primary-color);
`;
export const CommentText = styled.p`
  width: 100%;
  max-width: 290px;
  font-size: 14px;
  color: #333333;
  word-break: break-all;
  white-space: pre-line;
  line-height: 1.3em;
  text-overflow: wrap;
`;
export const DeleteCommentButton = styled.button`
  background-color: red; // 삭제 버튼의 스타일을 정의
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;
