import React from 'react'
import Link from 'next/link'
import './login.css'

const Login = () => {
  return (
    <div>
        <div className='h-screen w-screen overflow-hidden relative'>
            <img src="./images/photo.jpg" alt="sanf" className='h-full w-full object-cover' />
            <form action="" className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white'>
                <div className='backdrop-blur p-12 rounded-xl border-solid border-2'>
                <h1 className='text-5xl text-center'>Login</h1>
                <div className='flex flex-col mt-5 input-field'>
                    <label htmlFor="email" className='text-2xl'>Email</label>
                    <input type="email" className='mt-3 rounded w-full p-2 bg-transparent border-solid border-2 border-white text-white'/>
                </div>
                <div className='flex flex-col mt-5 input-field'>
                    <label htmlFor="password" className='text-2xl'>Password</label>
                    <input type="password" className='mt-3 rounded w-full p-2 bg-transparent border-2 border-solid border-white'/>
                </div>
                <div className='flex items-center justify-between gap-12 mt-6'>
                <div className='flex items-center mt-4'>
                    <input type="checkbox" className='h-5 w-5' />
                    <span className='text-xl ml-4'>Remember me?</span>
                </div>
                <div className='mt-4'>
                    <Link href='/forgot' className='text-white text-xl'>Forgot Password?</Link>
                </div>
                </div>
                <div className='flex items-center justify-center mt-6'>
                    <button type='submit' className='mt-4 rounded bg-white text-xl text-black w-full p-2 btn btn-background-slide'>Login</button>
                </div>
                <span className='text-lg mt-4'>Don't have an account? <Link href='/signup'>Register</Link></span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login