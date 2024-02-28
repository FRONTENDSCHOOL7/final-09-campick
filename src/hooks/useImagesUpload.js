import { useState } from "react";
import { uploadImages } from "../api/imageApi";
import imageCompression from "browser-image-compression";
const ALLOWED_EXTENSIONS = [
  ".jpg",
  ".gif",
  ".png",
  ".jpeg",
  ".bmp",
  ".tif",
  ".heic",
];
const MAX_SIZE = 10 * 1024 * 1024;

const useImagesUpload = () => {
  const [images, setImages] = useState([]);

  const onUpload = async (files, length) => {
    if (images.length + length > 3)
      return alert("이미지는 최대 3개까지 업로드 할 수 있습니다.");
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
    };
    console.log(files);
    const formData = new FormData();

    await Promise.all(
      Array.from(files).map(async file => {
        const fileExtension = file.name.split(".").pop().toLowerCase();
        if (
          ALLOWED_EXTENSIONS.includes(`.${fileExtension}`) &&
          file.size <= MAX_SIZE
        ) {
          try {
            const compressedImageFile = await imageCompression(file, options);

            const fromBlobToFile = new File(
              [compressedImageFile],
              "image.jpeg",
            );
            formData.append("image", fromBlobToFile);
          } catch (error) {
            console.error(error);
          }
        }
      }),
    );
    // for (let i = 0; i < length; i++) {
    //   const file = files[i];
    //   const fileExtension = file.name.split(".").pop().toLowerCase();
    //   if (
    //     ALLOWED_EXTENSIONS.includes(`.${fileExtension}`) &&
    //     file.size <= MAX_SIZE
    //   ) {
    //     formData.append("image", file);
    //   }
    // }

    try {
      const data = await uploadImages(formData);
      console.log(data);
      const filenames = data.map(data => data.filename);
      setImages(prev => [...prev, ...filenames]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onDelete = index => {
    setImages(prevImages => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });

    alert("삭제되었습니다.");
  };

  return { images, onUpload, onDelete };
};

export default useImagesUpload;
