import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostItem from "../../components/post/PostItem";
import Comment from "../../components/comment/Comment";
import {
  CommentSection,
  WrapViewPost,
  CommentUploadButton,
  WrapCommentWrite,
  CommentProfileImage,
  CommentInputArea,
} from "../viewPost/ViewPost.style";
import { Helmet } from "react-helmet-async";
import { viewPost } from "../../api/viewpostApi";
import { myInfo } from "../../api/myInfoApi";
import { uploadComment, getCommentList } from "../../api/commentApi";
import HeaderText from "../../components/header/HeaderText";

export default function ViewPost() {
  const { post_id } = useParams();
  const [data, setPostData] = useState(null);
  const [commentContent, setCommentContent] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [comments, setComments] = useState([]);
  const [myProfilePic, setMyProfilePic] = useState("");
  const [myAccountName, setMyAccountName] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const [lender, setLender] = useState(true);

  const loadMyInfo = async () => {
    try {
      const getMyInfo = await myInfo();
      setMyProfilePic(getMyInfo.image);
      setMyAccountName(getMyInfo.accountname);
    } catch (error) {
      console.error("오류 발생", error);
      throw error;
    }
  };

  const handlecommentContentChange = e => {
    const value = e.target.value;
    setCommentContent(value);
    setIsActive(value.length > 0);
  };

  const handleCommentUpload = async () => {
    if (!isActive || isUploading) return;
    setIsUploading(true); // 업로드 시작

    try {
      const response = await uploadComment(post_id, commentContent);

      if (response && response.comment) {
        setComments(prevComments => [response.comment, ...prevComments]);
        setCommentContent(""); // 입력창 초기화
        setCommentCount(prevCount => prevCount + 1);
      }
    } catch (error) {
      console.error("댓글 업로드 실패: ", error);
    } finally {
      setIsUploading(false); // 업로드 종료
    }
  };

  const handleKeyDown = e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleCommentUpload();
    }
  };

  useEffect(() => {
    loadMyInfo();
  }, []);

  useEffect(() => {
    const getPostAndComments = async () => {
      try {
        const fetchedPost = await viewPost(post_id);
        setPostData(fetchedPost);
        setCommentCount(fetchedPost.commentCount);

        const fetchedComments = await getCommentList(post_id);
        setComments(fetchedComments);
      } catch (error) {
        console.error("error", error);
      }
    };
    getPostAndComments();
  }, [post_id, lender]);

  return (
    <>
      <Helmet>
        <title>Campic | 게시글 상세</title>
      </Helmet>
      <HeaderText text={""} />
      <WrapViewPost>
        {data && (
          <PostItem
            data={data}
            commentCount={commentCount}
            location={data && JSON.parse(data.content).location}
            viewPost
          />
        )}
        <CommentSection>
          {comments &&
            [...comments].map(comment => (
              <Comment
                key={comment.id}
                comment={comment}
                currentUsername={myAccountName}
                postId={post_id}
                setLender={setLender}
              />
            ))}
        </CommentSection>

        <WrapCommentWrite>
          <CommentProfileImage
            src={myProfilePic}
            alt={`${myAccountName}의 프로필 이미지입니다.`}
          />
          <CommentInputArea
            value={commentContent}
            onChange={handlecommentContentChange}
            onKeyDown={handleKeyDown}
            placeholder="댓글을 입력하세요..."
          />
          <CommentUploadButton
            onClick={handleCommentUpload}
            disabled={!commentContent.trim()}
          >
            게시
          </CommentUploadButton>
        </WrapCommentWrite>
      </WrapViewPost>
    </>
  );
}
