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

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy thông tin sản phẩm", error);
    throw error;
  }
};

export const getAllCategories = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/categories");
    return response.data; // Trả về dữ liệu danh mục
  } catch (error) {
    console.error("Lỗi khi lấy danh mục", error);
    throw error; // Nếu có lỗi, ném ra để xử lý
  }
};

export const searchProducts = async (keyword) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/products/search?keyword=${keyword}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products: ", error);
    throw error;
  }
};
