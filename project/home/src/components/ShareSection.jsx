import React from 'react';
import ins1 from '../assets/ins1.png';
import ins2 from '../assets/ins2.png';
import ins3 from '../assets/ins3.png';
import ins4 from '../assets/ins4.png';
import ins5 from '../assets/ins5.png';
import ins6 from '../assets/ins6.png';

const ShareSection = () => {
    const images = [ins1, ins2, ins3, ins4, ins5, ins6];
    return (
        <div className='container mx-auto px-4 py-16'>
            {/* Social Share Section */}
            <div className='text-center mb-20'>
                <h2 className='text-4xl font-bold mb-4'>Share With #Shosing</h2>
                <p className='text-gray-600'>
                    Follow <span className='font-semibold'>@shosing</span>{' '}
                    instagram for inspirations
                </p>

                {/* Image Grid */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16'>
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className='aspect-square overflow-hidden rounded-lg'
                        >
                            <img
                                src={src}
                                alt={`Instagram post ${index + 1}`}
                                className='w-full h-full object-cover '
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Subscribe Section */}
            <div className='bg-[#100D22]  rounded-2xl mt-48 p-8 md:p-12 text-center'>
                <div className='relative z-2'>
                    <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                        Subscribe to Get 25% OFF
                    </h2>
                    <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>
                        Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet.
                    </p>

                    <form className='max-w-md mx-auto'>
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <input
                                type='email'
                                placeholder='Enter Your Email Address'
                                required
                                className='flex-1 px-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-state-500'
                            />
                            <button
                                type='submit'
                                className='px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium hover:from-pink-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-[#0a0a1b] disabled:opacity-50 transition-colors duration-200'
                            >
                                Subribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ShareSection;
