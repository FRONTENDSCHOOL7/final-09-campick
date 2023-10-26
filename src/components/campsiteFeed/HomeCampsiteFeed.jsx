import React, { useEffect, useState } from "react";
import {
  HomeCampSiteList,
  HomeCampSiteTitle,
  HomeCampsiteImg,
  WrapperHomeCampsite,
} from "./HomeCampsiteFeed.style";
import HomeCampsiteItem from "./HomeCampsiteItem";
import { followList } from "../../api/followListApi";
import { productList } from "../../api/productListApi";

export default function HomeCampsiteFeed() {
  /*const [followingList, setFollowingList] = useState("");
  const [productImage, setProductImage] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const accountname = localStorage.getItem("accountname");
    async function getFollowingList() {
      setFollowingList(await followList(accountname, token));
    }
    getFollowingList();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    async function getProduct() {
      followingList &&
        followingList.map(async item => {
          const img = await productList(item.accountname, token);

          img.product.forEach(item => {
            setProductImage(pre => [
              ...pre,
              { id: item.id, img: item.itemImage },
            ]);
          });
        });
    }
    getProduct();
  }, [followingList]);*/

  return (
    <WrapperHomeCampsite>
      <HomeCampSiteTitle>등록된 모든 캠핑장</HomeCampSiteTitle>
      <HomeCampSiteList>
        {/* {productImage &&
          productImage.map(item => (
            <img
              style={{ width: "100px", height: "100px", display: "block" }}
              key={item.id}
              src={item.img}
              alt="이미지"
            />
          ))} */}
        <HomeCampsiteItem />
        <HomeCampsiteItem />
        <HomeCampsiteItem />
      </HomeCampSiteList>
    </WrapperHomeCampsite>
  );
}
