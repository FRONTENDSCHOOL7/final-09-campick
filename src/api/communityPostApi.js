export const communityPost = async (content, image, location) => {
  const reqUrl = "https://api.mandarin.weniv.co.kr/post";

  const contents = {
    content: content,
    location: location,
  };

  try {
    const res = await fetch(reqUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWY1ZWUwYjJjYjIwNTY2Mzc2ZTY0YyIsImV4cCI6MTcwMTczOTk4MiwiaWF0IjoxNjk2NTU1OTgyfQ.QKNZ-L28iBciLX-oc5PI8nx42j320dHhUCNDvpzboNc`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        post: {
          content: JSON.stringify(contents),
          image: image, //"imageurl1, imageurl2" 형식으로
        },
      }),
    });
    const json = await res.json();
    return json;
  } catch (error) {
    console.log("Api 응답 실패", error);
  }
};
