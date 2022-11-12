import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FAQ from '../../Component/FAQ/FAQ';
import HomeService from '../../Component/HomeService/HomeService';
import NoDataFound from '../../Component/NoDataFound/NoDataFound';
import Slider from '../../Component/Slider/Slider';
import WhyMe from '../../Component/WhyMe/WhyMe';

const Home = () => {
    const services=useLoaderData();
    console.log(services);
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Slider></Slider>
            {
               services==null?
               <NoDataFound></NoDataFound> 
               : 
               <HomeService services={services}></HomeService>
            }
            <WhyMe></WhyMe>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;