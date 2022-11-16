import React, { useContext, useState } from 'react';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { BsGoogle } from 'react-icons/bs';
import { ContextAuth } from '../../Context/AuthContext';
import { DynamicTittle } from '../../Component/SharedCompo/DynamicTittle/DynamicTittle';
const Login = () => {
  const navigate=useNavigate()
    const location=useLocation();
    const {login,google}=useContext(ContextAuth);
    const [loggedIn,setLoggedIn]=useState(false);
    const [error,setError]=useState("");
    const from=location.state?.from?.pathname || '/';
    
    const submitHandler=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        login(email,password)
        .then(async(res)=>{
                form.reset();
                setLoggedIn(true);
                await fetch('https://video-walah-server-nafiz009.vercel.app/jwt',{
                  method: 'POST',
                  headers:{
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify({email})
                })
                .then(res=>res.json())
                .then(data=>{
                  localStorage.setItem('token',data.token);
                })
                .catch(err=>console.log(err.massage));
                navigate(from,{replace:true});
        })
        .catch(err=>setError(err.massage))
    };

    const googleHandler=()=>{
        google()
        .then(async(res)=>{
          setLoggedIn(true);
          const email=res.user.email;
          await fetch('https://video-walah-server-nafiz009.vercel.app/jwt',{
                  method: 'POST',
                  headers:{
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify({email})
                })
                .then(res=>res.json())
                .then(data=>{
                  localStorage.setItem('token',data.token);
                })
                .catch(err=>console.log(err.massage))
          navigate(from,{replace:true});
        })
        .catch(err=>setError(err.massage))
    };

    
    return (
        <>
        <DynamicTittle title='Login'></DynamicTittle>
        {loggedIn&&<div className="alert alert-success shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Registration SuccessFull</span>
  </div>
</div>}
{
  error&&<div className="alert alert-error shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Error! {error}</span>
  </div>
</div>
}
        <div className="flex min-h-screen justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-sky-500">
              Log in to your account
            </h2>
          </div>
          <form onSubmit={submitHandler} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              

              <div className="text-sm">
                <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                  New Here? Click Here For Register
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body flex-row justify-between">
                <h2 className="card-title">You Can Also LogIn With -</h2>
                <Link onClick={googleHandler}><BsGoogle className='text-4xl text-red-500'/></Link>
                
            </div>
        </div>
        </div>
      </div>
        
        </>
    );
};

export default Login;