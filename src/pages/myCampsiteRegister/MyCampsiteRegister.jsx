import React, { useState } from 'react'
import { WrapperMyCampsiteRegister } from './MyCampsiteRegister.style'
import { InputStyle, LabelStyle, Submitbutton } from '../../components/form/form.style'
import Kakaomap from '../../components/kakaomap/Kakaomap'
import MapModal from '../../components/kakaomap/MapModal'

export default function MyCampsiteRegister() {
  const [price, setPrice] = useState()
  const [companyName, setCompanyName] = useState('')
  const [location, setLocation] = useState('')
  const [registerLink,setRegisterLink] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header>header</header>
      <WrapperMyCampsiteRegister>
        <LabelStyle>이미지 등록</LabelStyle>
        <image/>

        <LabelStyle htmlFor='campsite-register-company-name'>업체명</LabelStyle>
        <InputStyle 
          id='campsite-register-company-name'
					type='text'
					value={companyName}
					//onChange={validation}
					required
          placeholder='2-15자 이내여야 합니다.'/>

        <LabelStyle htmlFor='campsite-register-price'>가격</LabelStyle>
        <InputStyle 
					id='campsite-register-price'
					type='number'
					value={price}
					//onChange={validation}
					required
          placeholder='숫자만 입력가능 합니다.'/>

        <LabelStyle htmlFor='campsite-register-location'>위치</LabelStyle>
        <Submitbutton onClick={openModal}>지도에서 위치 선택하기</Submitbutton>
        <MapModal isOpen={isModalOpen} closeModal={closeModal}/>
        <InputStyle 
          id = "campsite-register-location"
          type="text"
          value={location}
          placeholder='위치 선택'
        />
        <LabelStyle htmlFor='campsite-register-register-link'>예약 링크</LabelStyle>
        <InputStyle 
          id = "campsite-register-register-link"
          type="text"
          value={registerLink}
          placeholder='URL을 입력해주세요'
        />

        <LabelStyle>캠핑장 분위기</LabelStyle>

      </WrapperMyCampsiteRegister>
    </>
  )
}
