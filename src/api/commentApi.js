const BASE_URL = "https://api.mandarin.weniv.co.kr";

export const getCommentList = async post_id => {
  try {
    const response = await fetch(
      `${BASE_URL}/post/${post_id}/comments/?limit=infinity`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      },
    );
    const json = await response.json();
    if (json && Array.isArray(json.comments)) {
      return json.comments;
    } else {
      console.error("Unexpected response format:", json);
      return [];
    }
  } catch (error) {
    console.log("댓글을 불러오지 못했습니다!", error);
    return [];
  }
};

export const uploadComment = async (post_id, comment) => {
  try {
    const response = await fetch(`${BASE_URL}/post/${post_id}/comments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: {
          content: comment,
        },
      }),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("댓글을 업로드하지 못했습니다!", error);
  }
};
