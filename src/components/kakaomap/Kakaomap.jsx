import React, { useEffect, useRef, useState } from "react";
import {
  ModalMapListItemAddress,
  ModalMapListItemTitle,
  ModalMapListPhoneNumber,
  Pagination,
  ResultList,
  WrapperAddress,
} from "./MapModal.style";

const { kakao } = window;
//함수형 컴포넌트에 인지 시키고 window에서 kakao객체를 뽑아서 사용

export default function Kakaomap({ searchPlace, onSelectedAddress }) {
  const [Places, setPlaces] = useState([]); // 검색 결과 배열에 담아줌.
  const [selectedAddress, setSelectedAddress] = useState("");
  // 해당 주소를 클릭할 때
  const mapRef = useRef(null);
  // map 객체를 저장하기 위한 참조 생성

  function handleAddressClick(item) {
    setSelectedAddress(item); // 지도의 중심을 선택된 위치로 설정
    onSelectedAddress(item); // 선택한 주소를 부모 컴포넌트로 전달

    const position = new kakao.maps.LatLng(item.y, item.x);
    // 애니메이션 효과를 위한 panTo 사용
    mapRef.current.panTo(position);

    // 지도 레벨을 변경하여 줌 인 효과 적용
    setTimeout(() => {
      mapRef.current.setLevel(4); // 지도 레벨 변경하여 줌 인
    }, 300); // 300ms 후에 실행 (이 값은 조절 가능)
  }

  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    //var markers = []

    var container = document.getElementById("map");
    //지도를 담을 영역의 DOM 레퍼런스;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.5665, 126.978), //지도의 중심좌표. 서울 중심.
      level: 5, //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options);
    //지도 생성 및 객체 리턴
    mapRef.current = map; // map 객체를 참조에 저장

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();
        setPlaces([]);

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
        // 페이지 목록 보여주는 displayPagination() 추가
        displayPagination(pagination);
        setPlaces(data);
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert("검색 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }

    // 검색결과 목록 하단에 페이지 번호 표시
    function displayPagination(pagination) {
      var paginationEl = document.getElementById("pagination"),
        fragment = document.createDocumentFragment(),
        i;

      // 기존에 추가된 페이지 번호 삭제
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
      }

      for (i = 1; i <= pagination.last; i++) {
        var el = document.createElement("a");
        el.href = "#";
        el.innerHTML = i;

        if (i === pagination.current) {
          el.className = "on";
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i);
            };
          })(i);
        }

        fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(
          '<div style="padding:7px;font-size:12px;">' +
            place.place_name +
            "</div>",
        );
        infowindow.open(map, marker);
      });
    }
  }, [searchPlace]);

  return (
    <>
      <div
        id="map"
        style={{
          width: "100%",
          height: "300px",
          borderRadius: "10px",
        }}
      ></div>
      <ResultList id="result-list">
        {Places.map((item, i) => (
          <WrapperAddress
            key={i}
            selected={item === selectedAddress}
            onClick={() => handleAddressClick(item)}
          >
            <div>
              <ModalMapListItemTitle selected={item === selectedAddress}>
                {item.place_name}
              </ModalMapListItemTitle>
              <ModalMapListItemAddress selected={item === selectedAddress}>
                <span>
                  주소 : {item.road_address_name || item.address_name}
                </span>
              </ModalMapListItemAddress>
              {item.phone && (
                <ModalMapListPhoneNumber selected={item === selectedAddress}>
                  전화번호 : {item.phone}
                </ModalMapListPhoneNumber>
              )}
            </div>
          </WrapperAddress>
        ))}
        <Pagination id="pagination" />
      </ResultList>
    </>
  );
}
