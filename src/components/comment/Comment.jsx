import React, { useState } from "react";
import {
  CommentInputArea,
  CommentUploadButton,
  WrapCommentWrite,
  CommentProfileImage,
} from "../comment/commentWrite.style";
import {
  CommentSection,
  WrapComment,
  CommentFollowerProfileImage,
  WrapCommentContent,
  CommentFollowerName,
  CommentText,
  CommentTime,
  WrapCommentFollower,
} from "../comment/comment.style";

export default function Comment() {
  const [text, setText] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleTextChange = e => {
    const value = e.target.value;
    setText(value);
    setIsActive(value.length > 0);
  };
  return (
    <>
      <CommentSection>
        <WrapComment>
          <CommentFollowerProfileImage />
          <WrapCommentContent>
            <WrapCommentFollower>
              <CommentFollowerName>팔로워 이름</CommentFollowerName>
              <CommentTime>시간</CommentTime>
            </WrapCommentFollower>
            <CommentText>댓글</CommentText>
          </WrapCommentContent>
        </WrapComment>
      </CommentSection>

      <WrapCommentWrite>
        <CommentProfileImage />
        <CommentInputArea
          value={text}
          onChange={handleTextChange}
          placeholder="댓글을 입력하세요..."
        />
        <CommentUploadButton disabled={isActive}>게시</CommentUploadButton>
      </WrapCommentWrite>
    </>
  );
}
