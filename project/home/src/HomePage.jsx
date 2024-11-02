import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import OutStandingProduct from './components/OutStandingProduct';
import WhyChooseUs from './components/WhyChooseUs';

const HomePage = () => {
    return (
        <div className='min-h-screen container mx-auto  font-sans relative flex'>
            {/* Gradient Background từ header xuống */}
            <div className='absolute inset-y-0 right-0 h-screen w-1/3 bg-gradient-to-b from-[#AB238F] to-[#FF7770] opacity-30 z-0'></div>

            <div className='relative z-10 w-full'>
                {/* Header */}
                <header >
                    <Header />
                </header>

                {/* Main Content */}
                <main className='flex px-8 mt-20'>
                    <OutStandingProduct />
                </main>

                {/* Stats Section */}
                <section className='w-full mt-12 bg-gray-900 text-white py-8 px-6'>
                    <div className='flex justify-around text-center'>
                        <div>
                            <h3 className='text-4xl font-bold'>500+</h3>
                            <p className='text-gray-400'>Amazing products</p>
                        </div>
                        <div>
                            <h3 className='text-4xl font-bold'>40k+</h3>
                            <p className='text-gray-400'>Orders Completed</p>
                        </div>
                        <div>
                            <h3 className='text-4xl font-bold'>32k+</h3>
                            <p className='text-gray-400'>Happy Customers</p>
                        </div>
                    </div>
                </section>

                <WhyChooseUs />
            </div>
        </div>
    );
};

export default HomePage;
