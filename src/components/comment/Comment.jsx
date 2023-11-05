import React, { useState } from "react";
import { Link } from "react-router-dom";
import iconDot from "../../assets/icons/icon-dot.svg";
import { deleteComment } from "../../api/commentDeleteApi";
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
import {
  DarkBackground,
  ModalWrap,
  CheckModalWrap,
  CheckButtonWrap,
  CheckMsg,
  CheckConfirm,
  ModalText,
} from "../modal/Modal.style";
import { DotImg, ModalBtn } from "../post/post.style";
import { DeletePostToast } from "../toast/Toast";

export default function Comment({
  comment,
  currentUsername,
  setLender,
  postId,
}) {
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

  const [isCommentModal, setIsCommentModal] = useState(false);
  const [isCommentDeleteCheckModal, setIsCommentDeleteCheckModal] =
    useState(false);
  const [deleteMsg, setDeleteMsg] = useState("");
  const handleCommentModalOptionClick = () => {
    setIsCommentModal(true);
  };
  const handleCommentModalClose = () => {
    setIsCommentModal(false);
  };
  const handleCommentDeleteClick = () => {
    setIsCommentDeleteCheckModal(true);
  };
  const handleCommentDeleteCheckModalClose = () => {
    setIsCommentDeleteCheckModal(false);
  };

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

        {currentUsername === author.accountname && (
          <ModalBtn onClick={handleCommentModalOptionClick}>
            <DotImg src={iconDot} alt="아이콘 버튼 " />
          </ModalBtn>
        )}

        {isCommentModal && (
          <DarkBackground onClick={handleCommentModalClose}>
            <ModalWrap>
              <ModalText onClick={handleCommentDeleteClick}>삭제하기</ModalText>
            </ModalWrap>
          </DarkBackground>
        )}
        {isCommentDeleteCheckModal && (
          <DarkBackground onClick={handleCommentDeleteCheckModalClose}>
            <CheckModalWrap>
              <CheckMsg>댓글을 삭제하시겠어요?</CheckMsg>
              <CheckButtonWrap>
                <CheckConfirm onClick={handleCommentDeleteCheckModalClose}>
                  취소
                </CheckConfirm>
                <CheckConfirm
                  // check
                  onClick={async () => {
                    setDeleteMsg(await deleteComment(postId, comment.id));
                    setTimeout(async () => {
                      setLender(pre => !pre);
                    }, 500);
                  }}
                >
                  삭제
                </CheckConfirm>
              </CheckButtonWrap>
            </CheckModalWrap>
          </DarkBackground>
        )}
      </WrapComment>
      <DeletePostToast deleteMsg={deleteMsg} />
    </>
  );
}
