import React from "react";
import moment from "moment";
import "moment/locale/ko";
import {
  WrapComment,
  CommentFollowerProfileImage,
  WrapCommentContent,
  CommentFollowerName,
  CommentText,
  CommentTime,
  WrapCommentFollower,
} from "./comment.style";

export default function Comment({ comment }) {
  const { author, createdAt, content } = comment;

  moment.locale("ko");
  const fromNow = moment(createdAt).fromNow();

  return (
    <>
      <WrapComment>
        <CommentFollowerProfileImage
          src={author.image}
          alt={`${author.username}의 프로필 이미지입니다.`}
        />
        <WrapCommentContent>
          <WrapCommentFollower>
            <CommentFollowerName>{author.username}</CommentFollowerName>
            <CommentTime>{fromNow}</CommentTime>
          </WrapCommentFollower>
          <CommentText>{content}</CommentText>
        </WrapCommentContent>
      </WrapComment>
    </>
  );
}
