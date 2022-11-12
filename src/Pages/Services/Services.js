import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NoDataFound from '../../Component/NoDataFound/NoDataFound';
import OwnReview from '../../Component/OwnReview/OwnReview';
import Review from '../../Component/Review/Review';
import ServicePart from '../../Component/ServicePart/ServicePart';

const Services = () => {
    const [reviews,setReviews]=useState([]);
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
               <OwnReview service={service} setReviews={setReviews}></OwnReview>
            </div>
        </div>
    );
};

export default Services;