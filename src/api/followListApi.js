export const followList = async (accountname, followPage) => {
  const reqUrl = `https://api.mandarin.weniv.co.kr/profile/${accountname}/${followPage}`;

  try {
    const res = await fetch(reqUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
    });
    const json = await res.json();
    return json;
  } catch (error) {
    console.error("Api 응답 실패", error);
  }
};
