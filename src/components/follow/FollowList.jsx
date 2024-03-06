import React from "react";
import FollowListItem from "./FollowListItem";
import { FollowListWrap } from "./FollowListItem.style";
export default function FollowList({ data }) {
  return (
    <FollowListWrap>
      {data && data.map(item => <FollowListItem key={item._id} data={item} />)}
    </FollowListWrap>
  );
}
