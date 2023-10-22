import styled from "styled-components";

export const WrapperProfileSetup = styled.div`
  width: 100%;
  justify-content: center;
  box-sizing: border-box;
  padding: 54px 34px 0px 34px;
`;

export const DescriptionText = styled.p`
  display: block;
  text-align: center;
  font-size: 14px;
  color: #767676;
  margin-bottom: 30px;
`;

export const Upload = styled.div`
  width: 110px;
  height: 110px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;

export const ImageInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  z-index: 1;
`;

export const ProfileImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ImageButton = styled.img`
  width: 36px;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
`;

export const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const LabelStyle = styled.label`
  color: #767676;
  font-size: 12px;
`;

export const LabelStyleImg = styled.label`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

export const ToastContainer = styled.div`
  position: absolute;
  top: 45px;
  right: 20px;
  border: 1px solid #dbdbdb;
  padding: 6px;
  border-radius: 3px;
  color: #666;
  background-color: #ffff;
  display: flex;
  align-items: center;
`;

export const ToastMsg = styled.span`
  font-size: 12px;
  color: #333;
  line-height: 18px;
`;

export const ToastMsgBold = styled.span`
  color: #81d8d0;
  font-weight: bold;
`;

export const ToastIcon = styled.span`
  margin-left: -3px;
  margin-bottom: 3px;
`;
