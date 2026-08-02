import axios from "axios";

const CLOUD_NAME = "y1gjyers";
const UPLOAD_PRESET = "theindiandrip";

export const uploadImage = async (file, folder = "products") => {
  try {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("folder", folder);

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      formData
    );

    return response.data.secure_url;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw error;
  }
};