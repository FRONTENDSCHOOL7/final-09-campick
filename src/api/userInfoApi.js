export const userInfo = async accountname => {
  const reqUrl = `https://api.mandarin.weniv.co.kr/profile/${accountname}`;
  try {
    const res = await fetch(reqUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
    });
    const json = await res.json();
    return json.profile;
  } catch (error) {
    console.error("Api 응답 실패", error);
  }
};
