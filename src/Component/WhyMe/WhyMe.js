import React from 'react';
import { Link } from 'react-router-dom';

const WhyMe = () => {
    return (
        <div className="hero  bg-red-100 my-20">
  <div className="hero-content flex-col lg:flex-row py-6 lg:py-0 gap-10">
  <img src="https://i.ibb.co/ZgnGm0G/20220505-215806-removebg-preview.png" alt="20220505-215806-removebg-preview" className='relative bottom-0' border="0"/>
    <div className=''>
      <h1 className="text-6xl font-bold text-red-500">Why Me ? ? ? ? ?</h1>
      <p className="py-6 text-lg">There is a lot of people in the market who giving you this kind of services in lower cost.But here I try to Provide my client a quality service and a better experience.</p>
      <Link to='/register' className="btn btn-primary text-white" style={{marginBottom:'20px'}}>Register</Link>
    </div>
  </div>
</div>
    );
};

export default WhyMe;