import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import "tailwindcss/tailwind.css";
import { fetchCart } from "../src/service/cartService";
import { getUserProfile } from "auth/service/profileService";
import { createOrder } from "./service/orderService";

const CheckoutPage = () => {
  const navigate = useNavigate();
  // const [userData, setUserData] = useState({
  //   email: "example@email.com",
  //   name: "Nguyễn Văn A",
  //   phoneNumber: "0123456789",
  //   address: ["123 Đường ABC, TP.HCM", "456 Đường XYZ, Hà Nội"],
  // });

  const [userProfile, setUserProfile] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState("");
  const token = localStorage.getItem("shosingToken");

  const [address, setAddress] = useState("");

  useEffect(() => {
    const getCart = async () => {
      if (!token) {
        setError("Bạn cần đăng nhập để xem giỏ hàng.");
        setLoading(false);
        return;
      }
      try {
        const cart = await fetchCart(token);
        setCartItems(cart.items || []);
      } catch (error) {
        setError("Không thể lấy giỏ hàng. Vui lòng thử lại sau.");
      }
    };

    const getUser = async () => {
      if (!token) {
        setError("Bạn cần đăng nhập để xem giỏ hàng.");
        setLoading(false);
        return;
      }
      try {
        const response = await getUserProfile(token);
        setUserProfile(response.user);
      } catch (error) {
        setError("Không thể lấy thông tin người dùng. Vui lòng thử lại sau.");
      }
    };

    getUser();
    getCart();
  }, [token]);

  console.log("User profile:", userProfile);
  console.log("Cart items:", cartItems);

  // const handlePhoneNumberChange = (e) => {
  //   setUserData((prev) => ({ ...prev, phoneNumber: e.target.value }));
  // };

  const handleAddressChange = (e) => {
    setError("");
    setAddress(e.target.value);
  };

  // const handleNoteChange = (e) => {
  //   console.log("Ghi chú:", e.target.value);
  // };

  const handleCreateOrder = async () => {
    console.log("Địa chỉ:", address);

    if (!address) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    try {
      const response = await createOrder(token, address);

      console.log("Order created:", response);
      toast.success("Đặt hàng thành công");
      setError("");

      // setTimeout(() => {
      navigate("/success"); // Thay '/checkout' bằng URL của trang thanh toán của bạn
      // }, 1500);
    } catch (error) {
      console.error("Error creating order:", error);
      setError("Không thể đặt hàng. Vui lòng thử lại sau.");
      return;
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.variation.price,
      0
    );
  };

  return (
    <>
      <Header />
      <div className='bg-white my-24'>
        <div className='flex flex-col items-center  py-4 sm:flex-row px-14'>
          <a href='/' className='text-2xl font-bold text-black'>
            Thông tin vận chuyển
          </a>
        </div>
        <div className='grid px-2 md:px-10 lg:grid-cols-2'>
          <div className='mt-10  bg-gray-100 px-8 pt-8 lg:mt-0 rounded-l border-r border-gray-300 py-4'>
            <p className='text-xl font-medium text-black'>Thông tin chi tiết</p>
            <p className='text-gray-400'>
              Hoàn thành thông tin liên hệ của bạn
            </p>
            <div>
              <label
                for='email'
                className='mt-4 mb-2 block text-sm font-medium text-gray-600'
              >
                Email
              </label>
              <div className='relative'>
                <input
                  type='text'
                  id='email'
                  name='email'
                  required
                  className='w-full rounded-md border border-gray-300 bg-white px-4 py-3 pl-11 text-sm shadow-sm outline-none text-gray-900 focus:border-gray-500 disabled:opacity-60'
                  value={userProfile.email}
                  disabled={true}
                />
                <div className='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                  <i className='ri-mail-send-line text-gray-400'></i>
                </div>
              </div>

              <label
                for='Username'
                className='mt-4 mb-2 block text-sm font-medium text-gray-600'
              >
                Họ và tên
              </label>
              <div className='relative'>
                <input
                  type='text'
                  id='Username'
                  name='Username'
                  required
                  className='w-full rounded-md border border-gray-300 bg-white px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none text-gray-900 focus:border-gray-500 disabled:opacity-60'
                  value={userProfile.name}
                  disabled={true}
                />
                <div className='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                  <i className='ri-id-card-line text-gray-400'></i>
                </div>
              </div>

              <label
                for='UserPhone'
                className='mt-4 mb-2 block text-sm font-medium text-gray-600'
              >
                Số điện thoại
              </label>
              <div className='relative'>
                <input
                  id='UserPhone'
                  name='UserPhone'
                  required
                  className='w-full rounded-md border border-gray-300 bg-white px-4 py-3 pl-11 text-sm shadow-sm outline-none text-gray-900 focus:border-gray-500 disabled:opacity-60'
                  value={userProfile?.phone}
                  // onChange={handlePhoneNumberChange}
                  disabled={true}
                />
                <div className='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                  <i className='ri-phone-line text-gray-400'></i>
                </div>
              </div>

              <label
                for='billing-address'
                className='mt-4 mb-2 block text-sm font-medium text-gray-600'
              >
                Địa chỉ giao hàng
              </label>
              <div className='relative'>
                <input
                  type='text'
                  id='billing-address'
                  name='billing-address'
                  list='address-list'
                  onChange={handleAddressChange}
                  className='w-full rounded-md border border-gray-300 bg-white px-4 py-3 pl-11 text-sm shadow-sm outline-none text-gray-900 focus:border-gray-500'
                  autoComplete='off'
                />
                {/* <datalist id="address-list">
                  {userData.address.map((address, index) => (
                    <option key={index} value={address} />
                  ))}
                </datalist> */}
                <div className='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                  <i className='ri-home-8-line text-gray-400'></i>
                </div>
              </div>
              {/* <label
                for="note"
                className="mt-4 mb-2 block text-sm font-medium text-gray-600"
              >
                Ghi chú (Tùy chọn)
              </label>
              <div className="relative">
                <input
                  id="note"
                  name="note"
                  placeholder="Ví dụ: Giao hàng ngoài giờ hành chính"
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 pl-11 text-sm shadow-sm outline-none text-gray-900 focus:border-gray-500"
                  onChange={handleNoteChange}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <i className="ri-sticky-note-line text-gray-400"></i>
                </div>
              </div> */}
              <div className='mt-6 border-t border-b py-2 pr-2'>
                <div className='flex items-center justify-between'>
                  <p className='text-sm font-medium text-gray-600'>Tạm tính</p>
                  {getTotalPrice().toLocaleString()} VNĐ
                </div>

                <div className='flex items-center justify-between'>
                  <p className='text-sm font-medium text-gray-600'>
                    Phí giao hàng
                  </p>
                  <p className='font-semibold text-gray-600'>30.000 VNĐ</p>
                </div>
              </div>
              <div className='mt-6 flex items-center justify-between'>
                <p className='text-sm font-medium text-gray-900'>Tổng</p>
                {(getTotalPrice() + 30000).toLocaleString()} VNĐ
              </div>

              {error && (
                <div className='mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'>
                  {error}
                </div>
              )}

              <div className='mt-6 border-t border-gray-700 py-2'>
                <button
                  onClick={handleCreateOrder}
                  className='mt-4 mb-8 w-full rounded-md bg-[#100D22]  hover:scale-105 transition-all font-bold px-6 py-3 text-white'
                >
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>

          <div className='mt-10 bg-gray-100 px-4 pt-8 lg:mt-0 rounded-r'>
            <h2 className='text-xl font-medium text-black px-4'>
              Giỏ hàng của bạn
            </h2>
            <ul className='mt-8 space-y-4 px-4'>
              {cartItems.map((item, index) => (
                <li key={index} className='flex items-center justify-between'>
                  <div className='flex '>
                    <div>
                      <h3 className='text-base text-gray-900 font-semibold'>
                        {item.product.name}
                      </h3>
                      <div className='flex gap-2 text-sm'>
                        <p>{item.variation.color}</p> /{" "}
                        <p>{item.variation.size}</p>
                      </div>
                      <p className='text-gray-900 text-sm'>
                        Giá: {item.variation.price.toLocaleString()} x{" "}
                        {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className='text-gray-900 font-semibold'>
                    {(item.variation.price * item.quantity).toLocaleString()} đ
                  </p>
                </li>
              ))}
            </ul>

            <h2 className='text-xl font-medium text-black px-4 mt-10'>
              Phương thức thanh toán
            </h2>
            <form className='mt-5 grid gap-2 px-4'>
              <div className='relative'>
                <input
                  className='peer hidden'
                  type='radio'
                  id='hideRadio'
                  name='imageToggle'
                />
                <span className='peer-checked:border-gray-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-gray-100'></span>
                <label
                  className='peer-checked:border-2 peer-checked:border-gray-500 peer-checked:bg-gray-100 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 bg-white text-gray-900'
                  htmlFor='hideRadio'
                >
                  <div className='flex items-center'>
                    <i className='ri-truck-line text-4xl text-gray-900'></i>
                    <div className='ml-5'>
                      <span className='mt-2 font-semibold text-gray-900'>
                        COD
                      </span>
                      <p className='text-gray-600 text-sm leading-6'>
                        Thanh toán khi nhận hàng
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
