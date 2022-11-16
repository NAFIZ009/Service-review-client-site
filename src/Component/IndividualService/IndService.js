/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ContextAuth } from '../../Context/AuthContext';
import OwnReview from '../OwnReview/OwnReview';
import Review from '../Review/Review';
import NoDataFound from '../NoDataFound/NoDataFound';


const IndService = () => {
    const [reviews,setReviews]=useState([]);
    const {loading,user}=useContext(ContextAuth);
    const [service]=useLoaderData();
    const location=useLocation();
    const {_id,name,price,img,disc,mail}=service;
    useEffect(()=>{
        const clear=fetch(`https://video-walah-server-nafiz009.vercel.app/reviews/${service.name}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
        .catch()
        return ()=>clear
    },[]);
    return (
        <div>
        <div className="card lg:card-side bg-base-100 shadow-xl mx-5 my-10">
  <figure className='lg:w-6/12'>
  <PhotoProvider>
  <PhotoView src={img}>
  <img src={img} alt="Shoes"  />
  </PhotoView>
    </PhotoProvider>
  </figure>
  <div className="card-body lg:w-6/12 justify-center  flex flex-col gap-5">
    <h1 className='text-3xl font-bold'>{name}</h1>
    <h1 className='text-xl'>{mail}</h1>
    <h1 className='text-lg'>{price}</h1>
    <p className='text-gray-500 '>{disc}</p>
  </div>
</div>
<h1 className='text-center text-6xl text-orange-400 underline' >Reviews</h1>
<div className="flex flex-col w-10/12 mx-auto gap-20 py-10">
   { 
    reviews==null?<NoDataFound></NoDataFound>
    :
    reviews.map(review=><Review reviewDetails={review}></Review>)
   }
   {
    !loading&&user?
    <OwnReview service={service} setReviews={setReviews}></OwnReview> 
    :
    <div className="card w-full bg-base-100 shadow-xl">
<div className="card-body">
<div className="card-title">
<h2 className='text-3xl'>Give Your Review</h2>
</div>
<textarea disabled className='border border-red-600 w-full p-5 text-xl' placeholder='Please LogIn First'></textarea>
<div className="card-actions justify-end">
  <Link to='/login' state={{from:location}} className="btn btn-primary">LogIn Now</Link>
</div>
</div>
</div>
   }
   
</div>
        </div>
    );
};

export default IndService;