import React from "react";
import DynamicImageComponent from "../../components/community/Community.style";
import { Background, GradientDiv } from "./Community.style";
import Navbar from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header.style";

const imageItems = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "가평 어쩌구저쩌구 짱신나",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1517771778436-39f5763f5270?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "가평 어쩌구저쩌구 짱신나",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&q=80&w=2010&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "별이 빛나는 밤에~~",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "가평 어쩌구저쩌구 짱신나",
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "가평 어쩌구저쩌구 짱신나",
  },
  {
    id: 6,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1664358190116-6b01987a890a?auto=format&fit=crop&q=80&w=1049&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "가평 어쩌구저쩌구 짱신나",
  },
  {
    id: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1536294295328-fddf6da9d47e?auto=format&fit=crop&q=80&w=988&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "가평 어쩌구저쩌구 짱신나",
  },
  {
    id: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1489893117776-b13fed1ad239?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "가평 어쩌구저쩌구 짱신나",
  },
  {
    id: 9,
    imageUrl:
      "https://images.unsplash.com/photo-1518110767214-c10a1c3a773e?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "가평 어쩌구저쩌구 짱신나",
  },
];
const Community = () => {
  // 홀수 id를 가진 이미지와 짝수 id를 가진 이미지를 나누기
  const oddImages = imageItems.filter(item => item.id % 2 === 1);
  const evenImages = imageItems.filter(item => item.id % 2 === 0);

  return (
    <>
      <Background>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            {oddImages.map((item, index) => (
              <div
                key={item.id}
                style={{
                  marginRight: "8px", // 홀수 div에만 margin-right를 적용
                }}
              >
                <DynamicImageComponent
                  imageUrl={item.imageUrl}
                  address={item.address}
                />
              </div>
            ))}
          </div>
          <div style={{ flex: 1 }}>
            {evenImages.map((item, index) => (
              <div
                key={item.id}
                style={{
                  marginLeft: index < evenImages.length + 1 ? "8px" : "0", // 짝수 div에만 margin-left를 적용
                  marginTop: index === 0 ? "36px" : "0", // 첫 번째 짝수 div에만 margin-top을 36px로 설정
                }}
              >
                <DynamicImageComponent
                  imageUrl={item.imageUrl}
                  address={item.address}
                />
              </div>
            ))}
          </div>
        </div>
        <GradientDiv className="gra"></GradientDiv>
      </Background>
      <Navbar community />
    </>
  );
};

export default Community;
