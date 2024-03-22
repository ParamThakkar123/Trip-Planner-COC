"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import './login.css'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/profile");
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);
  return (
    <div>
        <div className='h-screen w-screen overflow-hidden relative'>
            <img src="./images/photo.jpg" alt="sanf" className='h-full w-full object-cover' />
            <form action="" className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white'>
                <div className='backdrop-blur p-12 rounded-xl border-solid border-2'>
                <h1 className='text-5xl text-center'>Login</h1>
                <div className='flex flex-col mt-5 input-field'>
                    <label htmlFor="email" className='text-2xl'>Email</label>
                    <input type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} className='mt-3 rounded w-full p-2 bg-transparent border-solid border-2 border-white text-white'/>
                </div>
                <div className='flex flex-col mt-5 input-field'>
                    <label htmlFor="password" className='text-2xl'>Password</label>
                    <input type="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} className='mt-3 rounded w-full p-2 bg-transparent border-2 border-solid border-white'/>
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
                    <button type='submit' onClick={onLogin} className='mt-4 rounded bg-white text-xl text-black w-full p-2 btn btn-background-slide'>Login</button>
                </div>
                <span className='text-lg mt-4'>Don't have an account? <Link href='/signup'>Register</Link></span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login