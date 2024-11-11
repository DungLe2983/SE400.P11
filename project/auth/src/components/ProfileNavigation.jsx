import React from "react";

const ProfileNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "info", label: "Personal Information", icon: "user-line" },
    { id: "orders", label: "Order History", icon: "shopping-bag-line" },
  ];

  return (
    <nav className="bg-white shadow rounded-lg overflow-hidden">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`w-full text-left px-4 py-3 flex items-center space-x-3 ${
            activeTab === tab.id
              ? "bg-gray-100 font-semibold"
              : "hover:bg-gray-50"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          <i className={`ri-${tab.icon} text-xl`}></i>
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default ProfileNavigation;
