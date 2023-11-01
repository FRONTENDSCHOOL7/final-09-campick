import React, { useState } from "react";
import PostItem from "./PostItem";
import AlbumList from "./AlbumList";
import {
  PostSection,
  PostHeader,
  ListBtn,
  AlbumBtn,
  AlbumSection,
} from "./UserPostList.style";
import { DeletePostToast } from "../toast/Toast";

export default React.memo(function UserPostList({ data, setLender }) {
  const [listView, setListView] = useState(true);
  const [albumView, setAlbumView] = useState(false);
  const handleListView = () => {
    if (!listView) {
      setListView(!listView);
      setAlbumView(!albumView);
    }
  };
  const handleAlbumView = () => {
    if (!albumView) {
      setAlbumView(!albumView);
      setListView(!listView);
    }
  };
  return (
    <PostSection>
      <PostHeader>
        <ListBtn liston={`${listView}`} onClick={handleListView} />
        <AlbumBtn albumon={`${albumView}`} onClick={handleAlbumView} />
      </PostHeader>
      {listView ? (
        <section>
          {data.post &&
            data.post.map(item => (
              <PostItem
                key={item.id}
                data={item}
                commentCount={item.commentCount}
              />
            ))}
        </section>
      ) : (
        <AlbumSection>
          {data.post &&
            data.post.map(item => <AlbumList key={item.id} data={item} />)}
        </AlbumSection>
      )}
    </PostSection>
  );
});
