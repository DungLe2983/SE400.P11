import React from "react";

const OrderHistorySection = () => {
  const orders = [
    { id: "1234", date: "2023-05-15", total: 125.99 },
    { id: "1235", date: "2023-05-10", total: 79.99 },
    { id: "1236", date: "2023-05-05", total: 199.99 },
  ];

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
            {orders.map((order) => (
              <tr key={order.id} className="border-b last:border-b-0">
                <td className="py-4">{order.id}</td>
                <td className="py-4">{order.date}</td>
                <td className="py-4">${order.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistorySection;
