import axios from "axios";

const API_URL = "http://localhost:8080/api/users/profile";

// Hàm lấy thông tin người dùng
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching profile data:", error);
    throw error;
  }
};

// Hàm cập nhật thông tin người dùng
export const updateUserProfile = async (token, updatedInfo) => {
  try {
    const response = await axios.put(API_URL, updatedInfo, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Trả về dữ liệu người dùng đã cập nhật
  } catch (error) {
    console.error("Error updating profile data:", error);
    throw error;
  }
};
