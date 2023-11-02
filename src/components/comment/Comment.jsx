import React from "react";
import { Link } from "react-router-dom";
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

export default function Comment({ comment, currentUsername }) {
  const { author, createdAt, content } = comment;
  moment.locale("ko");

  const formatCommentTime = date => {
    const now = moment();
    const commentDate = moment(date);

    if (now.diff(commentDate, "seconds", true) < 1) {
      return "몇 초 전";
    } else {
      return commentDate.fromNow();
    }
  };

  const profileLink = `/${
    author.accountname === currentUsername
      ? "profile"
      : `profile/${author.accountname}`
  }`;

  return (
    <>
      <WrapComment>
        <Link to={profileLink}>
          <CommentFollowerProfileImage
            src={author.image}
            alt={`${author.username}의 프로필 이미지입니다.`}
          />
        </Link>
        <WrapCommentContent>
          <WrapCommentFollower>
            <Link to={profileLink}>
              <CommentFollowerName>{author.username}</CommentFollowerName>
            </Link>
            <CommentTime>{formatCommentTime(createdAt)}</CommentTime>
          </WrapCommentFollower>
          <CommentText>{content}</CommentText>
        </WrapCommentContent>
      </WrapComment>
    </>
  );
}
