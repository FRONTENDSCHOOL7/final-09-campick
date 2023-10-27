import React, { useEffect, useState } from "react";
import DynamicImageComponent from "../../components/community/Community.style";
import { Background } from "./Community.style";
import Navbar from "../../components/navbar/Navbar";

import { homefeedApi } from "../../api/homefeedApi";
import { Header } from "../../components/header/Header.style";

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
              marginLeft: "8px", // index 참조 제거
              marginTop: "36px", // index 참조 제거
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
      </Background>
      <Navbar community />
    </>
  );
};

export default Community;
