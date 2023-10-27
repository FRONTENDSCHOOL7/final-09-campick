import styled from "styled-components";
import point from "../../assets/image/point.png";

export const TextWithIcon = styled.div`
  position: relative; // 상대 위치로 설정
  z-index: 30; // 내용을 앞으로 가져오기
  display: flex;
  align-items: center;
  justify-content: center; // 텍스트를 왼쪽으로 정렬
  margin-left: 9px;
  margin-top: 155px;
  /* padding: 10px; // 내용과 컨테이너 경계 사이의 여백 조절 */
`;
export const CommunityImageContainer = styled.div`
  position: relative; // 상대 위치로 설정
  display: flex;
  width: 170px;
  /* height: ${() => `${Math.floor(Math.random() * 41) + 160}px`}; */
  height: 185px;
  color: #fff;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 10px;
  overflow: hidden; // 자식 요소가 부모 요소를 벗어나지 않도록 설정
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.05); // 더 부드러운 확대
    transition: transform 0.4s;
    ${TextWithIcon} {
      font-size: 13px; // 10px * 1.3 = 13px
      transition: font-size 0.4s;
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageUrl});
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

export const Icon = styled.img`
  margin-right: 3px;
  width: 8px;
  height: 10px;
  margin-bottom: 1px;
`;

const DynamicImageComponent = ({ imageUrl, address }) => {
  return (
    <CommunityImageContainer>
      <BackgroundImage imageUrl={imageUrl} /> <GradientOverlay />
      <TextWithIcon>
        <Icon src={point} alt="icon" /> {address}
      </TextWithIcon>
    </CommunityImageContainer>
  );
};

export default DynamicImageComponent;
