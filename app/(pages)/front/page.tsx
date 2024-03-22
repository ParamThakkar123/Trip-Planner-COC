"use client"
import React, { useMemo } from 'react'
import Navbar from '@/app/Components/Navbar/Navbar'
import Second from './div2'
import '../(auth)/login/login.css'

const Front = () => {
    const renderVideo = useMemo(
        () => (
            <video src="./videos/aeroplane.mp4" autoPlay muted loop className='absolute inset-0 w-full h-full object-cover opacity-90' preload='auto' />
        ),
        []
    )
  return (
    <div>
        <div className='h-screen'>
      <Navbar />
      <div className='relative w-full h-full'>
        {renderVideo}
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
          <div className='text-4xl hero-text'>
            Welcome to Adventure Atlas 
          </div>
          <p className='text-3xl p-6 pt-14'>
                where your travel dreams take flight! We believe that every journey begins with a single step, and we're here to guide you through every stage of your adventure planning.
            </p>
        </div>
      </div>
    </div>
    <div>
        <Second />
    </div>
    </div>
  )
}

export default Front