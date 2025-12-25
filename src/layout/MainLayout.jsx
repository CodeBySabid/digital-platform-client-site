import React from 'react';
import { Outlet } from 'react-router';
import Home from '../page/Home/Home';
import Fotter from '../page/Shared/Fotter';
import Navbar from '../page/Shared/Navbar';

const MainLayout = () => {
    return (
        <div>
            <div className='mb-10'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default MainLayout;