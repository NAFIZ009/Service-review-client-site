import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import NoDataFound from '../../Component/NoDataFound/NoDataFound';
import OwnReview from '../../Component/OwnReview/OwnReview';
import Review from '../../Component/Review/Review';
import ServicePart from '../../Component/ServicePart/ServicePart';
import { ContextAuth } from '../../Context/AuthContext';

const Services = () => {
    const [reviews,setReviews]=useState([]);
    const location=useLocation();
    const {loading,user}=useContext(ContextAuth);
    const service=useLoaderData();
    
    useEffect(()=>{
        const clear=fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data));
        return ()=>clear
    },[])

    return (
        <div className='my-10'>
            <h1 className='text-center text-6xl text-orange-400 underline' >Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 w-10/12 mx-auto my-10">
                {
                   service==null?<NoDataFound></NoDataFound>:service.map(servicess=><ServicePart service={servicess}/>)
                }
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

export default Services;