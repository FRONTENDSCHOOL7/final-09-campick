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
import { Link } from "react-router-dom";
export default function Comment({ comment }) {
  const { author, createdAt, content } = comment;
  const myAccountname = localStorage.getItem("accountname");
  moment.locale("ko");
  const fromNow = moment(createdAt).fromNow();

  return (
    <>
      <WrapComment>
        <Link
          to={
            myAccountname === author.accountname
              ? `../../profile`
              : `../../profile/${author.accountname}`
          }
        >
          <CommentFollowerProfileImage
            src={author.image}
            alt={`${author.username}의 프로필 이미지입니다.`}
          />
        </Link>
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
