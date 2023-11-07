export const productList = async (accountname, limit) => {
  const reqUrl = `https://api.mandarin.weniv.co.kr/product/${accountname}/?limit=${limit}`;

  try {
    const res = await fetch(reqUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
    });
    const json = await res.json();
    return json.product;
  } catch (error) {
    console.error("Api 응답 실패", error);
  }
};
