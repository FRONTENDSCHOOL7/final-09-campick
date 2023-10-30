// Community.jsx

import React, { useEffect, useState } from "react";
import DynamicImageComponent from "../../components/community/Community.style";
import { Background } from "./Community.style";
import Navbar from "../../components/navbar/Navbar";
import { homefeedApi } from "../../api/homefeedApi";
import { Header } from "../../components/header/Header.style";
import upload from "../../assets/icons/uploadButton.svg";
import { UploadLink } from "./Community.style";

const Community = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchHomefeed() {
      const res = await homefeedApi();
      setData(res.posts);
    }
    fetchHomefeed();
  }, []);

  const oddImages = data.filter((_, index) => index % 2 === 1);
  const evenImages = data.filter((_, index) => index % 2 === 0);

  return (
    <>
      <Header></Header>
      <Background>
        <div style={{ display: "flex" }}>
          <div className="left-images" style={{ flex: 1, marginRight: "8px" }}>
            {evenImages.map((image, index) => (
              <DynamicImageComponent
                key={index}
                imageurl={image.image}
                address={image.address || "주소를 입력해주세요"}
              />
            ))}
          </div>
          <div
            className="right-images"
            style={{
              flex: 1,
              marginLeft: "8px",
              marginTop: "36px",
            }}
          >
            {oddImages.map((image, index) => (
              <DynamicImageComponent
                key={index}
                imageurl={image.image}
                address={image.address || "주소를 입력해주세요"}
              />
            ))}
          </div>
        </div>
        <UploadLink to="/community/communitypost">
          <img src={upload} alt="게시물 업로드 버튼" />
        </UploadLink>
      </Background>
      <Navbar community />
    </>
  );
};

export default Community;
