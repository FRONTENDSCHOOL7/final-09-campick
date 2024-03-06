import React, { useRef, useState, useEffect } from "react";
import {
  WrapCommentWrite,
  CommentInputArea,
  CommentUploadButton,
  CommentProfileImage,
} from "../viewPost/ViewPost.style";
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
import uploadPic from "../../assets/icons/img-button.svg";
import ChatUrl from "./ChatUrl";
import { useLocation } from "react-router-dom";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef(null);
  const location = useLocation();

  const handleInputChange = e => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    // 현재 시간을 HH:MM 형태로 가져오기
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const newMessage = { text: userInput, time: currentTime, sender: "right" };
    // 메시지 목록에 새 메시지 추가
    setMessages([...messages, newMessage]);
    setUserInput("");
  };

  const handleKeyDown = e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      setTimeout(() => {
        handleSendMessage();
      }, 300);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom(); // 컴포넌트가 업데이트될 때마다 스크롤
  }, [messages]);

  return (
    <>
      <Helmet>
        <title>Campic | 예약 채팅창</title>
      </Helmet>
      <HeaderText text={location.state.data.author.username} />
      <HomeContainer>
        <ChatTitle>campick</ChatTitle>
        <ChatUrl url={location.state.data.link} />
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
          {messages.map((message, index) => (
            <Column key={index}>
              <MessageRow>
                <Time>{message.time}</Time>
                <MessageText>
                  <ChatTextRight>{message.text}</ChatTextRight>
                </MessageText>
              </MessageRow>
            </Column>
          ))}
          <div ref={messagesEndRef} />{" "}
        </ChatBox>
      </HomeContainer>
      <WrapCommentWrite>
        <CommentProfileImage src={uploadPic} />
        <CommentInputArea
          placeholder="메세지 입력하기..."
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <CommentUploadButton
          onClick={handleSendMessage}
          disabled={!userInput.trim()}
        >
          전송
        </CommentUploadButton>
      </WrapCommentWrite>
    </>
  );
}
