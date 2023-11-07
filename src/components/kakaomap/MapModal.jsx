import React, { useState } from 'react';
import { LabelStyle, Submitbutton } from '../form/form.style';
import { AddressInputStyle, CampSiteAddressIsNull, WrapperMap } from './MapModal.style';
import Kakaomap from './Kakaomap';
import { WrapperMyCampsiteInput } from '../../pages/myCampsiteRegister/MyCampsiteRegister.style';

export default function MapModal({isOpen, closeModal, onAddressSelected}) {
  const [address, setAddress] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");

  const handleModalClick = (e) => {
    e.stopPropagation(); 
    // 버블링 방지.
    // 모달 눌러도 화면 꺼지지 않게.
}

  const onChange = (e) => {
    setAddress(e.target.value);
  }

  const handleSelectButtonClick = () => {
    if(address.trim() === "") {
      alert("캠핑장 위치를 입력해주세요");
      return;
    }
    onAddressSelected(selectedAddress);  // 선택한 주소를 부모 컴포넌트로 전송
    closeModal();
  };

  return (
    <WrapperMap onClick={handleModalClick}
      style={{ display: isOpen ? "block" : "none" }}>
      <WrapperMyCampsiteInput>
      <LabelStyle htmlFor='campsite-register-map-input'>캠핑장 이름</LabelStyle>
      <AddressInputStyle
        id = "campsite-register-map-input"
        placeholder = '찾고자하는 캠핑장 이름을 입력해주세요'
        value={address}
        onChange={onChange}
      />
      </WrapperMyCampsiteInput>
      {address.trim() !== '' ? <Kakaomap searchPlace={address} onSelectedAddress={setSelectedAddress}/>:<CampSiteAddressIsNull>캠핑장 이름을 입력해주세요</CampSiteAddressIsNull>}
      <Submitbutton 
      onClick={handleSelectButtonClick} 
      style={{
        bottom: "0",
      }}>선택하기</Submitbutton>
    </WrapperMap>
  )
}
