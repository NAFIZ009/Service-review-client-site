import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import { ContextAuth } from '../../Context/AuthContext';
import { DynamicTittle } from '../../Component/SharedCompo/DynamicTittle/DynamicTittle';
const Register = () => {
  const navigate=useNavigate();
    const {register,updateProfileInfo,google}=useContext(ContextAuth);
    const [registered,setRegistered]=useState(false);
    const [error,setError]=useState("");
    const submitHandler=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const img=form.img.value;
        const email=form.email.value;
        const password=form.password.value;
        register(email,password)
        .then(res=>{
          updateProfileInfo(name,img);
          setRegistered(true);
          form.reset();
          navigate('/')
        })
        .catch(err=>setError(err.massage))
    };
    const googleHandler=()=>{
        google()
        .then(res=>{
          setRegistered(true);
          navigate('/')
        })
        .catch(err=>setError(err.massage))
    };
    return (
        <>
        {registered&&<div className="alert alert-success shadow-lg">
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
        <DynamicTittle title='Register'></DynamicTittle>
        <div className="flex min-h-screen justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-sky-500">
              Register For New account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={submitHandler}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="name"
                  type="text"
                  name='name'
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
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
                  className="relative block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="img" className="sr-only">
                  Image Link
                </label>
                <input
                  name="img"
                  type="text"
                  required
                  className="relative block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Image Link"
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
                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  All Ready Have Another Account?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Register
              </button>
            </div>
          </form>
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body flex-row justify-between">
                <h2 className="card-title">You Can Also Register With -</h2>
                <Link onClick={googleHandler}><BsGoogle className='text-4xl text-red-500'/></Link>
                
            </div>
        </div>
        </div>
      </div>
        
        </>
    );
};

export default Register;