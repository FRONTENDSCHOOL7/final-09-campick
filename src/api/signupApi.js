const emailValid = async userEmail => {
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
