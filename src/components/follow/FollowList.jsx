import React from "react";
import FollowListItem from "./FollowListItem";
import { FollowListWrap } from "./followListItem.style";
export default function FollowList({ data, accountUsername, followPage }) {
  return (
    <FollowListWrap>
      {data &&
        data.map(item => (
          <FollowListItem
            key={item._id}
            data={item}
            accountUsername={accountUsername}
            followPage={followPage}
          />
        ))}
    </FollowListWrap>
  );
}
