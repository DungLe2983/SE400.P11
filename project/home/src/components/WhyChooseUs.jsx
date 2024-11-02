import React from 'react';

export default function WhyChooseUs() {
    return (
        <section className='py-16 px-4'>
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-4xl font-bold text-center mb-20'>
                    Why Choose Us
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <FeatureCard
                        icon='ri-truck-line'
                        title='Free Shipping'
                        description='Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                    />
                    <FeatureCard
                        icon='ri-shield-check-line'
                        title='100% Secure Payment'
                        description='Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                    />
                    <FeatureCard
                        icon='ri-customer-service-2-line'
                        title='24/7 Dedicated Support'
                        description='Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
                    />
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className='text-center'>
            <div className='w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <i className={`${icon} text-3xl text-pink-500`}></i>
            </div>
            <h3 className='text-xl font-semibold mb-2'>{title}</h3>
            <p className='text-gray-600'>{description}</p>
        </div>
    );
}
