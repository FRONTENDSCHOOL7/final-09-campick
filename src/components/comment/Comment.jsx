import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostItem from "../../components/post/PostItem";
import {
  CommentSection,
  WrapComment,
  CommentFollowerProfileImage,
  WrapCommentContent,
  CommentFollowerName,
  CommentText,
  CommentTime,
  WrapCommentFollower,
} from "../../components/comment/comment.style";
import { WrapViewPost } from "../../pages/viewPost/viewPost.style";
import {
  CommentInputArea,
  CommentUploadButton,
  WrapCommentWrite,
  CommentProfileImage,
} from "../../components/comment/commentWrite.style";
import { uploadComment, getCommentList } from "../../api/commentApi";

export default function ViewPost() {
  const { post_id } = useParams();
  const [commentContent, setCommentContent] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [comments, setComments] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function timeDifference(current, previous) {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const elapsed = current - previous;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + "초 전";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + "분 전";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + "시간 전";
    } else if (elapsed < msPerMonth) {
      return Math.round(elapsed / msPerDay) + "일 전";
    } else if (elapsed < msPerYear) {
      return Math.round(elapsed / msPerMonth) + "달 전";
    } else {
      return Math.round(elapsed / msPerYear) + "년 전";
    }
  }

  useEffect(() => {
    const getComments = async () => {
      const res = await getCommentList({ post_id });
      setComments(res);
    };
    getComments();
  }, [{ post_id }]);

  const handlecommentContentChange = e => {
    const value = e.target.value;
    setCommentContent(value);
    setIsActive(value.length > 0);
  };

  const handleCommentUpload = async () => {
    if (!isActive || isUploading) return;
    setIsUploading(true); // 업로드 시작

    try {
      const response = await uploadComment({ post_id }, commentContent);

      if (response && response.comment) {
        setComments(prevComments => [response.comment, ...prevComments]); // 새로운 댓글 리스트
        setCommentContent(""); // 입력창 초기화
      }
    } catch (error) {
      console.error("댓글 업로드 실패: ", error);
      setErrorMsg("댓글 업로드에 실패했습니다.");
    } finally {
      setIsUploading(false); // 업로드 종료
    }
  };

  return (
    <>
      <WrapViewPost>
        <PostItem />
        {errorMsg && <div style={{ color: "red" }}>{errorMsg}</div>}
        <CommentSection>
          {comments.map(comment => (
            <WrapComment key={comment.id}>
              <CommentFollowerProfileImage src={comment.author.image} />
              <WrapCommentContent>
                <WrapCommentFollower>
                  <CommentFollowerName>
                    {comment.author.username}
                  </CommentFollowerName>
                  <CommentTime>
                    {timeDifference(new Date(), new Date(comment.createdAt))}
                  </CommentTime>
                </WrapCommentFollower>
                <CommentText>{comment.content}</CommentText>
              </WrapCommentContent>
            </WrapComment>
          ))}
        </CommentSection>
        <WrapCommentWrite>
          <CommentProfileImage />
          <CommentInputArea
            value={commentContent}
            onChange={handlecommentContentChange}
            placeholder="댓글을 입력하세요..."
          />
          <CommentUploadButton
            onClick={handleCommentUpload}
            disabled={!isActive || isUploading || commentContent.length === 0}
          >
            게시
          </CommentUploadButton>
        </WrapCommentWrite>
      </WrapViewPost>
    </>
  );
}
