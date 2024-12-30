import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import "tailwindcss/tailwind.css";
import {
  fetchCart,
  updateItemQuantity,
  removeItemFromCart,
} from "../src/service/cartService";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]); // Cart items state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const token = localStorage.getItem("shosingToken"); // Get token from localStorage
  const navigate = useNavigate();

  useEffect(() => {
    const getCart = async () => {
      if (!token) {
        setError("Bạn cần đăng nhập để xem giỏ hàng.");
        setLoading(false);
        return;
      }
      try {
        const cart = await fetchCart(token); // Fetch cart from API
        setCartItems(cart.items || []); // Store cart items in state
      } catch (error) {
        setError("Không thể lấy giỏ hàng. Vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    };

    getCart();
  }, [token]);

  // Handle removal of item from cart
  const handleRemoveItem = async (productId, color, size) => {
    try {
      await removeItemFromCart(token, productId, color, size);
      // Remove item from state after successful deletion
      setCartItems((prevItems) =>
        prevItems.filter(
          (item) =>
            !(
              item.product._id === productId &&
              item.variation.color === color &&
              item.variation.size === size
            )
        )
      );
    } catch (error) {
      setError("Không thể xóa sản phẩm. Vui lòng thử lại.");
    }
  };

  const handleQuantityChange = async (productId, color, size, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from being less than 1
    try {
      const updatedCart = await updateItemQuantity(
        token,
        productId,
        color,
        size,
        newQuantity
      );
      setCartItems(updatedCart.items || []);
      // await updateItemQuantity(token, productId, color, size, newQuantity);
      setCartItems(updatedCart.items || []);
    } catch (error) {
      setError("Không thể cập nhật số lượng. Vui lòng thử lại.");
    }
  };

  // Calculate total price of the cart
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.variation.price,
      0
    );
  };

  return (
    <>
      <Header />
      <div className='max-w-7xl mx-auto my-24 bg-white'>
        <h2 className='text-center font-bold text-3xl mt-8 text-gray-800'>
          Giỏ hàng của bạn
        </h2>
        {loading && (
          <p className='text-center text-gray-600'>Đang tải giỏ hàng...</p>
        )}
        {error && <p className='text-center text-red-500'>{error}</p>}

        {!loading && !error && cartItems.length === 0 && (
          <p className='text-center text-gray-600'>
            Giỏ hàng của bạn hiện đang trống.
          </p>
        )}

        <div className='table-container mt-16'>
          <div className='relative overflow-x-auto shadow-md'>
            <table className='w-full text-sm text-left text-gray-800 bg-white'>
              <thead className='text-xs uppercase bg-gray-50 text-gray-600'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Thông tin sản phẩm
                  </th>
                  <th scope='col' className='pl-16 md:px-6 py-3'>
                    Số lượng
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Đơn giá
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Thành tiền
                  </th>
                  <th scope='col' className='px-6 py-3'></th>{" "}
                  {/* Column for delete button */}
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr
                    key={index}
                    className='border-b bg-white hover:bg-gray-100'
                  >
                    <td className='p-4'>
                      <div className='flex gap-2'>
                        <div className='flex flex-col gap-2 text-sm'>
                          <p className='text-gray-800 text-base font-semibold'>
                            {item.product.name}
                          </p>
                          <div className='flex gap-2'>
                            <p>{item.variation.color}</p> /{" "}
                            <p>{item.variation.size}</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className='pl-16 md:px-6 py-4'>
                      <input
                        className='bg-gray-50 border border-gray-300 text-gray-800 text-sm block h-6 w-12 text-center'
                        value={item.quantity}
                        type='number'
                        min='1'
                        onChange={(e) =>
                          handleQuantityChange(
                            item.product._id,
                            item.variation.color,
                            item.variation.size,
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </td>
                    <td className='px-6 py-4 font-semibold text-gray-800'>
                      {item.variation.price.toLocaleString()} đ
                    </td>
                    <td className='px-6 py-4 font-semibold text-gray-800'>
                      {(item.variation.price * item.quantity).toLocaleString()}{" "}
                      đ
                    </td>
                    <td className='px-6 py-4'>
                      <i
                        className='ri-delete-bin-fill text-red-500 hover:text-red-400 text-xl cursor-pointer'
                        onClick={() =>
                          handleRemoveItem(
                            item.product._id,
                            item.variation.color,
                            item.variation.size
                          )
                        }
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='mt-6 flex md:justify-end'>
            <div className='text-right flex flex-col gap-4'>
              <div className='flex md:flex-row items-baseline md:gap-60'>
                <p className='font-semibold text-gray-800'>Tổng tiền:</p>
                <span className='text-red-500 font-semibold text-xl'>
                  {getTotalPrice().toLocaleString()} VNĐ
                </span>
              </div>
              <Link
                to='/checkout'
                className='text-center hover:scale-105 transition-all bg-[#100D22] font-bold py-3 w-full px-2 text-white rounded-md'
              >
                Thanh toán
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
