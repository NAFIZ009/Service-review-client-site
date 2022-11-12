import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NoDataFound from '../../Component/NoDataFound/NoDataFound';
import Review from '../../Component/Review/Review';

const MyReviews = () => {
    const data=useLoaderData();
    const [reviews,setReviews]=useState(data);
    return (
        <div style={{
            minHeight:'100vh'
        }}>
            <h1 className='text-center text-6xl text-orange-400 underline' >Reviews</h1>
            <div className="flex flex-col w-10/12 mx-auto gap-20 py-10">
            { 
               reviews==null||reviews.length===0?
               <NoDataFound></NoDataFound>
               : 
               reviews.map(review=><Review myreviews reviewDetails={review} setReviews={setReviews} reviews={reviews}></Review>)
            }
            </div>
        </div>
    );
};

export default MyReviews;