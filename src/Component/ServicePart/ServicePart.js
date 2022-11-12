import React from 'react';

const ServicePart = ({service,isHome=false}) => {
    const {name,price,img,disc}=service;
    return (
        <div className="card max-w-96 bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl h-52 " />
  </figure>
  <div className="card-body items-center text-center align-between">
    <h2 className="card-title text-2xl">{name}</h2>
    <p className='text-gray-600'>{isHome?disc.substring(1,101):disc}</p>
    <p className='text-xl font-bold '>Price :- {price}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ServicePart;


// {disc.length>=100&&disc.substring(0,101)}