import axios from "axios";

const API_URL = "http://localhost:8080/api/products";

export const getAllProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách sản phẩm", error);
    throw error;
  }
};
