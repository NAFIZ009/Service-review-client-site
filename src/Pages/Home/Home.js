import React from 'react';
import Slider from '../../Component/Slider/Slider';
import WhyMe from '../../Component/WhyMe/WhyMe';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Slider></Slider>
            <WhyMe></WhyMe>
        </div>
    );
};

export default Home;