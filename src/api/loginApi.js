export const api = () => {
  const baseUrl = "https://api.mandarin.weniv.co.kr";

  const login = async (email, password) => {
    const reqPath = "/user/login";
    const reqUrl = baseUrl + reqPath;
    const loginData = {
      user: {
        email: email,
        password: password,
      },
    };

    try {
      const res = await fetch(reqUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const json = await res.json();

      return json;
    } catch (error) {
      console.error("API 응답에 실패하였습니다.", error);
    }
  };
  return { login };
};
