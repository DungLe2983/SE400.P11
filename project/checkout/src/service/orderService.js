import axios from "axios";

const BASE_URL = "http://localhost:8080/api/orders";

// Create a new order
export const createOrder = async (token, address) => {
  try {
    const response = await axios.post(
      BASE_URL,
      {
        address: address,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

// Get user orders
export const getMyOrders = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/my-orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error getting orders:", error);
    throw error;
  }
};
