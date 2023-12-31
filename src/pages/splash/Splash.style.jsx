// import styled from "@emotion/styled";
import { styled } from "styled-components";

export const SplashContainer = styled.div`
  .land {
    position: absolute;
    top: 60%;
    left: 30%;
    width: 500px;
    height: 10px;
    background: #000;
    border-radius: 10%;
  }

  .chimney {
    position: absolute;
    left: 15%;
    width: 40px;
    height: 10px;
    background: #ff8c1a;
    border-radius: 10%;
  }

  .fire1 {
    position: absolute;
    bottom: 0%;
    left: 15%;
    width: 8px;
    height: 24px;
    background: #ff8c1a;
    border-radius: 5px;
  }

  .fire2 {
    position: absolute;
    bottom: 55%;
    left: 18.2%;
    width: 8px;
    height: 30px;
    background: #ff8c1a;
    border-radius: 5px;
  }

  .fire3 {
    position: absolute;
    bottom: 54%;
    left: 21.5%;
    width: 8px;
    height: 34px;
    background: #ff8c1a;
    border-radius: 5px;
  }

  .stick1 {
    position: absolute;
    bottom: 44%;
    left: 6%;
    width: 7px;
    height: 90px;
    background: #001;
    border-radius: 5px;
  }

  .stick2 {
    z-index: 10;
    position: absolute;
    bottom: 44%;
    left: 30%;
    width: 7px;
    height: 90px;
    background: #001;
    border-radius: 5px;
  }

  .stick3 {
    z-index: 10;
    position: absolute;
    bottom: 800%;
    left: 4%;
    width: 150px;
    height: 6px;
    background: #001;
    border-radius: 5px;
  }

  .vessel {
    z-index: 10;
    position: absolute;
    bottom: 460%;
    left: 15%;
    width: 34px;
    height: 34px;
    border-radius: 5%;
    border: solid #001;
  }

  .fluid {
    position: absolute;
    top: 50%;
    width: 35px;
    height: 18px;
    background: #ff3300;
    border-radius: 10%;
  }

  .water {
    position: absolute;
    top: 60%;
    left: 70%;
    width: 4%;
    height: 10px;
    background: #009fc6;
    border-radius: 15%;
  }

  .camp {
    z-index: 10;
    position: absolute;
    bottom: 40%;
    left: 50%;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #ebd090;
    border-radius: 5%;
  }

  .camp3 {
    z-index: 10;
    position: absolute;
    bottom: 40%;
    left: 60%;
    width: 0;
    height: 0;
    border-right: 18px solid transparent;
    border-bottom: 101px solid #000;
  }

  .camp2 {
    z-index: 20;
    position: absolute;
    bottom: 40%;
    left: 65%;
    width: 100px;
    height: 100px;
    -webkit-transform: skew(27deg);
    -moz-transform: skew(27deg);
    -o-transform: skew(27deg);
    background: #7cb45b;
    border-radius: 5%;
  }

  .camp1 {
    z-index: 25;
    position: absolute;
    bottom: 40%;
    left: 67.7%;
    width: 100px;
    height: 50px;
    -webkit-transform: skew(27deg);
    -moz-transform: skew(27deg);
    -o-transform: skew(27deg);
    background: #466e2e;
    border-radius: 5%;
  }

  .camp4 {
    z-index: 25;
    position: absolute;
    bottom: 100%;
    left: 67.5%;
    width: 80px;
    height: 80px;
    -webkit-transform: skew(27deg);
    -moz-transform: skew(27deg);
    -o-transform: skew(27deg);
    background: #663d00;
    border-radius: 10%;
    opacity: 0.6;
  }

  .mountain1 {
    z-index: 5;
    position: absolute;
    bottom: 90.5%;
    left: 30%;
    width: 0;
    height: 0;
    border-left: 80px solid transparent;
    border-bottom: 200px solid #40642c;
  }

  .mountain2 {
    z-index: 5;
    position: absolute;
    bottom: 90.5%;
    left: 46%;
    width: 0;
    height: 0;
    border-right: 80px solid transparent;
    border-bottom: 200px solid #222;
  }

  .mountain3 {
    z-index: 2;
    position: absolute;
    bottom: 90.5%;
    left: 80.4%;
    width: 0;
    height: 0;
    border-right: 80px solid transparent;
    border-bottom: 200px solid #222;
  }

  .mountain4 {
    z-index: 2;
    position: absolute;
    bottom: 90.5%;
    left: 65%;
    width: 0;
    height: 0;
    border-left: 80px solid transparent;
    border-bottom: 200px solid #333;
  }

  .mountain5 {
    z-index: 1;
    position: absolute;
    bottom: 592%;
    left: 48%;
    width: 0;
    height: 0;
    border-left: 80px solid transparent;
    border-right: 80px solid transparent;
    border-bottom: 100px solid #111;
  }

  .moon {
    position: absolute;
    bottom: 3000%;
    left: 5%;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 4px 6px 0px #7cb45b;
    animation: moon 2s infinite linear;
  }

  /* .light {
    position: relative;
    top: -30%;
    left: -30%;
    width: 200%;
    height: 200%;
    background: #eee;
    opacity: 0.5;
    border-radius: 50%;
  }

  .light2 {
    position: relative;
    top: -330%;
    left: -130%;
    width: 400%;
    height: 400%;
    background: #fff;
    opacity: 0.2;
    border-radius: 50%;
  }

  .light3 {
    position: relative;
    top: -830%;
    left: -230%;
    width: 600%;
    height: 600%;
    background: #fff;
    opacity: 0.1;
    border-radius: 50%;
  } */

  .stars {
    z-index: 1;
    position: absolute;
    bottom: 2500%;
    left: 10%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffd500;
    animation: moon 3s infinite linear;
  }

  .stars2 {
    z-index: 1;
    position: absolute;
    bottom: 1800%;
    left: 35%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ffd500cb;
    animation: moon 3s infinite linear;
  }

  .stars3 {
    z-index: 1;
    position: absolute;
    bottom: 1500%;
    left: 4%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffd500;
    animation: moon 3s infinite linear;
  }

  .stars4 {
    z-index: 1;
    position: absolute;
    bottom: 2300%;
    left: 40%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ddd;
    animation: moon 3s infinite linear;
  }

  .smoke {
    z-index: 30;
    position: absolute;
    bottom: 1000%;
    left: 20%;
    width: 5px;
    height: 10px;
    border-radius: 25%;
    background: #994d00;
    opacity: 0.6;
    animation: bounce 2.5s infinite linear;
  }

  .smoke1 {
    z-index: 30;
    position: absolute;
    bottom: 800%;
    left: 17%;
    width: 5px;
    height: 10px;
    border-radius: 25%;
    background: #994d00;
    animation: bounce 2.5s infinite linear;
  }

  .smoke2 {
    z-index: 30;
    position: absolute;
    bottom: 1100%;
    left: 17%;
    width: 5px;
    height: 10px;
    border-radius: 25%;
    background: #994d00;
    opacity: 0.6;
    animation: bounce 2.5s infinite linear;
  }

  .smoke3 {
    z-index: 30;
    position: absolute;
    bottom: 1300%;
    left: 20%;
    width: 5px;
    height: 5px;
    border-radius: 25%;
    background: #994d00;
    opacity: 0.48;
    animation: bounce 2.5s infinite;
  }

  .smoke4 {
    z-index: 30;
    position: absolute;
    bottom: 1400%;
    left: 17%;
    width: 5px;
    height: 5px;
    border-radius: 25%;
    background: #994d00;
    opacity: 0.44;
    animation: bounce 3.5s infinite linear;
  }

  .cloud {
    z-index: 100;
    position: absolute;
    bottom: 1500%;
    left: 57%;
    width: 40px;
    height: 10px;
    background: #fff;
    border-radius: 15px;
    opacity: 0.7;
    animation: float 1.5s infinite linear;
  }

  .cloud1 {
    z-index: 100;
    position: absolute;
    bottom: 1400%;
    left: 51%;
    width: 40px;
    height: 10px;
    background: #fff;
    border-radius: 15px;
    opacity: 0.7;
    animation: float 1.5s infinite linear;
  }

  .cloud2 {
    z-index: 100;
    position: absolute;
    bottom: 1500%;
    left: 77%;
    width: 40px;
    height: 10px;
    background: #fff;
    border-radius: 15px;
    opacity: 0.7;
    animation: float 1.5s infinite linear;
  }

  .cloud3 {
    z-index: 100;
    position: absolute;
    bottom: 1900%;
    left: 48%;
    width: 40px;
    height: 10px;
    background: #fff;
    border-radius: 15px;
    opacity: 0.7;
    animation: float 1.5s infinite linear;
  }

  @keyframes bg {
    0% {
      background: #aab45b;
    }
    50% {
      background: #7cb45b;
    }
    100% {
      background: #aab45b;
    }
  }

  @keyframes moon {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes bounce {
    0% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
    }
    100% {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
      opacity: 0;
    }
  }
  @keyframes dropAnimation {
    from {
      opacity: 0; /* 초기 투명도: 완전히 투명한 상태 */
    }
    to {
      opacity: 1; /* 최종 투명도: 완전히 투명하지 않은 상태 */
    }
  }
`;
