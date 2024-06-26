'use client';

import axios from "axios";
import Head from "next/head"
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [login ,setLogin]=useState(false);

    const router=useRouter();

    const handleSignup=async()=>{
         const res= await axios.post(`api/user/register`,{name,email,password});
        if(res?.data){
            Cookies.set('user',res.data.token);
          alert(res.data.msg);
          router.push('/');

        }
    }
    const handleLogin=async()=>{
        const res= await axios.post(`api/user/login`,{email,password});
        if(res?.data){
            Cookies.set('user',res.data.token);
          alert(res.data.msg);
          router.push('/');
        }
    }

     const handleToggle=()=>{
        setLogin(!login);
    }
  return (
    <div>
        <Head>
            <title>BookingCyp-Login</title>
        </Head>
        <div className="flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover opacity-85">
            <div className=" absolute w-full top-7 px-20 flex items-center text-white ">
                <h2 className="text-3xl font-bold mr-5">BookingCyp</h2>
                <p className="font-bold text-2xl">Hotels and homes across 800 cities, 24+ countries</p>
            </div>
            <div className="flex justify-center items-center mx-20">
            <div className="text-white">
                <p className="font-bold text-5xl">There are a smarter way to BookingCyp around</p>
                <p className="text-2xl mt-5 text-justify">
                    Sign up with your phone number and get exclusive access to 
                    discounts and savings on BookingCyp stays and with our many travel partners.
                </p>
            </div>
            <div className="ml-20  w-10/12 border   pb-40 bg-slate-50">
             <p className="h-10 px-10 flex items-center  bg-gradient-to-r from-red-400 to bg-orange-600 text-lg font-bold text-white">Sign up & Get ₹500 BookingCyp</p>
             <div className="px-10 ">
                <h3 className="text-5xl font-bold my-5">Login/Signup</h3>
                <p className="font-bold text-lg mb-1">Please enter your phone number to continue</p>
                {
                    login ?(""):(
                <input type="name" placeholder="Enter your name.." className="outline-none border border-black px-3 py-1 w-96 h-10 "  onChange={(e)=>setName(e.target.value)} />

                    )
                }
                <input type="email" placeholder="Enter your email.." className="outline-none border border-black px-3 py-1 w-96 h-10 mt-4"  onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Enter your password.." className="outline-none border border-black px-3 py-1 w-96 h-10 mt-4"  onChange={(e)=>setPassword(e.target.value)} />
                
                <button type="submit" className=" w-96 h-14 text-lg font-bold bg-red-400 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-md" onClick={ login? handleLogin: handleSignup} >{login?"Login":"Sign Up"}</button>
                <p className="my-1 text-xl ">
                    <span>{login? "Don`t have an account":"Already have an account ?"}</span>
                    <span className="ml-1 border-b-2 border-red-500 text-red-600 hover:cursor-pointer" onClick={handleToggle} >{""}{login?"Sign Up":"Login"}</span>
                </p>
             </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Login