"use client"
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Makeplan = () => {

  return (
    <div>
      <h1 className='text-3xl text-center mt-16'>Plan a new Trip</h1>
      <form action="">
      <div className='p-6'>
        <label htmlFor="destination">Destination</label>
        <Input type='text' className='rounded mt-3'/>
      </div>
      <div>
        <button>Invite Tripmates</button>
        <div className='p-6'>
            <label htmlFor="invite">Invite Tripmates by email</label>
            <Input type='email' className='rounded mt-3'/>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <Button className='bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white text-xl rounded'>Start Planning</Button>
      </div>
      <Link href='/guide' className='flex items-center justify-center mt-2'>
      <span className='text-center text-gray-500 font-semibold hover:text-black transition-all duration-150'>Or write a guide</span>
      </Link>
      </form>
    </div>
  )
}

export default Makeplan
