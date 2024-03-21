import React from 'react'
import Navbar from '@/app/Components/Navbar/Navbar'
import '../(auth)/login/login.css'


const Contact = () => {
  return (
    <div>
        <Navbar />
        <div className='h-screen w-screen overflow-hidden relative'>
            <img src="./images/paris.jpg" alt="sanf" className='h-full w-full object-cover' />
            <form action="" className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white'>
                <div className='backdrop-blur p-12 rounded-xl border-solid border-2 mt-12'>
                <h1 className='text-4xl text-center'>Contact</h1>
                <div className='flex items-center justify-between gap-10'>
                <div className='flex flex-col mt-5'>
                    <label htmlFor="fname" className='text-2xl'>First Name</label>
                    <input type="text" className='mt-3 w-full p-2 bg-transparent border-solid border-2 border-white rounded'/>
                </div>
                <div className='flex flex-col mt-5'>
                    <label htmlFor="lname" className='text-2xl'>Last Name</label>
                    <input type="text" className='mt-3 w-full p-2 bg-transparent border-solid border-2 border-white rounded'/>
                </div>
                </div>
                <div className='flex flex-col mt-5'>
                    <label htmlFor="email" className='text-2xl'>Email</label>
                    <input type="email" className='mt-3 w-full p-2 bg-transparent border-solid border-2 border-white text-white rounded'/>
                </div>
                <div className='flex flex-col mt-5'>
                    <label htmlFor="message" className='text-2xl'>Message</label>
                    <input type="text" className='mt-3 w-full p-2 bg-transparent border-solid border-2 border-white text-white rounded'/>
                </div>
                <div className='flex items-center justify-center mt-5'>
                    <button type='submit' className='mt-4 bg-white text-xl text-black w-full p-2 rounded btn btn-background-slide'>Submit</button>
                </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact