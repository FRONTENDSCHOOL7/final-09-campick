import {
  WrapCommentWrite,
  CommentInputArea,
  CommentUploadButton,
  CommentProfileImage,
} from "../viewPost/viewPost.style";
import { Helmet } from "react-helmet-async";
import HeaderText from "../../components/header/HeaderText";
import {
  ChatBox,
  MessageRow,
  MessageRow2,
  MessageText,
  Column,
  MessageText2,
  ChatText,
  ChatTextRight,
  Time,
  HomeContainer,
  ChatTitle,
} from "./Chat.style";
import chat from "../../assets/icons/chat.svg";

export default function Chat() {
  return (
    <>
      <Helmet>
        <title>Campic | 예약 채팅창</title>
      </Helmet>
      <HeaderText text={"campic"} />
      <HomeContainer>
        <ChatTitle>campic</ChatTitle>
        <ChatBox>
          <Column>
            <MessageRow>
              <Time>15:20</Time>
              <MessageText>
                <ChatTextRight>안녕하세요!</ChatTextRight>
              </MessageText>
            </MessageRow>
          </Column>
          <Column>
            <MessageRow2>
              <MessageText2>
                <ChatText>네 말씀하세요</ChatText>
              </MessageText2>
              <Time>15:23</Time>
            </MessageRow2>
          </Column>
        </ChatBox>
      </HomeContainer>
      <WrapCommentWrite>
        <CommentProfileImage src={chat} />
        <CommentInputArea placeholder="메세지 입력하기..." />
        <CommentUploadButton disabled>전송</CommentUploadButton>
      </WrapCommentWrite>
    </>
  );
}
