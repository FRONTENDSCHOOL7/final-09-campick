export const follow = async accountname => {
  const reqUrl = `https://api.mandarin.weniv.co.kr/profile/${accountname}/follow`;
  try {
    await fetch(reqUrl, {
      method: "Post",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
    });
  } catch (error) {
    console.error("Api 응답 실패");
  }
};
