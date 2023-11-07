import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Img = styled.img`
  width: 114px;
  height: 114px;
  border-radius: 10px;
  object-fit: cover;
`;
export default function AlbumList({ data }) {
  return <Link to={`../community/${data.id}`}>
    <Img src={data.image.split(",")[0]}/>
    </Link>;
}
