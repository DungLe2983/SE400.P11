import React from 'react'
import OTProImg from '../assets/OTProImg.png'

const OutStandingProduct = () => {
  return (
      <div className='flex items-center'>
          <section className='w-1/2 p-8'>
              <h3 className='text-pink-500 font-semibold text-sm uppercase mb-6'>
                  Road Racing Shoes
              </h3>
              <h1 className='text-6xl font-extrabold text-gray-900 leading-tight mb-4'>
                  Nike ZoomX <br /> Streakfly
              </h1>
              <p className='text-gray-400 text-base mt-8 mb-14'>
                  Our lightest racing shoe, the Nike ZoomX Streakfly is all
                  about the speed you need to take on the competition in a mile,
                  5K or 10K race.
              </p>

          </section>

          {/* Product Image */}
          <section className='w-1/2 relative flex justify-center items-center'>
              <img
                  src={OTProImg}
                  alt='Nike ZoomX Streakfly'
                  className='w-[600] h-[400] object-cover relative z-10'
              />
          </section>
      </div>
  );
}

export default OutStandingProduct
