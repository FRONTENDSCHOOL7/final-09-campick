export const userPost = async accountname => {
  const reqUrl = `https://api.mandarin.weniv.co.kr/post/${accountname}/userpost`;
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
