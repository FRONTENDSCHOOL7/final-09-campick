<<<<<<< HEAD
export const productList = async (accountname, limit) => {
  const reqUrl = `https://api.mandarin.weniv.co.kr/product/${accountname}/?limit=${limit}`;
=======
<<<<<<< HEAD
export const productList = async (accountname, limit) => {
  const reqUrl = `https://api.mandarin.weniv.co.kr/product/${accountname}/?limit=${limit}`;
=======
export const productList = async accountname => {
  const reqUrl = `https://api.mandarin.weniv.co.kr/product/${accountname}/?limit=1`;
>>>>>>> 147061988da3ba187a0fc2354c4c1f5d13da4e24
>>>>>>> develop
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
