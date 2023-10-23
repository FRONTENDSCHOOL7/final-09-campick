export const homefeedApi = async token => {
  const reqUrl = "https://api.mandarin.weniv.co.kr/post/feed";

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
    console.log("Api 응답 실패", error);
  }
};
