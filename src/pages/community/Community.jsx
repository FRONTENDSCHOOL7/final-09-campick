// Community.jsx

import React, { useEffect, useState } from "react";
import DynamicImageComponent from "../../components/community/Community.style";
import { Background, GradientDiv } from "./Community.style";
import Navbar from "../../components/navbar/Navbar";
import { homefeedApi } from "../../api/homefeedApi";
import upload from "../../assets/icons/uploadButton.svg";
import { UploadLink } from "./Community.style";
import { Link } from "react-router-dom";
import CommunityItem from "../../components/community/CommunityItem";
import Header from "../../components/header/Header";

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
      <Header />
      <Background>
        <div style={{ display: "flex" }}>
          <div className="left-images" style={{ flex: 1, marginRight: "8px" }}>
            {evenImages.map((data, index) => (
              <Link to={`${data.id}`}>
                <CommunityItem
                  key={index}
                  imageurl={data.image}
                  address={
                    JSON.parse(data.content).location || "주소를 입력해주세요"
                  }
                />
              </Link>
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
            {oddImages.map((data, index) => (
              <Link to={`${data.id}`}>
                <CommunityItem
                  key={index}
                  imageurl={data.image}
                  address={
                    JSON.parse(data.content).location || "주소를 입력해주세요"
                  }
                />
              </Link>
            ))}
          </div>
        </div>
        <UploadLink to="/community/communitypost">
          <img src={upload} alt="게시물 업로드 버튼" />
        </UploadLink>
        <GradientDiv></GradientDiv>
      </Background>
      <Navbar community />
    </>
  );
};

export default Community;
