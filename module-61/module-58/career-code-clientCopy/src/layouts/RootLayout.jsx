import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/shared/Navbar';
import Footer from '../Pages/shared/Footer';

const RootLayout = () => {
    return (
        <div className=' mx-auto'>
            <Navbar></Navbar>

            <Outlet></Outlet>

            <Footer></Footer>
            
        </div>
    );
};

export default RootLayout;