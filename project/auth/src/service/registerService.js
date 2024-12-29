import axios from "axios";

export const register = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/users/register",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || "Registration failed";
  }
};
