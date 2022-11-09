import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Component/SharedCompo/Footer/Footer';
import Navbar from '../../Component/SharedCompo/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;