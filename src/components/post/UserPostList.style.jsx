import styled from "styled-components";
import postListon from "../../assets/icons/icon-post-list-on.svg";
import postListoff from "../../assets/icons/icon-post-list-off.svg";
import postAlbumon from "../../assets/icons/icon-post-album-on.svg";
import postAlbumoff from "../../assets/icons/icon-post-album-off.svg";
export const PostSection = styled.section`
  background-color: #fff;
`;
export const PostHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  padding: 8px 16px;
  border-bottom: 1px solid var(--font-placeholder-color);
`;
export const ListBtn = styled.button`
  background: ${props =>
      props.liston === true ? `url(${postListon})` : `url(${postListoff})`}
    no-repeat;
  padding: 12px;
  cursor: pointer;
`;
export const AlbumBtn = styled.button`
  background: ${props =>
      props.albumon === true ? `url(${postAlbumon})` : `url(${postAlbumoff})`}
    no-repeat;
  padding: 12px;
  cursor: pointer;
`;
export const AlbumSection = styled.section`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(114px, 114px));
  padding: 20px 16px;
`;
