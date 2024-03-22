import React from 'react'
import Navbar from '@/app/Components/Navbar/Navbar'
import SecondHotel from './SecondHotel'

const Hotels = () => {
  return (
    <div>
    <div className='h-screen'>
      <Navbar/>
      <img src="./images/hotels3.jpg" alt="ny" className='h-screen w-screen absolute'/>
      <div className='relative flex flex-col items-center justify-center text-white'>
        <span className='mt-48 text-3xl'>Discover</span>
        <p className='mt-8 text-2xl text-center tracking-wide'>Discover all the services that we provide here which will <br /> take your trip planning to the next level of comfort</p>
      </div>
    </div>
    <div>
        <SecondHotel />
    </div>
    </div>
  )
}

export default Hotels
