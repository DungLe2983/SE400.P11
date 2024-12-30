import React, { useState, useEffect } from "react";
import Header from "home/Header";
import Footer from "home/Footer";
import ProfileNavigation from "./components/ProfileNavigation";
import UserInfoSection from "./components/UserInfoSection";
import OrderHistorySection from "./components/OrderHistorySection";
import {
  getUserProfile,
  updateUserProfile,
} from "../src/service/profileService"; // Cập nhật service

import { useRecoilValue } from "recoil";
import { userState } from "host/recoil/store";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("info");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const user = useRecoilValue(userState);

  useEffect(() => {
    const token = user.token;
    if (token) {
      getUserProfile(token)
        .then((data) => {
          setUserData(data.user);
          setLoading(false);
        })
        .catch((err) => {
          setError("Failed to load user profile.");
          setLoading(false);
        });
    } else {
      setError("No token found, please login.");
      setLoading(false);
    }
  }, [user]);

  const handleUpdateUserInfo = (updatedInfo) => {
    const token = user.token;
    if (token) {
      updateUserProfile(token, updatedInfo) // Gọi API để cập nhật thông tin
        .then((data) => {
          setUserData(data.user); // Cập nhật lại userData sau khi thành công
        })
        .catch((err) => {
          setError("Failed to update user profile.");
        });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header />
      <div className='container mx-auto px-4 my-24'>
        <h1 className='text-4xl text-center font-bold mb-8'>My Profile</h1>
        <div className='flex flex-row gap-8'>
          <div className='w-1/4'>
            <ProfileNavigation
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
          <div className='w-3/4'>
            {activeTab === "info" && (
              <UserInfoSection
                userData={userData}
                onUpdateUserInfo={handleUpdateUserInfo}
              />
            )}
            {activeTab === "orders" && <OrderHistorySection />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
