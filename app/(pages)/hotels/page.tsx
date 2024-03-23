import React from 'react';
import Navbar from '@/app/Components/Navbar/Navbar';
import SecondHotel from './SecondHotel';

const Hotels = () => {
  return (
    <div>
      <div className='relative h-screen'>
        <img src="./images/hotels3.jpg" alt="ny" className='absolute inset-0 w-full h-full object-cover' />
        <div className='absolute flex flex-col items-center justify-center text-white'>
          <Navbar />
          <div className='text-center mt-48'>
            <span className='text-3xl'>Discover</span>
            <p className='mt-8 text-2xl tracking-wide'>Discover all the services that we provide here which will take your trip planning to the next level of comfort</p>
          </div>
        </div>
      </div>
      <div>
        <SecondHotel />
      </div>
    </div>
  );
}

export default Hotels;
