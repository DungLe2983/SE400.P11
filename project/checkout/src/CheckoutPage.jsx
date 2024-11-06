import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import "tailwindcss/tailwind.css";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "example@email.com",
    name: "Nguyễn Văn A",
    phoneNumber: "0123456789",
    address: ["123 Đường ABC, TP.HCM", "456 Đường XYZ, Hà Nội"],
  });

  const [cartItems, setCartItems] = useState([
    {
      product_item_id: {
        product_id: {
          name: "This Time Tomorrow",
          image: [
            "https://bookshop.ge/content/uploads/products/9781405946124.jpg",
          ],
        },
        price: 200000,
      },
      item_quantity: 2,
    },
    {
      product_item_id: {
        product_id: {
          name: "This Time Tomorrow not for the end",
          image: [
            "https://bookshop.ge/content/uploads/products/9781405946124.jpg",
          ],
        },
        price: 150000,
      },
      item_quantity: 1,
    },
  ]);

  const [promotionCode, setPromotionCode] = useState("");
  const [promotionLabel, setPromotionLabel] = useState("");
  const [promotionPrice, setPromotionPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(
    cartItems.reduce(
      (acc, item) => acc + item.product_item_id.price * item.item_quantity,
      0
    )
  );

  const [isApplied, setIsApplied] = useState(false);
  const [error, setError] = useState("");

  const handlePhoneNumberChange = (e) => {
    setUserData((prev) => ({ ...prev, phoneNumber: e.target.value }));
  };

  const handleAddressChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      address: [...prev.address, e.target.value],
    }));
  };

  const handleNoteChange = (e) => {
    console.log("Ghi chú:", e.target.value);
  };

  const handleInputChange = (e) => {
    setPromotionCode(e.target.value);
  };

  const handleApplyClick = () => {
    if (promotionCode === "HOTDEAL24") {
      setPromotionPrice(50000);
      setPromotionLabel("HOTDEAL24");
      setIsApplied(true);
    } else {
      setError("Mã khuyến mãi không hợp lệ");
    }
  };

  const handleRemovePromotion = () => {
    setPromotionPrice(0);
    setPromotionLabel("");
    setIsApplied(false);
  };

  const handleCreateOrder = () => {
    if (userData.phoneNumber === "" || userData.address.length === 0) {
      setError("Vui lòng điền đầy đủ thông tin.");
    } else {
      toast.success("Đặt hàng thành công");
      setError("");
      setTimeout(() => {
        navigate("/success"); // Thay '/checkout' bằng URL của trang thanh toán của bạn
      }, 1500);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-white my-24">
        <div className="flex flex-col items-center  py-4 sm:flex-row px-14">
          <a href="/" className="text-2xl font-bold text-black">
            Thông tin vận chuyển
          </a>
        </div>
        <div className="grid px-2 md:px-10 lg:grid-cols-2">
          <div className="mt-10  bg-gray-100 px-8 pt-8 lg:mt-0 rounded-l border-r border-gray-300 py-4">
            <p className="text-xl font-medium text-black">Thông tin chi tiết</p>
            <p className="text-gray-400">
              Hoàn thành thông tin liên hệ của bạn
            </p>
            <div>
              <label
                for="email"
                className="mt-4 mb-2 block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 pl-11 text-sm shadow-sm outline-none text-gray-900 focus:border-gray-500"
                  value={userData.email}
                  disabled={true}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <i className="ri-mail-send-line text-gray-400"></i>
                </div>
              </div>

              <label
                for="Username"
                className="mt-4 mb-2 block text-sm font-medium text-gray-600"
              >
                Họ và tên
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="Username"
                  name="Username"
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none text-gray-900 focus:border-gray-500"
                  value={userData.name}
                  disabled={true}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <i className="ri-id-card-line text-gray-400"></i>
                </div>
              </div>

              <label
                for="UserPhone"
                className="mt-4 mb-2 block text-sm font-medium text-gray-600"
              >
                Số điện thoại
              </label>
              <div className="relative">
                <input
                  id="UserPhone"
                  name="UserPhone"
                  required
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 pl-11 text-sm shadow-sm outline-none text-gray-900 focus:border-gray-500"
                  value={userData.phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <i className="ri-phone-line text-gray-400"></i>
                </div>
              </div>

              <label
                for="billing-address"
                className="mt-4 mb-2 block text-sm font-medium text-gray-600"
              >
                Địa chỉ giao hàng
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="billing-address"
                  name="billing-address"
                  list="address-list"
                  onChange={handleAddressChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 pl-11 text-sm shadow-sm outline-none text-gray-900 focus:border-gray-500"
                  autoComplete="off"
                />
                <datalist id="address-list">
                  {userData.address.map((address, index) => (
                    <option key={index} value={address} />
                  ))}
                </datalist>
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <i className="ri-home-8-line text-gray-400"></i>
                </div>
              </div>

              <label
                for="promotion"
                className="mt-4 mb-2 block text-sm font-medium text-gray-600"
              >
                Mã khuyễn mãi
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="promotion"
                  name="promotion"
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 pl-11 text-sm shadow-sm outline-none text-gray-900 focus:border-gray-500"
                  placeholder="Ví dụ: HOTDEAL24"
                  onChange={handleInputChange}
                  value={promotionCode}
                  disabled={isApplied}
                />
                {!isApplied && promotionCode && (
                  <button
                    className="absolute right-4 top-2 z-10 text-blue-500"
                    onClick={handleApplyClick}
                  >
                    Áp dụng
                  </button>
                )}
                {isApplied && (
                  <button
                    className="absolute right-4 top-2 z-10 text-red-500"
                    onClick={handleRemovePromotion}
                  >
                    ✖
                  </button>
                )}
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <i className="ri-discount-percent-line text-gray-400"></i>
                </div>
              </div>
              {promotionLabel && (
                <p className="text-green-700 mt-1">
                  Áp dụng mã: {promotionLabel}
                </p>
              )}
              {error && <p className="text-red-500">{error}</p>}

              <label
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
              </div>
              <div className="mt-6 border-t border-b py-2 pr-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-600">Tạm tính</p>
                  <p className="font-semibold text-gray-600">
                    {totalPrice.toLocaleString()}đ
                  </p>
                </div>

                {promotionLabel && (
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-red-500">Giảm giá</p>
                    <p className="font-semibold text-red-500">
                      - {promotionPrice.toLocaleString()}đ
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-600">
                    Phí giao hàng
                  </p>
                  <p className="font-semibold text-gray-600">30.000 ₫</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Tổng</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {(totalPrice + 30000 - promotionPrice).toLocaleString()}đ
                </p>
              </div>

              <div className="mt-6 border-t border-gray-700 py-2">
                <button
                  onClick={handleCreateOrder}
                  className="mt-4 mb-8 w-full rounded-md bg-[#100D22]  hover:scale-105 transition-all font-bold px-6 py-3 text-white"
                >
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-gray-100 px-4 pt-8 lg:mt-0 rounded-r">
            <h2 className="text-xl font-medium text-black px-4">
              Giỏ hàng của bạn
            </h2>
            <ul className="mt-8 space-y-4 px-4">
              {cartItems.map((item, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div className="flex ">
                    <img
                      src={item.product_item_id.product_id.image[0]}
                      alt=""
                      className="mr-4 h-20 w-16 rounded object-cover"
                    />
                    <div>
                      <h3 className="text-lg text-gray-900 font-semibold">
                        {item.product_item_id.product_id.name}
                      </h3>
                      <p className="text-gray-400">Emma Straub</p>
                      <p className="text-gray-900">
                        Giá: {item.product_item_id.price.toLocaleString()} x{" "}
                        {item.item_quantity}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-900">
                    {(
                      item.product_item_id.price * item.item_quantity
                    ).toLocaleString()}
                    đ
                  </p>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-medium text-black px-4 mt-10">
              Phương thức thanh toán
            </h2>
            <form className="mt-5 grid gap-2 px-4">
              <div className="relative">
                <input
                  className="peer hidden"
                  type="radio"
                  id="hideRadio"
                  name="imageToggle"
                />
                <span className="peer-checked:border-gray-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-gray-100"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-500 peer-checked:bg-gray-100 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 bg-white text-gray-900"
                  htmlFor="hideRadio"
                >
                  <div className="flex items-center">
                    <i className="ri-truck-line text-4xl text-gray-900"></i>
                    <div className="ml-5">
                      <span className="mt-2 font-semibold text-gray-900">
                        COD
                      </span>
                      <p className="text-gray-600 text-sm leading-6">
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
