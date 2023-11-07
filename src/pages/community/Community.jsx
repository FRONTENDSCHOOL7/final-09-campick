// Community.jsx

import React, { useEffect, useState } from "react";
import {
  Background,
  GradientDiv,
  LeftImages,
  NoFriendsImage,
  SplashStyle,
} from "./Community.style";
import Navbar from "../../components/navbar/Navbar";
import { homefeedApi } from "../../api/homefeedApi";
import upload from "../../assets/icons/uploadButton.svg";
import { UploadLink } from "./Community.style";
import { Link } from "react-router-dom";
import CommunityItem from "../../components/community/CommunityItem";
import Header from "../../components/header/Header";
import Splash from "../splash/Splash";
import NoFriendsMessage from "../../assets/image/nocamper.png";
import { CommunityImageSet } from "./Community.style";
import { RightImages } from "./Community.style";
import { Helmet } from "react-helmet-async";

const Community = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchHomefeed() {
      const res = await homefeedApi();
      setData(res.posts);
      setIsLoading(false);
    }
    fetchHomefeed();
  }, []);

  const oddImages = data.filter((_, index) => index % 2 === 1);
  const evenImages = data.filter((_, index) => index % 2 === 0);

  return (
    <>
      <Header />
      <Helmet>
        <title>Campick | 커뮤니티</title>
      </Helmet>
      <Background>
        {isLoading ? (
          <Splash style={SplashStyle} />
        ) : data.length === 0 ? (
          <NoFriendsImage src={NoFriendsMessage} alt="" />
        ) : (
          <>
            <h1 className="a11y-hidden">
              팔로우한 유저들이 게시한 게시물을 볼 수 있는 화면입니다.
            </h1>
            <CommunityImageSet>
              <LeftImages>
                {evenImages.map((data, index) => (
                  <Link to={`${data.id}`} key={index}>
                    <CommunityItem
                      imageurl={data.image.split(",")[0]}
                      address={
                        JSON.parse(data.content).location ||
                        "주소를 입력해주세요"
                      }
                    />
                  </Link>
                ))}
              </LeftImages>
              <RightImages>
                {oddImages.map((data, index) => (
                  <Link to={`${data.id}`} key={index}>
                    <CommunityItem
                      imageurl={data.image.split(",")[0]}
                      address={
                        JSON.parse(data.content).location ||
                        "주소를 입력해주세요"
                      }
                    />
                  </Link>
                ))}
              </RightImages>
            </CommunityImageSet>
            <GradientDiv></GradientDiv>
          </>
        )}
        <UploadLink to="/community/communitypost">
          <img src={upload} alt="게시물 업로드 버튼" />
        </UploadLink>
      </Background>
      <Navbar community />
    </>
  );
};

export default Community;
