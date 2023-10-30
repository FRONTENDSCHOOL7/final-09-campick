export const productDetail = async productId => {
  const reqUrl = `https://api.mandarin.weniv.co.kr/product/detail/${productId}`;
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
