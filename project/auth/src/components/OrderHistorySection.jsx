import React, { useEffect, useState } from "react";

import { getMyOrders } from "checkout/service/orderService";

const OrderHistorySection = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const token = localStorage.getItem("shosingToken");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [myOrder, setMyOrders] = useState([]);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchOrders = async () => {
      if (!token) {
        setError("Bạn cần đăng nhập để xem lịch sử đơn hàng.");
        return;
      }

      try {
        const response = await getMyOrders(token);

        setMyOrders(response.data.orders);
      } catch (error) {
        console.error("Error getting orders:", error);
      }
    };

    fetchOrders();
  }, [token]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "text-green-600 bg-green-100";
      case "Shipped":
        return "text-blue-600 bg-blue-100";
      case "Processing":
        return "text-yellow-600 bg-yellow-100";
    }
  };

  console.log(myOrder);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">Order History</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-3 font-semibold">Order ID</th>
              <th className="pb-3 font-semibold">Date</th>
              <th className="pb-3 font-semibold">Total</th>
            </tr>
          </thead>
          <tbody>
            {myOrder?.map((order) => (
              <tr
                key={order.id}
                className="border-b last:border-b-0"
                onClick={() => handleOrderClick(order)}
              >
                <td className="py-4">{order._id}</td>
                <td className="py-4">
                  {new Date(order.createdAt).toLocaleDateString("en-GB")}
                </td>
                <td className="py-4">
                  {order?.totalAmount?.toLocaleString()} đ
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-slate-50 bg-opacity-70 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between mb-4">
              <h3 className="text-xl font-semibold">Order Details</h3>
              <button onClick={() => setIsModalOpen(false)}>×</button>
            </div>

            {selectedOrder.items.map((item) => (
              <div key={item._id} className="border-b py-4">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">{item.product.name}</p>
                    <p className="text-sm text-gray-600">
                      Size: {item.variation.size} | Color:{" "}
                      {item.variation.color}
                    </p>
                    <p className="text-sm">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      {(item.variation.price * item.quantity).toLocaleString()}{" "}
                      đ
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between font-semibold">
                <span>Total Amount:</span>
                <span>{selectedOrder.totalAmount.toLocaleString()} đ</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderHistorySection;
