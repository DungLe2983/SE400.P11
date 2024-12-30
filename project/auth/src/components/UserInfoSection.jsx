import React, { useEffect, useState } from "react";

const UserInfoSection = ({ userData, onUpdateUserInfo }) => {
  const [isEditing, setIsEditing] = useState(false); // Trạng thái chỉnh sửa
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    if (userData) {
      setName(userData.name);
      setPhone(userData.phone);
      setEmail(userData.email);
      setRole(userData.role);
      setAddresses(userData.addresses);
    }
  }, [userData]);

  const handleSave = () => {
    // Gọi API cập nhật thông tin người dùng
    onUpdateUserInfo({ name, phone });
    setIsEditing(false); // Đóng form chỉnh sửa sau khi lưu
  };

  return (
    <div className='bg-white p-6 shadow-lg rounded-lg'>
      <h2 className='text-2xl font-semibold mb-4'>User Information</h2>
      <div className='space-y-4'>
        <div>
          <p className='font-medium'>Email: {email}</p>
        </div>
        <div>
          <p className='font-medium'>Role: {role}</p>
        </div>
        <div>
          <p className='font-medium'>
            Address:{" "}
            {addresses.length > 0
              ? userData.addresses[0].street
              : "No address yet"}
          </p>
        </div>

        {isEditing ? (
          <>
            <div>
              <label className='block text-sm'>Name:</label>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded-md'
              />
            </div>
            <div>
              <label className='block text-sm'>Phone:</label>
              <input
                type='text'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded-md'
              />
            </div>
            <button
              onClick={handleSave}
              className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg'
            >
              Save
            </button>
          </>
        ) : (
          <>
            <div>
              <p className='font-medium'>Name: {name}</p>
            </div>
            <div>
              <p className='font-medium'>Phone: {phone}</p>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className='mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg'
            >
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserInfoSection;
