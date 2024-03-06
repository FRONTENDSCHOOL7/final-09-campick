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

export default React.memo(function UserPostList({ data, setUserPosts }) {
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
        <ListBtn
          liston={`${listView}`}
          onClick={handleListView}
          aria-label="게시물 리스트 보기 버튼"
        />
        <AlbumBtn
          albumon={`${albumView}`}
          onClick={handleAlbumView}
          aria-label="게시물 앨범 보기 버튼"
        />
      </PostHeader>
      {listView ? (
        <section>
          {data.post &&
            data.post.map(item => (
              <PostItem
                key={item.id}
                data={item}
                commentCount={item.commentCount}
                location={item && JSON.parse(item.content).location}
                setUserPosts={setUserPosts}
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
