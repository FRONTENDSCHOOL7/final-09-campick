export const campsiteregister = async (
  companyName,
  location,
  labels,
  price,
  link,
  image,
) => {
  const baseUrl = "https://api.mandarin.weniv.co.kr";
  const reqPath = "/product";
  const reqUrl = baseUrl + reqPath;
  const item = {
    name: companyName,
    location: location,
    labels: labels,
  };
  // location이랑 label도 api에 전달을 해야하는데 명세에 이 내용이 없으니까.
  // item이라는 obj를 만들어서 json으로 변환 후 전달.
  // 다시 써야할때도 json -> obj 가공해서 써야함.

  const productData = {
    product: {
      itemName: JSON.stringify(item),
      price: price,
      link: link,
      itemImage: image,
    },
  };

  try {
    const res = await fetch(reqUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWY1ZWUwYjJjYjIwNTY2Mzc2ZTY0YyIsImV4cCI6MTcwMTczOTk4MiwiaWF0IjoxNjk2NTU1OTgyfQ.QKNZ-L28iBciLX-oc5PI8nx42j320dHhUCNDvpzboNc`,
        //Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    const json = await res.json();

    return json;
  } catch (error) {
    console.error("API 응답에 실패하였습니다.", error);
  }
};
