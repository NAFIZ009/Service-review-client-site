import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NoDataFound from '../../Component/NoDataFound/NoDataFound';
import ServicePart from '../../Component/ServicePart/ServicePart';
import { ContextAuth } from '../../Context/AuthContext';

const ServiceAdd = () => {
    const services=useLoaderData();
    const {user}=useContext(ContextAuth);
    const {addedService,setAddedService}=useState(services);

    const subHandler =e=>{
        e.preventDefault();
        const form=e.target;
        const serviceName=form.service.value;
        const serviceDisc=form.disc.value;
        const servicePrice=form.price.value;
        const serviceImg=form.img.value;
        const serviceMail=form.email.value;
        const service={
            name: serviceName,
            disc: serviceDisc,
            price:`$${servicePrice}`,
            img:serviceImg,
            mail:serviceMail
        }
        fetch('http://localhost:5000/services',{
            method: 'POST',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
        .then(()=>setAddedService(prev=>{return [...prev,service]}))

    }
    return (
        <>
        <div className='my-16'>
        <h1 className='text-center text-3xl underline text-orange-500 font-bold'>Add Your Service</h1>
        <form onSubmit={subHandler} className="mt-8 space-y-6 max-w-xl mx-auto " action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm flex flex-col gap-5">
          <div>
            
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              value={user.email}
              disabled
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-8 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            
            <input
              id="service-name"
              name="service"
              type="text"
              required
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-8 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Service Name"
            />
          </div>
          <div>
            
            <input
              id="service-desc"
              name="disc"
              type="text"
              required
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-8 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Service Description"
            />
          </div>
          <div>
            
            <input
              id="service-price"
              name="price"
              type="number"
              required
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-8 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Service Price"
            />
          </div>
          <div>
            
            <input
              id="service-img"
              name="img"
              type="text"
              required
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-8 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Service Image URL"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Service
          </button>
        </div>
      </form>
        </div>
        <div className="my-10">
        <h1 className='text-center text-3xl mb-10 underline text-orange-500 font-bold'>Your Added Service</h1>
        {
            addedService?addedService.map(ser=><ServicePart service={ser} ></ServicePart>):<NoDataFound></NoDataFound>
        }
        
        </div>
        
        </>
    );
};

export default ServiceAdd;