export const deleteComment = async (post_id, comment_id) => {
  const reqUrl = `https://api.mandarin.weniv.co.kr/post/${post_id}/comments/${comment_id}`;
  try {
    const res = await fetch(reqUrl, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
    });
    const json = await res.json();
    return json;
  } catch (error) {
    console.error("Api 응답 실패", error);
  }
};
