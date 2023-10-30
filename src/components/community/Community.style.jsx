import styled from "styled-components";

export const TextWithIcon = styled.div`
  position: relative; // 상대 위치로 설정
  z-index: 30; // 내용을 앞으로 가져오기
  display: flex;
  align-items: center;
  justify-content: flex-start; // 텍스트를 왼쪽으로 정렬
  margin-left: 9px;
  margin-top: 155px;
`;
export const CommunityImageContainer = styled.div`
  position: relative; // 상대 위치로 설정
  display: flex;
  width: 170px;
  /* height: ${() => `${Math.floor(Math.random() * 41) + 160}px`}; */
  height: 185px;
  color: #fff;

  border-radius: 10px;
  overflow: hidden; // 자식 요소가 부모 요소를 벗어나지 않도록 설정
  margin-bottom: 20px;
  transition: transform 0.4s, box-shadow 0.4s;

  &:hover {
    transform: scale(1.05); // 더 부드러운 확대
    transition: transform 0.4s;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageurl});
  background-size: cover;
  position: absolute; // 절대 위치로 설정
  top: 0;
  left: 0;
  z-index: 10; // 배경 이미지를 앞으로 가져오기
`;

export const GradientOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute; // 절대 위치로 설정
  top: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(238, 238, 238, 0) 62.5%,
    rgba(6, 6, 6, 0.626) 91.67%
  );
  background-blend-mode: multiply;
  object-fit: cover;
  z-index: 20; // 그라데이션을 앞으로 가져오기
`;

export const PointIcon = styled.img`
  margin-right: 3px;
  width: 8px;
  height: 10px;
  margin-bottom: 1px;
`;

export const CommunityPostButton = styled.div`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

export const communityPostLink = {
  textDecoration: "none",
  color: "blue",
};

export const communityPostImage = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

export const Address = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
