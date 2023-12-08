import React from "react";
import { Link } from "react-router-dom";
import { AlbumImg } from "./Post.style";

export default function AlbumList({ data }) {
  return (
    <Link to={`../community/${data.id}`}>
      <AlbumImg src={data.image.split(",")[0]} />
    </Link>
  );
}
