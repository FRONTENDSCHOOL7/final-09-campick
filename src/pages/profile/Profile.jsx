import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { myInfo } from "../../api/myInfoApi";
import { userInfo } from "../../api/userInfoApi";
import ProfileCard from "../../components/userProfile/ProfileCard";
export default function Profile() {
  const [data, setData] = useState("");
  const [postData, setPostData] = useState("");
  const { accountUsername } = useParams();

  useEffect(() => {
    if (accountUsername) {
      const getUserInfo = async () => {
        const res = await userInfo(accountUsername);
        setData(res);
      };
      getUserInfo();
    } else {
      const getMyInfo = async () => {
        const res = await myInfo();
        setData(res);
      };
      getMyInfo();
    }
  }, [accountUsername]);

  return (
    <div>
      <ProfileCard data={data} accountUsername={accountUsername} />
    </div>
  );
}
