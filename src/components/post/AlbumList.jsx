import React from "react";
import styled from "styled-components";
const Img = styled.img`
  width: 114px;
  height: 114px;
  border-radius: 10px;
  object-fit: cover;
`;
export default function AlbumList({ data }) {
  return <Img src={data.image}></Img>;
}
