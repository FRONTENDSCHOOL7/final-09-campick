import styled from "styled-components";

export const PostMapWrapper = styled.div`
  display: flex;
  font-weight: 600;
  align-items: center;
  font-size: 13px;
  padding: 7px 0 0 10px;
  cursor: pointer;
  transition: 0.3s;
  transform-origin: left center;
  &:hover{
    transform: scale(1.1);
    transition: 0.3s;
  }
`; 
export const PointBlackIcon = styled.img`
  width : 15px;
  height : 15px;
  margin-right: 5px;
`;