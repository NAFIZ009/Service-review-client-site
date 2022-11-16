import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NoDataFound from '../../Component/NoDataFound/NoDataFound';
import ServicePart from '../../Component/ServicePart/ServicePart';
import { DynamicTittle } from '../../Component/SharedCompo/DynamicTittle/DynamicTittle';

const Services = () => {
    const service=useLoaderData();
    

    return (
        <div className='my-10'>
            <DynamicTittle title='Service'></DynamicTittle>
            <h1 className='text-center text-6xl text-orange-400 underline' >Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 w-10/12 mx-auto my-10">
                {
                   service==null?<NoDataFound></NoDataFound>:service.map(servicess=><ServicePart isHome service={servicess}/>)
                }
            </div>
           
        </div>
    );
};

export default Services;