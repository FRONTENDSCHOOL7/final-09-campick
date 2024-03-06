import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { CompleteToast } from "../../components/toast/Toast";
import KakaoMapMain from "../../components/kakaomap/KakaomapMain";
import { Submitbutton } from "../../components/form/Form.style";
import { ProductTag } from "../../components/campsiteFeed/CampsiteFeed.style";
import {
  ModalWrap,
  ProductImg,
  ProductName,
  ProfileUsername,
  ProfileAccountname,
  ProductTagWrap,
  ProductProfileWrapper,
  ProductPrice,
  SwiperWrapper,
} from "./ReservationModal.style";
import { productDetail } from "../../api/productDetailApi";
export default function ReservationModal({ productId }) {
  const [data, setData] = useState("");
  const [showReservationToast, setShowReservationToast] = useState(false);
  const [imageHeight, setImageHeight] = useState(0);
  // 이미지 엘리먼트의 참조를 생성합니다.
  const imageRef = useRef(null);
  // 이미지가 로드되면 높이를 상태 변수에 설정하는 함수
  const handleImageLoaded = () => {
    const height = imageRef.current.clientHeight;
    setImageHeight(height); // 이미지의 높이를 상태 변수에 저장
  };

  useEffect(() => {
    const getProductData = async () => {
      const res = await productDetail(productId);
      setData(res);
    };
    getProductData();
  }, [productId]);

  const onClick = async e => {
    e.preventDefault();
    try {
      setShowReservationToast(true);
      setTimeout(() => {
        setShowReservationToast(false);
      }, 1000);
    } catch (error) {
      console.error("예약 실패");
    }
  };

  return (
    <ModalWrap
      role="dialog"
      aria-labelledby="캠핑장 자세히보기"
      aria-describedby="캠핑장에 대한 정보와 이미지를 볼 수 있고 채팅과 예약 버튼을 통해 캠핑장을 예약할 수 있습니다."
    >
      <ProductProfileWrapper>
        <ProfileUsername>
          {data && data.author.username}님의 캠핑장
        </ProfileUsername>
        <ProfileAccountname>
          @ {data && data.author.accountname}
        </ProfileAccountname>
      </ProductProfileWrapper>
      <SwiperWrapper>
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Navigation]}
          style={{ maxHeight: "300px" }}
        >
          <SwiperSlide>
            <ProductImg
              ref={imageRef}
              src={data && data.itemImage}
              onLoad={handleImageLoaded}
            />
          </SwiperSlide>
          <SwiperSlide>
            <KakaoMapMain
              address={data && JSON.parse(data.itemName).location}
              mapheight={imageHeight}
            />
          </SwiperSlide>
        </Swiper>
      </SwiperWrapper>
      <ProductProfileWrapper>
        <ProductName>{data && JSON.parse(data.itemName).name}</ProductName>
        <ProductPrice>{data && data.price.toLocaleString()}원 ~</ProductPrice>
        <ProductTagWrap>
          {data &&
            JSON.parse(data.itemName).labels.map(label => (
              <ProductTag key={label}>{label}</ProductTag>
            ))}
        </ProductTagWrap>
      </ProductProfileWrapper>
      {data && (
        <div style={{ padding: "10px" }}>
          <Link to="/reservation/chat" state={{ data }}>
            <Submitbutton style={{ marginTop: "5px" }}>
              채팅으로 캠핑장 문의하기
            </Submitbutton>
          </Link>
          <Submitbutton onClick={onClick} style={{ marginTop: "5px" }}>
            캠핑장 예약하기
          </Submitbutton>
          <CompleteToast
            showCompleteToast={showReservationToast}
            text={"예약"}
          />
        </div>
      )}
    </ModalWrap>
  );
}
