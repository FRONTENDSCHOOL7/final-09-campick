export const myInfo = async () => {
  const reqUrl = "https://api.mandarin.weniv.co.kr/user/myinfo";
  try {
    const res = await fetch(reqUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWY1ZWUwYjJjYjIwNTY2Mzc2ZTY0YyIsImV4cCI6MTcwMTczOTk4MiwiaWF0IjoxNjk2NTU1OTgyfQ.QKNZ-L28iBciLX-oc5PI8nx42j320dHhUCNDvpzboNc`,
      },
    });
    const json = await res.json();
    return json.user;
  } catch (error) {
    console.error("Api 응답 실패", error);
  }
};
