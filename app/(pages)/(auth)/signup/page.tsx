"use client"
import React from 'react'
import Link from 'next/link'
import '../login/login.css'

const Signup = () => {
  return (
    <div>
        <div className='h-screen w-screen overflow-hidden relative'>
            <img src="./images/photo2.jpg" alt="sanf" className='h-full w-full object-cover' />
            <form action="" className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white'>
                <div className='backdrop-blur p-12 rounded-xl border-solid border-2'>
                <h1 className='text-4xl text-center'>Signup</h1>
                <div className='flex items-center justify-between gap-10'>
                <div className='flex flex-col mt-4'>
                    <label htmlFor="fname" className='text-2xl'>First Name</label>
                    <input type="text" className='mt-3 w-full p-2 bg-transparent border-solid border-2 border-white rounded'/>
                </div>
                <div className='flex flex-col mt-4'>
                    <label htmlFor="lname" className='text-2xl'>Last Name</label>
                    <input type="text" className='mt-3 w-full p-2 bg-transparent border-solid border-2 border-white rounded'/>
                </div>
                </div>
                <div className='flex flex-col mt-4'>
                    <label htmlFor="email" className='text-2xl'>Email</label>
                    <input type="email" className='mt-3 w-full p-2 bg-transparent border-solid border-2 border-white text-white rounded'/>
                </div>
                <div className='flex flex-col mt-4'>
                    <label htmlFor="password" className='text-2xl'>Password</label>
                    <input type="password" className='mt-3 w-full p-2 bg-transparent border-2 border-solid border-white rounded'/>
                </div>
                <div className='flex flex-col mt-4'>
                    <label htmlFor="number" className='text-2xl'>Phone No.</label>
                    <input type="number" className='mt-3 w-full p-2 bg-transparent border-2 border-solid border-white rounded'/>
                </div>
                <div className='flex items-center justify-center mt-4'>
                    <button type='submit' className='mt-4 bg-white text-xl text-black w-full p-2 rounded btn btn-background-slide'>Signup</button>
                </div>
                <span className='text-lg mt-4'>Already have an account? <Link href='/login'>Login</Link></span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup