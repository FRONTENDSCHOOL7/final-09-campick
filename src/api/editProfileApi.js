export const editprofile = async user => {
  const baseUrl = "https://api.mandarin.weniv.co.kr";
  const reqPath = "/user";
  const reqUrl = baseUrl + reqPath;
  try {
    const res = await fetch(reqUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const json = await res.json();
    return json;
  } catch (error) {
    console.error("프로필 수정 실패", error);
  }
};
