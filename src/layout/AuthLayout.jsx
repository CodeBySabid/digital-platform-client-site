import React from 'react';
import logo from '../assets/Log & icon/logo.png'
import { Link, Outlet } from 'react-router';
import Authimage from '../assets/Log & icon/authImage.png'

const AuthLayout = () => {
    return (
        <div className='w-full h-screen flex'>
            <div className='p-2 sm:w-[60] md:w-[50%] w-full sm:p-11'>
                <Link to={'/'} className='relative'>
                    <img className='w-10' src={logo} alt="" />
                    <h1 className='text-2xl absolute bottom-0 left-5 font-bold'>ZapShift</h1>
                </Link>
                <div className='w-full sm:h-[88%] h-[90%] flex justify-center items-center'>
                    <Outlet></Outlet>
                </div>
            </div>
            <div className='sm:flex items-center bg-[#FAFDF0] justify-center hidden md:w-[50%] w-[40%]'>
                <div>
                    <img src={Authimage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;