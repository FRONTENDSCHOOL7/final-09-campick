import React from "react";
import { SplashContainer } from "./Splash.style"; // Splash.style.jsx 파일을 가져옵니다.

const Splash = () => {
  return (
    <SplashContainer
      style={{
        height: "100vh",
        position: "relative",
        animation: "dropAnimation 1s ease forwards",
      }}
    >
      <div
        style={{
          transform: "scale(0.6)",
          position: "absolute",
          margin: "300px 0 0 40px",

          // bottom: "420px",
          // right: "87%",
        }}
      >
        <div className="land">
          <div className="chimney"></div>
          <div className="fire1"></div>
          <div className="fire2"></div>
          <div className="fire3"></div>
          <div className="stick1"></div>
          <div className="stick2"></div>
          <div className="stick3"></div>
          <div className="camp"></div>
          <div className="camp1"></div>
          <div className="camp2"></div>
          <div className="camp3"></div>
          <div className="camp4"></div>
          <div className="vessel">
            <div className="fluid"></div>
          </div>
          <div className="mountain1"></div>
          <div className="mountain2"></div>
          <div className="mountain3"></div>
          <div className="mountain4"></div>
          <div className="mountain5"></div>
          <div className="moon">
            {/* <div className="light"></div>
            <div className="light2"></div>
            <div className="light3"></div> */}
          </div>
          <div className="stars"></div>
          <div className="stars1"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
          <div className="stars4"></div>
          <div className="smoke"></div>
          <div className="smoke1"></div>
          <div className="smoke2"></div>
          <div className="smoke3"></div>
          <div className="smoke4"></div>
          <div className="cloud"></div>
          <div className="cloud1"></div>
          <div className="cloud2"></div>
          <div className="cloud3"></div>
        </div>
      </div>
    </SplashContainer>
  );
};

export default Splash;
