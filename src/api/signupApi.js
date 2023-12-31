export const emailValid = async userEmail => {
  const baseUrl = "https://api.mandarin.weniv.co.kr";
  const reqPath = "/user/emailvalid";
  const reqUrl = baseUrl + reqPath;
  try {
    const res = await fetch(reqUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userEmail),
    });
    const json = await res.json();
    return json;
  } catch (error) {
    console.error("이메일 검증 실패", error);
  }
};

export const signup = async user => {
  const baseUrl = "https://api.mandarin.weniv.co.kr";
  const reqPath = "/user";
  const reqUrl = baseUrl + reqPath;
  try {
    const res = await fetch(reqUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const json = await res.json();
    return json;
  } catch (error) {
    console.error("이메일 검증 실패", error);
  }
};
