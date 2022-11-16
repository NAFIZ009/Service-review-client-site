import React, { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
const ServicePart = ({service,isHome=false}) => {
    const {_id,name,price,img,disc,mail}=service;
    return (
        <div className="card max-w-96 h-auto bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
    <PhotoProvider>
    <PhotoView src={img}>
    <img src={img} alt="Shoes" className="rounded-xl h-52 " />
  </PhotoView>
    </PhotoProvider>
    
  </figure>
  <div className="card-body items-center text-center align-between">
    <h2 className="card-title text-2xl">{name}</h2>
    <h2 className="text-gray-500 text-lg">{mail}</h2>
    <p className='text-gray-600'>{isHome?disc.substring(1,101):disc}.... <Link to={`/services/${_id}`} >Read More</Link></p>
    <p className='text-xl font-bold '>Price :- {price}</p>
    <div className="card-actions ">
      <Link to={`/services/${_id}`} className="btn btn-primary">Full Details</Link>
    </div>
  </div>
</div>
    );
};

export default ServicePart;


// {disc.length>=100&&disc.substring(0,101)}