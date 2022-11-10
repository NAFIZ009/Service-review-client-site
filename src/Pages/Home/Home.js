import React from 'react';
import FAQ from '../../Component/FAQ/FAQ';
import Slider from '../../Component/Slider/Slider';
import WhyMe from '../../Component/WhyMe/WhyMe';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Slider></Slider>
            <WhyMe></WhyMe>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;