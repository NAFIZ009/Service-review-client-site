import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FAQ from '../../Component/FAQ/FAQ';
import HomeService from '../../Component/HomeService/HomeService';
import Slider from '../../Component/Slider/Slider';
import WhyMe from '../../Component/WhyMe/WhyMe';

const Home = () => {
    const services=useLoaderData();
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Slider></Slider>
            <HomeService services={services}></HomeService>
            <WhyMe></WhyMe>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;