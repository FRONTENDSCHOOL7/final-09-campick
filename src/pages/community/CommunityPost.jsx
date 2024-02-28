import React, { useCallback, useMemo, useState } from "react";
import {
  TextareaStyle,
  WrapperMyCampsiteInput,
  WrapperMyCampsiteRegister,
} from "./CommunityPost.style";
import {
  Incorrect,
  InputStyle,
  LabelStyle,
} from "../../components/form/Form.style";
import MapModal from "../../components/kakaomap/MapModal";
import { ModalBackdrop } from "../../components/kakaomap/MapModal.style";
import { Helmet } from "react-helmet-async";
import { communityPost } from "../../api/communityPostApi";
import HeaderSubmit from "../../components/header/HeaderSubmit";
import {
  SizeOverToast,
  WrongExtensionToast,
} from "../../components/toast/Toast";
import { MapSelectedBtn } from "../myCampsiteRegister/MyCampsiteRegister.style";
import useImagesUpload from "../../hooks/useImagesUpload";
import SelectImages from "../../components/community/SelectImages";

export default function CommunityPost() {
  const [location, setLocation] = useState("");
  const [postText, setPostText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSizeOverToast, setShowSizeOverToast] = useState(false);
  const [showWrongExtensionToast, setShowWrongExtensionToast] = useState(false);
  const { images, onUpload, onDelete } = useImagesUpload();
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

  async function handleSubmitButton() {
    let newWarnings = {};

    if (images.length === 0) newWarnings.image = "이미지를 업로드해주세요.";
    if (!location) newWarnings.location = "위치를 입력해주세요.";
    if (!postText) newWarnings.postText = "게시글을 입력해주세요.";

    setWarnings(newWarnings);
    if (!Object.values(newWarnings).some(w => w)) {
      try {
        let image;
        if (images.length === 0) image = "";
        else {
          console.log(images);
          image = images
            .map(image => `https://api.mandarin.weniv.co.kr/${image}`)
            .join(",");
        }
        const res = await communityPost(postText, image, location);
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
        {isModalOpen && <ModalBackdrop onClick={closeModal} />}
        {/* Modal이 열렸을 때만 배경 렌더링 */}
        <MapModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          onAddressSelected={handleAddressSelected}
        />
        <SelectImages
          warnings={warnings}
          images={images}
          onUpload={onUpload}
          onDelete={onDelete}
          setShowWrongExtensionToast={setShowWrongExtensionToast}
        />
        <MapSelectedBtn onClick={openModal} style={{ margin: "0" }}>
          지도에서 위치 선택하기
        </MapSelectedBtn>
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
