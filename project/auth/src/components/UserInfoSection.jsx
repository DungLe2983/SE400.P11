import React, { useState } from "react";

const UserInfoSection = () => {
  const [userInfo, setUserInfo] = useState({
    username: "testUser",
    email: "test@gmail.com",
    password: "yourpassword",
    phone: "0123 456 789",
    address: "TP HCM",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated user info:", userInfo);
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {Object.entries(userInfo).map(([key, value]) => (
            <div key={key}>
              <label
                htmlFor={key}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <input
                // type={key === "password" ? "password" : "text"}
                type="text"
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
              />
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          {isEditing ? (
            <>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="mr-4 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#100D22] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
              >
                Save Changes
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#100D22] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
            >
              Edit Information
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserInfoSection;
