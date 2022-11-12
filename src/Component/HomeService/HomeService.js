import React from 'react';
import { Link } from 'react-router-dom';
import ServicePart from '../../Component/ServicePart/ServicePart';
const HomeService = ({services}) => {

    return (
        <div>
        <h1 className='text-center text-5xl text-green-500'>Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 w-10/12 mx-auto my-10">
        {
            services.map(service=><ServicePart isHome service={service}/>)
        }
        
        </div>
        <Link to='/services' className='btn btn-primary w-52 mx-auto block py-4 '>See More</Link>
        </div>
    );
};

export default HomeService;