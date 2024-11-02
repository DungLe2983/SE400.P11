import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OutStandingProduct from "./components/OutStandingProduct";
import WhyChooseUs from "./components/WhyChooseUs";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" relative">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-b from-[#AB238F] to-[#FF7770] opacity-30 -z-10"></div>

        <div className="z-50">
          <Header />
        </div>

        {/* Hero Section */}
        <div className="flex-1">
          <div className="container mx-auto px-4 py-20">
            <OutStandingProduct />
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="bg-zinc-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="text-zinc-400">Amazing products</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">40k+</h3>
              <p className="text-zinc-400">Orders Completed</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold">32k+</h3>
              <p className="text-zinc-400">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
