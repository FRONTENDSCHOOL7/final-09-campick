import styled from "styled-components";

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
  z-index: 1000;
`;

export const ToastMsg = styled.span`
  font-size: 12px;
  color: #333;
  line-height: 18px;
`;

export const ToastMsgBold = styled.span`
  color: #7cb45b;
  font-weight: bold;
`;
