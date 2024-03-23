import React from 'react'
import Navbar from '@/app/Components/Navbar/Navbar'
import Link from 'next/link'

const Makeplan = () => {
  return (
    <div className='h-screen w-screen overflow-hidden relative'>
        <img src="./images/plan.jpg" alt="plan" />
      <form action="" className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white'>
        <div className='mt-14 backdrop-blur p-12 rounded-xl border-solid border-2'>
            <h1 className='text-center text-2xl tracking-wide'>Plan Your Trip</h1>
            <div className='flex flex-col mt-6'>
            <label htmlFor="place" className='text-xl'>Where Do you want to go ?</label>
            <input type="text" className='mt-2 text-black p-2 rounded' />
        </div>
        <div className='flex flex-col mt-2'>
            <label htmlFor="startdate" className='text-xl'>Enter Start date</label>
            <input type="date" name="date" id="date" className='mt-2 p-2 rounded text-black' />
        </div>
        <div className='flex flex-col mt-2'>
            <label htmlFor="enddate">Enter End Date</label>
            <input type="date" name='date' className='mt-2 text-black p-2 rounded'/>
        </div>
        <div className='mt-3'>
            <Link href='/invite'>Invite Tripmates</Link>
        </div>
        <br />
        <div className='flex items-center justify-center'>
            <button type='submit' className='text-xl bg-white text-black hover:bg-gray-700 w-full p-2 rounded hover:text-white transition-all duration-200'>Start Planning</button>
        </div>
        <br />
        <div className='flex items-center justify-center mt-5'>
            <span className=''>OR</span>
        </div>
        <br />
        <Link href='/chatbot'>Ask AI for help in planning your trip</Link>
        <br />
        <div className='flex items-center justify-center mt-4'>
            <span>Or write a guide</span>
        </div>
        </div>
      </form>
    </div>
  )
}

export default Makeplan
