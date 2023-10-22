import React, { useState } from 'react'
import { WrapperLabel, WrapperMyCampsiteRegister } from './MyCampsiteRegister.style'
import { InputStyle, Label, LabelStyle, Submitbutton } from '../../components/form/form.style'

import MapModal from '../../components/kakaomap/MapModal'

export default function MyCampsiteRegister() {
  const [price, setPrice] = useState()
  const [companyName, setCompanyName] = useState('')
  const [location, setLocation] = useState('')
  const [registerLink,setRegisterLink] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddressSelected = (selected) => {
    // 선택된 주소 받는 함수
    if(selected && selected.address_name){
      setSelectedAddress(selected);
      setLocation(selected.address_name)
      setCompanyName(selected.place_name)
      setRegisterLink(selected.place_url)
    }

  };
  function validation(e) {
  const value = e.target.value;
  switch (e.target.id) {
    case 'campsite-register-price':
      // 숫자만 입력되도록 검사
      if (/^[0-9]*$/.test(value)) {
        setPrice(value);
      }
      break;
    case 'campsite-register-company-name':
      setCompanyName(value);
      break;
    case 'campsite-register-location':
      setLocation(value);
      break;
    case 'campsite-register-register-link':
      setRegisterLink(value);
      break;
    default:
      break;
  }
}
const handleImageUpload = (event) => {
  // 이미지 업로드를 위한 함수
    const file = event.target.files[0];
    if (file) {
        // 선택한 파일을 처리하거나 서버에 업로드
        setPreviewImage(URL.createObjectURL(file));
    }
};



  return (
    <>
      <header>header</header>
      <WrapperMyCampsiteRegister>
        <LabelStyle>이미지 등록</LabelStyle>
        <input type="file" onChange={handleImageUpload} />
        <img src={previewImage} alt="Preview" />
        <Submitbutton onClick={openModal}>지도에서 위치 선택하기</Submitbutton>
        <LabelStyle htmlFor='campsite-register-company-name'>업체명</LabelStyle>
        <InputStyle 
          id='campsite-register-company-name'
					type='text'
					value={companyName}
					onChange={validation}
					required
          placeholder='2-15자 이내여야 합니다.'/>

        <LabelStyle htmlFor='campsite-register-price'>가격</LabelStyle>
        <InputStyle 
					id='campsite-register-price'
					type="number"
					value={price}
					onChange={validation}
					required
          placeholder='숫자만 입력가능 합니다.'/>

        <LabelStyle htmlFor='campsite-register-location'>위치</LabelStyle>

        <MapModal isOpen={isModalOpen} closeModal={closeModal} onAddressSelected={handleAddressSelected}/>
        <InputStyle 
          id = "campsite-register-location"
          type="text"
          value={location}
          onChange={validation}
          placeholder='위치 입력'
        />
        <LabelStyle htmlFor='campsite-register-register-link'>예약 링크</LabelStyle>
        <InputStyle 
          id = "campsite-register-register-link"
          type="text"
          value={registerLink}
          onChange={validation}
          placeholder='URL을 입력해주세요'
        />

        <LabelStyle>캠핑장 분위기</LabelStyle>
        <WrapperLabel>
        <Label>불멍</Label> <Label>아늑함</Label>
        <Label>활발함</Label>
        </WrapperLabel>
      </WrapperMyCampsiteRegister>
    </>
  )
}
