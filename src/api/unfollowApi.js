export const unfollow = async accountname => {
  const reqUrl = `https://api.mandarin.weniv.co.kr/profile/${accountname}/unfollow`;
  try {
    await fetch(reqUrl, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
    });
  } catch (error) {
    console.error("Api 응답 실패");
  }
};
