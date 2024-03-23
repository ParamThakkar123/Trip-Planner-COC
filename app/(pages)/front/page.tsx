"use client"
import React, { useMemo } from 'react'
import Navbar from '@/app/Components/Navbar/Navbar'
import Second from './div2'
import '../(auth)/login/login.css'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Front = () => {
    const renderVideo = useMemo(
        () => (
            <video src="videos/waves.mp4" autoPlay muted loop className='absolute inset-0 w-full h-full object-cover opacity-90' preload='auto' />
        ),
        []
    )
  return (
    <div>
        <div className='h-screen'>
          <div className='absolute z-10'>
            <Navbar />
          </div>
      <div className='relative w-full h-full'>
        {renderVideo}
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
          <div className='text-4xl hero-text'>
            Welcome to Adventure Atlas 
          </div>
          <p className='text-3xl p-6 pt-14'>
                where your travel dreams take flight! We believe that every journey begins with a single step, and we're here to guide you through every stage of your adventure planning.
            </p>
            <Button className='text-2xl bg-white text-black rounded p-2 hover:bg-gray-200 transition-all duration-300'>
              <Link href='/makeplan'>Start Planning</Link>   
            </Button>
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