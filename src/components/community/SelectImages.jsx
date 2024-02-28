import React from "react";
import {
  HiddenFileInput,
  WrapperMyCampsiteInput,
} from "../../pages/myCampsiteRegister/MyCampsiteRegister.style";
import { Incorrect, LabelStyle } from "../form/Form.style";
import {
  DeleteButton,
  ImageView,
  ImagesInputWrapper,
  ImagesLi,
  ImagesUl,
  LabelButton,
  UploadImagesIcon,
} from "../../pages/community/CommunityPost.style";
import imagesuploadimage from "../../assets/icons/icon-image-gallery.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

export default function SelectImages({
  warnings,
  images,
  onUpload,
  onDelete,
  setShowWrongExtensionToast,
}) {
  const handleImageInputChange = e => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    onUpload(e.target.files, e.target.files.length, setShowWrongExtensionToast);

    e.target.value = "";
  };

  return (
    <WrapperMyCampsiteInput>
      <LabelStyle>이미지 등록 (최대 3개)</LabelStyle>
      <ImagesInputWrapper>
        <LabelButton htmlFor="imageUpload">
          <UploadImagesIcon src={imagesuploadimage} alt="이미지 업로드" />
        </LabelButton>

        <Swiper
          spaceBetween={10}
          slidesPerView={images.length > 1 ? 2 : 1}
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
        >
          <ImagesUl>
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <ImagesLi>
                  <ImageView
                    src={`https://api.mandarin.weniv.co.kr/${image}`}
                    alt={`등록한 이미지 ${index}`}
                  />
                  <DeleteButton onClick={() => onDelete(index)} />
                </ImagesLi>
              </SwiperSlide>
            ))}
          </ImagesUl>
        </Swiper>
      </ImagesInputWrapper>
      <HiddenFileInput
        id="imageUpload"
        type="file"
        onChange={handleImageInputChange}
        accept="image/*"
        multiple={true}
      />
      {warnings.image && <Incorrect>{warnings.image}</Incorrect>}
    </WrapperMyCampsiteInput>
  );
}
