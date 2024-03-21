"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

const Navbar = () => {
    useEffect(() => {
        gsap.fromTo(".menu ul li", {opacity: 0, y:-250}, {opacity: 1, y: 0, duration: 1.4, stagger: 0.8})
        gsap.fromTo(".logo", {opacity: 0, x:-100}, {opacity:1 , x:0, duration: 1.2})
    }, [])
  return (
    <div className='flex items-center justify-between p-6 text-2xl absolute text-white z-10 gap-96'>
      <div className='logo'>
        Logo
      </div>
      <div className='menu'>
        <ul className='flex items-center justify-center'>
            <li className='mr-8'>
                <Link href='/'>Home</Link>
            </li>
            <li className='mr-8'>
                <Link href='/about'>About</Link>
            </li>
            <li className='mr-8'>
                <Link href='/discover'>Discover</Link>
            </li>
            <li className='mr-8'>
                <Link href='/contact'>Contact</Link>
            </li>
        </ul>
      </div>
      <div className='authmenu'>
        <ul className='flex'>
            <li className='mr-8'>
                <Link href='/login'>Login</Link>
            </li>
            <li className='mr-8'>
                <Link href='/signup'>Signup</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
