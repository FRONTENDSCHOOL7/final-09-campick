import PostItem from "../../components/post/PostItem";
import Comment from "../../components/comment/Comment";
import { WrapViewPost } from "../viewPost/viewPost.style";

export default function ViewPost() {
  return (
    <WrapViewPost>
      <PostItem />
      <Comment />
    </WrapViewPost>
  );
}
