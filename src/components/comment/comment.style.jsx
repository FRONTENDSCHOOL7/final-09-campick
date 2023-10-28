import styled from "styled-components";

export const CommentSection = styled.section`
  width: 100%;
  height: auto;
  padding: 20px 16px 60px;
  box-sizing: border-box;
`;

export const WrapComment = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 17px;
  flex-shrink: 0;
  margin-bottom: 25px;
`;

export const WrapCommentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
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
  cursor: pointer;
  margin-top: 1px;
`;

export const CommentFollowerName = styled.p`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;
export const CommentTime = styled.p`
  font-size: 10px;
  color: var(--font-primary-color);
`;
export const CommentText = styled.p`
  width: 100%;
  max-width: 260px;
  font-size: 14px;
  color: #333333;
  white-space: pre-line;
  line-height: 1.3em;
`;