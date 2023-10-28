import React, { useState } from "react";
import {
  FileUploadContainer,
  GoBackButton,
  HiddenFileInput,
  UploadButtonText,
  WrapperLabel,
  WrapperMyCampsiteInput,
  WrapperMyCampsiteRegister,
} from "./MyCampsiteRegister.style";
import {
  Incorrect,
  InputStyle,
  Label,
  LabelStyle,
  Submitbutton,
} from "../../components/form/form.style";
import arrow from "../../assets/icons/arrow-left.svg";
import MapModal from "../../components/kakaomap/MapModal";
import { ModalBackdrop } from "../../components/kakaomap/MapModal.style";
import { Helmet } from "react-helmet-async";
import { campsiteregister } from "../../api/campsiteregisterApi";
import imageValidation from "../../imageValidation";
import {
  ToastContainer,
  ToastMsg,
  ToastMsgBold,
} from "../profileSetup/profileSetup.style";
import { Header } from "../../components/header/Header.style";
import { useNavigate } from "react-router-dom";

export default function MyCampsiteRegister() {
  let [price, setPrice] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [registerLink, setRegisterLink] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedLabels, setSelectedLabels] = useState([]);
  const [showSizeOverToast, setShowSizeOverToast] = useState(false);
  const [showRegisterCompleteToast, setShowRegisterCompleteToast] =
    useState(false);
  const [showWrongExtensionToast, setShowWrongExtensionToast] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [warnings, setWarnings] = useState({
    image: null,
    companyName: null,
    price: null,
    location: null,
    registerLink: null,
    labels: null,
  });
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddressSelected = selected => {
    // 선택된 주소 받는 함수
    if (selected && selected.address_name) {
      setSelectedAddress(selected);
      setLocation(selected.address_name);
      setCompanyName(selected.place_name);
      setRegisterLink(selected.place_url);
    }
  };
  const formatCurrency = value => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  function validation(e) {
    const value = e.target.value;
    switch (e.target.id) {
      case "campsite-register-price":
        // 숫자만 입력되도록 검사
        const newValue = e.target.value.replace(/[^0-9]/g, "");
        setPrice(formatCurrency(newValue));
        break;
      case "campsite-register-company-name":
        setCompanyName(value);
        break;
      case "campsite-register-location":
        setLocation(value);
        break;
      case "campsite-register-register-link":
        setRegisterLink(value);
        break;
      default:
        break;
    }
  }
  const WrongExtensionToast = () => (
    <>
      {showWrongExtensionToast && (
        <ToastContainer>
          <ToastMsg>
            <ToastMsgBold>이미지</ToastMsgBold>만 업로드 해주세요!
          </ToastMsg>
        </ToastContainer>
      )}
    </>
  );

  const RegisterCompleteToast = () => (
    <>
      {showRegisterCompleteToast && (
        <ToastContainer>
          <ToastMsg>
            <ToastMsgBold>캠핑장 등록</ToastMsgBold>이 완료되었습니다.
          </ToastMsg>
        </ToastContainer>
      )}
    </>
  );

  const SizeOverToast = () => (
    <>
      {showSizeOverToast && (
        <ToastContainer>
          <ToastMsg>
            <ToastMsgBold>10MB</ToastMsgBold>이하의 파일만 업로드 해주세요!
          </ToastMsg>
        </ToastContainer>
      )}
    </>
  );

  const handleImageInputChange = async e => {
    imageValidation(
      e,
      1,
      150,
      setSelectedImage,
      setShowSizeOverToast,
      setShowWrongExtensionToast,
    );
  };

  const handleLabelClick = label => {
    if (selectedLabels.includes(label)) {
      // 라벨이 이미 선택되어 있으면 배열에서 제거
      setSelectedLabels(prevLabels => prevLabels.filter(l => l !== label));
    } else {
      // 라벨이 선택되어 있지 않으면 배열에 추가
      setSelectedLabels(prevLabels => [...prevLabels, label]);
    }
  };

  async function handleSubmitButton() {
    // 동기 처리
    let newWarnings = {};

    if (!selectedImage) newWarnings.image = "이미지를 업로드해주세요.";
    if (!companyName) newWarnings.companyName = "업체명을 입력해주세요.";
    if (!price) newWarnings.price = "가격을 입력해주세요.";
    if (!location) newWarnings.location = "위치를 입력해주세요.";
    if (!registerLink) newWarnings.registerLink = "예약 링크를 입력해주세요.";
    if (selectedLabels.length === 0)
      newWarnings.labels = "캠핑장 분위기를 하나 이상 선택해주세요.";

    setWarnings(newWarnings);

    if (!Object.values(newWarnings).some(w => w)) {
      price = parseInt(price.replaceAll(",", ""));
      // 정수형으로 변환 후 전달
      const formData = new FormData();
      formData.append("image", selectedImage);

      try {
        const res = await campsiteregister(
          companyName,
          location,
          selectedLabels,
          price,
          registerLink,
          selectedImage,
        );

        if (res.hasOwnProperty("product")) {
          console.log("캠핑장 등록 성공", res);
          setShowRegisterCompleteToast(true);
          setTimeout(() => {
            setShowRegisterCompleteToast(false);
            navigate(-1);
          }, 1000);
        } else {
          console.log("캠핑장 등록 실패", res.message);
        }
      } catch (error) {
        console.error("API 호출에서 오류 발생:", error);
      }
    } else {
      alert("모든 항목을 입력해주세요");
    }
  }

  function goBack() {
    window.history.back();
  }

  return (
    <>
      <Helmet>
        <title>Campick | 캠핑장 등록</title>
      </Helmet>
      <Header>
        <GoBackButton src={arrow} alt="뒤로가기" onClick={goBack} />
        <Submitbutton
          onClick={handleSubmitButton}
          style={{ width: "90px", height: "32px", margin: "0" }}
        >
          저장
        </Submitbutton>
      </Header>
      <WrapperMyCampsiteRegister>
        {isModalOpen && <ModalBackdrop onClick={closeModal} />}{" "}
        {/* Modal이 열렸을 때만 배경 렌더링 */}
        <MapModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          onAddressSelected={handleAddressSelected}
        />
        <WrapperMyCampsiteInput>
          <LabelStyle>이미지 등록</LabelStyle>
          <FileUploadContainer
            onClick={() => document.getElementById("imageUpload").click()}
            $previewImage={selectedImage}
          >
            <UploadButtonText $previewImage={selectedImage}>
              클릭해서 이미지 업로드 하기
            </UploadButtonText>
            <HiddenFileInput
              id="imageUpload"
              type="file"
              onChange={handleImageInputChange}
            />
          </FileUploadContainer>
          {warnings.image && <Incorrect>{warnings.image}</Incorrect>}
        </WrapperMyCampsiteInput>
        <WrapperMyCampsiteInput>
          <LabelStyle htmlFor="campsite-register-company-name">
            업체명
          </LabelStyle>
          <InputStyle
            id="campsite-register-company-name"
            type="text"
            value={companyName}
            onChange={validation}
            required
            placeholder="2-15자 이내여야 합니다."
          />
          {warnings.companyName && (
            <Incorrect>{warnings.companyName}</Incorrect>
          )}
        </WrapperMyCampsiteInput>
        <WrapperMyCampsiteInput>
          <LabelStyle htmlFor="campsite-register-price">가격</LabelStyle>
          <InputStyle
            id="campsite-register-price"
            type="text"
            value={price}
            onChange={validation}
            required
            placeholder="숫자만 입력가능 합니다."
          />
          {warnings.price && <Incorrect>{warnings.price}</Incorrect>}
        </WrapperMyCampsiteInput>
        <WrapperMyCampsiteInput>
          <LabelStyle htmlFor="campsite-register-location">위치</LabelStyle>
          <InputStyle
            id="campsite-register-location"
            type="text"
            value={location}
            onChange={validation}
            placeholder="위치 입력"
          />
          {warnings.location && <Incorrect>{warnings.location}</Incorrect>}
        </WrapperMyCampsiteInput>
        <WrapperMyCampsiteInput>
          <LabelStyle htmlFor="campsite-register-register-link">
            예약 링크
          </LabelStyle>
          <InputStyle
            id="campsite-register-register-link"
            type="text"
            value={registerLink}
            onChange={validation}
            placeholder="URL을 입력해주세요"
          />
          {warnings.registerLink && (
            <Incorrect>{warnings.registerLink}</Incorrect>
          )}
        </WrapperMyCampsiteInput>
        <Submitbutton
          onClick={openModal}
          style={{ margin: "0", padding: "13px 0 13px 0" }}
        >
          지도에서 위치 선택하기
        </Submitbutton>
        <WrapperMyCampsiteInput>
          <LabelStyle>캠핑장 태그 선택</LabelStyle>
          <WrapperLabel>
            {[
              "가족",
              "커플",
              "축제",
              "반려견 동반",
              "힐링",
              "아늑함",
              "활발함",
              "문화유적",
              "조용한",
              "시끌벅적",
              "깨끗한",
              "익스트림",
              "별보기 좋은",
              "수영장 있는",
              "계곡이 있는",
              "캠핑카",
              "봄",
              "여름",
              "가을",
              "겨울",
              "주차 편함",
              "바다가 보이는",
            ].map(label => (
              <Label
                key={label}
                onClick={() => handleLabelClick(label)}
                className={selectedLabels.includes(label) ? "selected" : ""}
              >
                {label}
              </Label>
            ))}
          </WrapperLabel>
          {warnings.labels && <Incorrect>{warnings.labels}</Incorrect>}
        </WrapperMyCampsiteInput>
        <RegisterCompleteToast />
        <WrongExtensionToast />
        <SizeOverToast />
      </WrapperMyCampsiteRegister>
    </>
  );
}
