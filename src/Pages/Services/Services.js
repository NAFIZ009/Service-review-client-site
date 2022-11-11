import React, {  } from 'react';
import { useLoaderData } from 'react-router-dom';
import OwnReview from '../../Component/OwnReview/OwnReview';
import Review from '../../Component/Review/Review';
import ServicePart from '../../Component/ServicePart/ServicePart';

const Services = () => {
    const loader=useLoaderData();
    return (
        <div className='my-10'>
            <h1 className='text-center text-6xl text-orange-400 underline' >Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 w-10/12 mx-auto my-10">
                {
                    loader.map(service=><ServicePart service={service}/>)
                }
            </div>
            <h1 className='text-center text-6xl text-orange-400 underline' >Reviews</h1>
            <div className="flex flex-col w-10/12 mx-auto gap-20 py-10">
                <Review></Review>
                <OwnReview></OwnReview>
            </div>
        </div>
    );
};

export default Services;