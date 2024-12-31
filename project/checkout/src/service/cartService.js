import axios from "axios";

const BASE_URL = "http://localhost:8080/api/cart";

// Lấy giỏ hàng từ API
export const fetchCart = async (token) => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.cart; // Trả về giỏ hàng
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

export const removeItemFromCart = async (token, productId, color, size) => {
  const response = await fetch("http://localhost:8080/api/cart/items", {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId,
      color,
      size,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to remove item from cart");
  }

  const data = await response.json();
  return data;
};

// Function to update item quantity in the cart
export const updateItemQuantity = async (
  token,
  productId,
  color,
  size,
  quantity
) => {
  const response = await fetch("http://localhost:8080/api/cart/items", {
    method: "PUT", // Use PUT for updating
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId,
      color,
      size,
      quantity, // Updated quantity
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update quantity");
  }

  const data = await response.json();
  return data.cart; // Assuming the response contains the updated cart
};

export const addItemToCart = async (
  token,
  productId,
  color,
  size,
  quantity
) => {
  const response = await fetch("http://localhost:8080/api/cart/items", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId,
      color,
      size,
      quantity,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to add item to cart");
  }

  const data = await response.json();
  return data.cart;
};
