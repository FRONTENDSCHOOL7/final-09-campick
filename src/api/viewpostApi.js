export const viewPost = async post_id => {
  const reqUrl = `https://api.mandarin.weniv.co.kr/post/${post_id}`;
  try {
    const res = await fetch(reqUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
    });
    const json = await res.json();
    return json.post;
  } catch (error) {
    console.error("Api 응답 실패", error);
  }
};

export const heart = async post_id => {
  const reqUrl = `https://api.mandarin.weniv.co.kr/post/${post_id}/heart`;
  try {
    await fetch(reqUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
    });
  } catch (error) {
    console.error("Api 응답 실패");
  }
};

export const unheart = async post_id => {
  const reqUrl = `https://api.mandarin.weniv.co.kr/post/${post_id}/unheart`;
  try {
    await fetch(reqUrl, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
    });
  } catch (error) {
    console.error("Api 응답 실패");
  }
};
