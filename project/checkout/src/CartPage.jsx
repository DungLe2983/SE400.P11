import React from "react";
import { Link } from "react-router-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import "tailwindcss/tailwind.css";

const CartPage = () => {
  const cartItems = [
    {
      product_item_id: {
        product_id: {
          image: [
            "https://images.nike.com/is/image/DotCom/DH4245_101_A_PREM?bgc=f5f5f5&wid=1400&hei=1400", // Link ảnh của Nike Air Max 2021
          ],
          name: "Nike Air Max 2021",
        },

        Author: {
          name: "Nike",
        },
        price: 3000000,
      },
      item_quantity: 1,
    },
    {
      product_item_id: {
        product_id: {
          image: [
            "https://images.nike.com/is/image/DotCom/DH4245_101_A_PREM?bgc=f5f5f5&wid=1400&hei=1400", // Link ảnh của Nike Air Max 2021
          ],
          name: "Nike Air Max 2021",
        },
        Author: {
          name: "Nike",
        },
        price: 3000000,
      },
      item_quantity: 1,
    },
  ];
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto my-24 bg-white">
        <h2 className="text-center font-bold text-3xl mt-8 text-gray-800">
          Giỏ hàng của bạn
        </h2>
        <p className="text-center text-sm mt-2 text-gray-600">
          Có <span className="font-semibold">2 sản phẩm</span> trong giỏ hàng
        </p>
        <div className="table-container mt-16">
          <div className="relative overflow-x-auto shadow-md">
            <table className="w-full text-sm text-left text-gray-800 bg-white">
              <thead className="text-xs uppercase bg-gray-50 text-gray-600">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Thông tin sản phẩm
                  </th>
                  <th scope="col" className="pl-16 md:px-6 py-3">
                    Số lượng
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Đơn giá
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Thành tiền
                  </th>
                </tr>
              </thead>
              {cartItems.map((item, index) => (
                <tbody key={index}>
                  <tr className="border-b bg-white hover:bg-gray-100">
                    <td className="p-4">
                      <div className="flex gap-2">
                        <img
                          className="w-32 h-32 object-cover"
                          src={item.product_item_id.product_id.image[0]}
                          alt="productInCartImg"
                        />
                        <div className="flex flex-col gap-2 text-sm">
                          <p className="text-gray-800 text-lg font-semibold">
                            {item.product_item_id.product_id.name}
                          </p>
                          <p>{item.product_item_id.Author.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="pl-16 md:px-6 py-4">
                      <input
                        id="quantity"
                        className="bg-gray-50 border border-gray-300 text-gray-800 text-sm block h-6 w-12 text-center"
                        required
                        value={item.item_quantity}
                        min="1"
                        type="number"
                      />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {item.product_item_id.price.toLocaleString()} đ
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {(
                        item.product_item_id.price * item.item_quantity
                      ).toLocaleString()}{" "}
                      đ
                    </td>
                    <td className="px-6 py-4">
                      <i className="ri-delete-bin-fill text-red-500 hover:text-red-400 text-xl cursor-pointer"></i>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <div className="mt-6 flex md:justify-end">
            <div className="text-right flex flex-col gap-4">
              <div className="flex md:flex-row items-baseline md:gap-60">
                <p className="font-semibold text-gray-800">Tổng tiền:</p>
                <span className="text-red-500 font-semibold text-xl">
                  6,000,000 VNĐ
                </span>
              </div>
              <Link
                to={"/checkout"}
                className="text-center hover:scale-105 transition-all  bg-[#100D22] font-bold py-3 w-full px-2 text-white rounded-md"
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
