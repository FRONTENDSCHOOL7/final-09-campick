import React, { useState } from 'react'
import { Submitbutton } from '../form/form.style'
import { AddressInputStyle, WrapperMap } from './MapModal.style'
import Kakaomap from './Kakaomap'

export default function MapModal({isOpen,closeModal}) {
  const [address, setAddress] = useState("")

  const onChange = (e)=>{
    setAddress(e.target.value)
  }
  
  return (
    <WrapperMap style = {{display: isOpen ? "block":"none"}}>
      <AddressInputStyle
      placeholder='찾고자하는 캠핑장 이름을 입력해주세요'
      value={address}
      onChange={onChange}/>
      <Kakaomap searchPlace={address}/>
      <Submitbutton onClick={closeModal}>선택하기</Submitbutton>
    </WrapperMap>
  )
}
