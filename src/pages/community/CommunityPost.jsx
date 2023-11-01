import React, { useState } from "react";
import {
  FileUploadContainer,
  HiddenFileInput,
  TextareaStyle,
  UploadButtonText,
  WrapperMyCampsiteInput,
  WrapperMyCampsiteRegister,
} from "./CommunityPost.style";
import {
  Incorrect,
  InputStyle,
  LabelStyle,
  Submitbutton,
} from "../../components/form/form.style";
import MapModal from "../../components/kakaomap/MapModal";
import { ModalBackdrop } from "../../components/kakaomap/MapModal.style";
import { Helmet } from "react-helmet-async";
import { communityPost } from "../../api/communityPostApi";
import imageValidation from "../../imageValidation";
import HeaderSubmit from "../../components/header/HeaderSubmit";
import {
  SizeOverToast,
  WrongExtensionToast,
} from "../../components/toast/Toast";

export default function CommunityPost() {
  const [location, setLocation] = useState("");
  const [postText, setPostText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSizeOverToast, setShowSizeOverToast] = useState(false);
  const [showWrongExtensionToast, setShowWrongExtensionToast] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [warnings, setWarnings] = useState({
    image: null,
    location: null,
    postText: null,
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddressSelected = selected => {
    // 선택된 주소 받는 함수
    if (selected && selected.address_name) {
      // setSelectedAddress(selected);
      setLocation(selected.address_name);
    }
  };

  function validation(e) {
    const value = e.target.value;
    switch (e.target.id) {
      case "campsite-register-location":
        setLocation(value);
        break;
      case "campsite-register-postText":
        setPostText(value);
        break;
      default:
        break;
    }
  }

  const handleImageInputChange = async e => {
    imageValidation(
      e,
      1,
      320,
      setSelectedImage,
      setShowSizeOverToast,
      setShowWrongExtensionToast,
    );
  };

  async function handleSubmitButton() {
    // 동기 처리
    let newWarnings = {};

    if (!selectedImage) newWarnings.image = "이미지를 업로드해주세요.";
    if (!location) newWarnings.location = "위치를 입력해주세요.";
    if (!postText) newWarnings.postText = "게시글을 입력해주세요.";

    setWarnings(newWarnings);

    if (!Object.values(newWarnings).some(w => w)) {
      const formData = new FormData();
      formData.append("image", selectedImage);

      try {
        const res = await communityPost(postText, selectedImage, location);
        console.log(res);

        if (res.hasOwnProperty("post")) {
          console.log("게시물 등록 성공", res);
          window.history.back(); // 게시물등록 성공시
        } else {
          console.log("게시물 등록 실패", res.message);
        }
      } catch (error) {
        console.error("API 호출에서 오류 발생:", error);
      }
    } else {
      alert("모든 항목을 입력해주세요");
    }
  }

  function autoGrowTextArea(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
    validation(e); // 기존의 validation 함수 호출
  }

  return (
    <>
      <Helmet>
        <title>Campick | 게시물 작성</title>
      </Helmet>
      <HeaderSubmit handleSubmitButton={handleSubmitButton} />

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
        <Submitbutton onClick={openModal} style={{ margin: "0" }}>
          지도에서 위치 선택하기
        </Submitbutton>
        <WrapperMyCampsiteInput>
          <LabelStyle htmlFor="campsite-register-location">캠핑장소</LabelStyle>
          <InputStyle
            id="campsite-register-location"
            type="text"
            value={location}
            onChange={validation}
            placeholder="캠핑장이 어디인지 알려주세요 :)"
          />
          {warnings.location && <Incorrect>{warnings.location}</Incorrect>}
        </WrapperMyCampsiteInput>
        <WrapperMyCampsiteInput>
          <LabelStyle htmlFor="campsite-register-posttext">
            게시글 작성
          </LabelStyle>
          <TextareaStyle
            id="campsite-register-postText"
            value={postText}
            onChange={autoGrowTextArea}
            placeholder="이번 캠핑은 어땠는지 말해줘요 :)"
          />
          {warnings.postText && <Incorrect>{warnings.postText}</Incorrect>}
        </WrapperMyCampsiteInput>
        <WrongExtensionToast
          showWrongExtensionToast={showWrongExtensionToast}
        />
        <SizeOverToast showSizeOverToast={showSizeOverToast} />
      </WrapperMyCampsiteRegister>
    </>
  );
}
