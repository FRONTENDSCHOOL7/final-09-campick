import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 0.5px solid #dbdbdb;
  padding: 23px 0 32px 0;
`;

export const WrapContents = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ProductTitle = styled.h1`
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 9px 30px;
`;

export const WrapSpan = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
export const ProductName = styled.span`
  font-size: 14px;
  margin: 24px 0 5px 0;
  width: 10rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const ProductPrice = styled.span`
  font-size: 14px;
  font-weight: 500;

  color: #7cb45b;
`;
export const ProductLocation = styled.span`
  font-size: 12px;
  margin: 12px 0 12px 0;
  width: 10rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const ProductImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 147px;
  height: 125px;
  border-radius: 8px;
  object-fit: cover;
`;

export const WrapProductTag = styled.div``;
export const ProductTag = styled.span`
  font-size: 10px;
  color: #7cb45b;
  border-radius: 10px;
  border: solid 1px #7cb45b;
  padding: 5px;
  margin-right: 5px;
`;
