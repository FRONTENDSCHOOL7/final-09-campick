export const accountNameValid = async accountname => {
  const baseUrl = "https://api.mandarin.weniv.co.kr";
  const reqPath = "/user/accountnamevalid";
  const reqUrl = baseUrl + reqPath;
  try {
    const res = await fetch(reqUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(accountname),
    });
    const json = await res.json();

    return json;
  } catch (error) {
    console.error("계정 ID 검증 실패", error);
  }
  return { accountname };
};
