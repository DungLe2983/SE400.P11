import React, { useState } from "react";
import Header from "home/Header";
import Footer from "home/Footer";
import ProfileNavigation from "./components/ProfileNavigation";
import UserInfoSection from "./components/UserInfoSection";
import OrderHistorySection from "./components/OrderHistorySection";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 my-24">
        <h1 className="text-4xl text-center font-bold mb-8">My Profile</h1>
        <div className="flex flex-row gap-8">
          <div className="w-1/4">
            <ProfileNavigation
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
          <div className="w-3/4">
            {activeTab === "info" && <UserInfoSection />}
            {activeTab === "orders" && <OrderHistorySection />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
