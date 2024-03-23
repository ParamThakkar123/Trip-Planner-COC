import React from 'react';
import Navbar from '@/app/Components/Navbar/Navbar';
import Second from './Second';
import { useMemo } from 'react';

const Discover = () => {
  const renderVideo = useMemo(
    () => (
      <video src="videos/carpol.mp4" autoPlay muted loop className='absolute inset-0 w-full h-full object-cover opacity-40' />
    ),
    []
  );

  return (
    <div>
      <div className='h-screen'>
        <div className='absolute z-10'>
          <Navbar />
        </div>

        <div className='relative flex flex-col items-center justify-center text-white'>
          <span className='mt-48 text-3xl'>Connect</span>
          <p className='mt-8 text-2xl text-center tracking-wide'>Get in contact with other travellers near you with the same destination and travel together making lifelong connections</p>
        </div>
      </div>
      <div>
        {renderVideo}
      </div>
      <Second />
    </div>
  );
}

export default Discover;
