import styled from "styled-components";

export const ModalWrap = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 322px;
  height: auto;
  background-color: #fff;
  z-index: 100;
  border-radius: 20px;
  justify-content: center;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`;

export const ProductProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #dbdbdb;
`;

export const ProductName = styled.strong`
  display: block;
  text-align: center;
  margin-top: 5px;
  font-size: 20px;
`;
export const ProductPrice = styled.p`
  display: block;
  text-align: center;
  margin-top: 5px;
  font-size: 17px;
  color : var(--primary-color);
`;

export const ProfileUsername = styled.span`
  margin-bottom: 1px;
  font-size : 13px;
`;
export const ProfileAccountname = styled.span`
  color: var(--font-primary-color);
  margin-top: 3px;
  font-size: 10px;
`;
export const ProductTagWrap = styled.div`
  display: flex;
  gap: 1px;
  flex-wrap: wrap;
  margin-top: 5px;
`;
