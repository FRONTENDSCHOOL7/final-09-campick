import styled from "styled-components";

export const ProductContainer = styled.div`
  margin: 0 8px 0 8px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px 10px 20px 10px;
  gap: 10px;
  box-sizing: border-box;
  
`;

export const WrapContents = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const ProductTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin-left: 5px;
`;

export const WrapSpan = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  margin-left: 10px;
`;
export const ProductName = styled.span`
  font-size: 14px;
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
  width: 10rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const ProductBtn = styled.button`
  width: 147px;
  height: 125px;
  cursor: pointer;
`;
export const ProductImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 125px;
  border-radius: 8px;
  object-fit: cover;
`;

export const WrapProductTag = styled.div`
  display: flex;
  gap: 1px;
  flex-wrap: wrap;
`;
export const ProductTag = styled.span`
  font-size: 10px;
  color: #7cb45b;
  border-radius: 10px;
  border: solid 1px #7cb45b;
  padding: 5px;
  margin-right: 5px;
`;
