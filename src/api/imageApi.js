const BASE_URL = "https://api.mandarin.weniv.co.kr";
export const imageRequest = async (url, options) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, { ...options });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const uploadImage = async formData => {
  return await imageRequest("image/uploadfile", {
    method: "POST",
    body: formData,
  });
};

// 여러개의 이미지 업로드
export const uploadImages = async formData => {
  return await imageRequest("image/uploadfiles", {
    method: "POST",
    body: formData,
  });
};
