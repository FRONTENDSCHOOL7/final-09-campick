export const myInfo = async () => {
  const reqUrl = "https://api.mandarin.weniv.co.kr/user/myinfo";
  try {
    const res = await fetch(reqUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const json = await res.json();
    return json.user;
  } catch (error) {
    console.error("Api 응답 실패", error);
  }
};
