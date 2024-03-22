import React from 'react'
import Navbar from '@/app/Components/Navbar/Navbar'
import Second from './Second'

const Discover = () => {
  return (
    <div>
    <div className='h-screen'>
      <div className='absolute z-10'>
            <Navbar />
          </div>
      <img src="./images/london2.jpg" alt="ny" className='h-screen w-screen absolute'/>
      <div className='relative flex flex-col items-center justify-center text-white'>
        <span className='mt-48 text-3xl'>Discover</span>
        <p className='mt-8 text-2xl text-center tracking-wide'>Discover all the services that we provide here which will <br /> take your trip planning to the next level of comfort</p>
      </div>
    </div>
    <div>
      <Second />
    </div>
    </div>
  )
}

export default Discover
