"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import '../login/login.css'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from "react-hot-toast";

const Signup = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    })

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            toast.success(response.data.message);
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.firstname.length > 0 && user.lastname.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

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
                    <input type="text" value={user.firstname} onChange={(e) => setUser({...user, firstname: e.target.value})} className='mt-3 w-full p-2 bg-transparent border-solid border-2 border-white rounded'/>
                </div>
                <div className='flex flex-col mt-4'>
                    <label htmlFor="lname" className='text-2xl'>Last Name</label>
                    <input type="text" value={user.lastname} onChange={(e) => setUser({...user, lastname: e.target.value})} className='mt-3 w-full p-2 bg-transparent border-solid border-2 border-white rounded'/>
                </div>
                </div>
                <div className='flex flex-col mt-4'>
                    <label htmlFor="email" className='text-2xl'>Email</label>
                    <input type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} className='mt-3 w-full p-2 bg-transparent border-solid border-2 border-white text-white rounded'/>
                </div>
                <div className='flex flex-col mt-4'>
                    <label htmlFor="password" className='text-2xl'>Password</label>
                    <input type="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} className='mt-3 w-full p-2 bg-transparent border-2 border-solid border-white rounded'/>
                </div>
                <div className='flex items-center justify-center mt-4'>
                    <button type='submit' onClick={onSignup} className='mt-4 bg-white text-xl text-black w-full p-2 rounded btn btn-background-slide'>Signup</button>
                </div>
                <span className='text-lg mt-4'>Already have an account? <Link href='/login'>Login</Link></span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup