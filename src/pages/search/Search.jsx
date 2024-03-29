import React, { useEffect, useState } from "react";
import {
  SearchResultAccountName,
  SearchResultAccountWrapper,
  SearchResultLi,
  SearchResultProfileImg,
  SearchResultUserName,
  SearchResultWrapper,
  SearchNotice,
  NoticeImg,
  NoticeText,
  SeeMoreBtn,
} from "./Search.style";
import { searchUser } from "../../api/searchUserApi";
import { useNavigate } from "react-router-dom";
import defaultProfileImage from "../../assets/image/profile-default-image.jpg";
import HeaderSearch from "../../components/header/HeaderSearch";
import bus from "../../assets/icon/favicon.png";
import { Helmet } from "react-helmet-async";
export default function Search() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  // input에 검색어를 입력하면 호출되는 핸들러
  const handleInputChange = e => {
    setSearchKeyword(e.target.value);
    setPage(1); // 검색 키워드 상태 업데이트
  };

  const navigate = useNavigate();
  useEffect(() => {
    let timer;
    timer = setTimeout(async () => {
      if (searchKeyword) {
        const results = await searchUser(searchKeyword);
        setSearchResults(results);
        console.log("렌더링");
      }
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [searchKeyword]);

  const handleSeeMoreUser = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Helmet>
        <title>Campick | 검색</title>
      </Helmet>
      <HeaderSearch handleInputChange={handleInputChange} />
      <SearchResultWrapper>
        {searchKeyword.length > 0 ? (
          searchResults.slice(0, page * 10).map((data, id) => {
            return (
              <SearchResultLi
                key={id}
                onClick={() => navigate(`/profile/${data.accountname}`)}
              >
                <SearchResultProfileImg
                  src={data.image}
                  alt="프로필 이미지"
                  onError={e => {
                    e.target.onError = null;
                    e.target.src = defaultProfileImage;
                  }}
                />

                <SearchResultAccountWrapper>
                  <SearchResultUserName>{data.username}</SearchResultUserName>
                  <SearchResultAccountName>
                    @{data.accountname}
                  </SearchResultAccountName>
                </SearchResultAccountWrapper>
              </SearchResultLi>
            );
          })
        ) : (
          <SearchNotice>
            <NoticeImg src={bus} />
            <NoticeText>유저를 검색해 팔로우 해보세요!</NoticeText>
          </SearchNotice>
        )}
        {searchKeyword.length > 0 && searchResults.length === 0 && (
          <SearchNotice>
            <NoticeImg src={bus} />
            <NoticeText>유저를 찾을수 없어요!</NoticeText>
          </SearchNotice>
        )}
        {searchKeyword.length > 0 && searchResults.length > page * 10 && (
          <SeeMoreBtn onClick={handleSeeMoreUser}>더보기</SeeMoreBtn>
        )}
      </SearchResultWrapper>
    </>
  );
}
