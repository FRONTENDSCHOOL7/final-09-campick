import React from "react";
import { ChatUrlA, ChatUrlWrapper } from "./Chat.style";

export default function ChatUrl({ url }) {
  return (
    <ChatUrlWrapper>
      <ChatUrlA href={url}> 클릭해서 홈페이지 가기</ChatUrlA>
    </ChatUrlWrapper>
  );
}
